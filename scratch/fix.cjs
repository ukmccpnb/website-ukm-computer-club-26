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
    
    // Fix case for 'Logo intech.png' to 'logo intech.png'
    content = content.replace(/Logo intech\.png/g, 'logo intech.png');

    // Replace all bad paths like '../../src/' or '../src/' or similar
    // Actually, let's just use a regex to find all imports pointing to assets or components using src/
    // We can look for import xxx from '....'
    const importRegex = /(?:import .*? from ['"]|src=['"])([^'"]+\.(png|jpg|JPG|jpeg|svg|gif|webp))['"]/g;
    let match;
    let newContent = content;

    while ((match = importRegex.exec(content)) !== null) {
        const fullMatch = match[0];
        let importPath = match[1];

        // if the path contains 'src/assets', we calculate the proper relative path
        if (importPath.includes('src/assets/')) {
            // strip everything before src/assets
            const index = importPath.indexOf('src/assets/');
            const cleanPath = importPath.substring(index); // "src/assets/..."
            
            // Full absolute path to the asset
            const absoluteAssetPath = path.resolve(process.cwd(), cleanPath);
            
            // Full absolute path to the current file's directory
            const currentDir = path.resolve(process.cwd(), path.dirname(f));

            // Calculate relative path from currentDir to absoluteAssetPath
            let properRelativePath = path.relative(currentDir, absoluteAssetPath);
            
            // Ensure path separators are forward slashes for imports
            properRelativePath = properRelativePath.replace(/\\/g, '/');

            // If it's in the same directory, path.relative might return just the filename, we want ./filename
            if (!properRelativePath.startsWith('.')) {
                properRelativePath = './' + properRelativePath;
            }

            if (properRelativePath !== importPath) {
                console.log(`Fixing path in ${f}: ${importPath} -> ${properRelativePath}`);
                // Simple string replace for this specific import path
                newContent = newContent.replace(importPath, properRelativePath);
            }
        }
    }

    if (newContent !== originalContent) {
        fs.writeFileSync(f, newContent, 'utf8');
        changedFilesCount++;
    }
});

console.log(`Fixed ${changedFilesCount} files.`);
