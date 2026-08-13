const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(file));
        } else {
            if (file.endsWith('.js') || file.endsWith('.jsx')) {
                results.push(file);
            }
        }
    });
    return results;
}

const files = walk('src');
let changedFilesCount = 0;

files.forEach(f => {
    let content = fs.readFileSync(f, 'utf8');
    let originalContent = content;

    // Match <img ...> even if it spans multiple lines
    const imgRegex = /<img\s([^>]+)>/gi;
    
    let newContent = content.replace(imgRegex, (match, p1) => {
        let newAttrs = p1;
        
        // Check if loading="lazy" exists, if not, add it
        if (!/loading=['"]lazy['"]/i.test(newAttrs)) {
            // Also remove any existing loading attribute just in case
            newAttrs = newAttrs.replace(/loading=['"][^'"]*['"]\s*/i, '');
            newAttrs += ' loading="lazy"';
        }
        
        // Check if decoding="async" exists, if not, add it
        if (!/decoding=['"]async['"]/i.test(newAttrs)) {
            // Also remove any existing decoding attribute just in case
            newAttrs = newAttrs.replace(/decoding=['"][^'"]*['"]\s*/i, '');
            newAttrs += ' decoding="async"';
        }

        return `<img ${newAttrs.trim()}>`;
    });

    // Handle self-closing images like <img ... />
    const imgRegexSelfClosing = /<img\s([^>]+)\/>/gi;
    newContent = newContent.replace(imgRegexSelfClosing, (match, p1) => {
        // Because the first regex might have matched <img ... /> as <img ... /> without the closing slash if we're not careful,
        // Wait, <img\s([^>]+)> matches <img ... /> because '/' is not '>'.
        // So the first regex already matches self-closing tags, and the captured group p1 will include the '/'.
        // If p1 includes '/', we should probably keep it at the end.
        // Actually, the first regex replaced the whole <img ... /> with <img ...> if the closing tag was captured in p1.
        // Let's refine the regex replacement.
        return match; // We don't need this second one if we fix the first.
    });

    // Let's rewrite the replacement to be safer about self-closing tags.
    // Instead of the above, let's do this:
    let safeNewContent = originalContent.replace(/<img\s+([^>]+?)(\s*\/?)>/gi, (match, attrs, selfClose) => {
        let newAttrs = attrs;
        
        if (!/loading=['"]lazy['"]/i.test(newAttrs)) {
             newAttrs = newAttrs.replace(/loading=['"][^'"]*['"]\s*/i, '');
             newAttrs += ' loading="lazy"';
        }
        
        if (!/decoding=['"]async['"]/i.test(newAttrs)) {
             newAttrs = newAttrs.replace(/decoding=['"][^'"]*['"]\s*/i, '');
             newAttrs += ' decoding="async"';
        }
        
        return `<img ${newAttrs.trim()}${selfClose ? ' /' : ''}>`;
    });

    if (safeNewContent !== originalContent) {
        fs.writeFileSync(f, safeNewContent, 'utf8');
        changedFilesCount++;
        console.log(`Updated ${f}`);
    }
});

console.log(`Successfully updated ${changedFilesCount} files.`);
