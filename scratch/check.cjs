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
const regex = /(?:import .*? from ['"]|src=['"])([^'"]+\.(png|jpg|JPG|jpeg|svg|gif|webp))['"]/g;

files.forEach(f => {
    const content = fs.readFileSync(f, 'utf8');
    let match;
    while ((match = regex.exec(content)) !== null) {
        let importPath = match[1];
        let resolvedPath;
        
        // Resolve path
        if (importPath.startsWith('/')) {
            resolvedPath = path.join('public', importPath);
        } else if (importPath.startsWith('../../src/')) {
            resolvedPath = importPath.replace('../../src/', 'src/');
        } else {
            resolvedPath = path.resolve(path.dirname(f), importPath);
        }

        if (!fs.existsSync(resolvedPath)) {
            console.log('File not found: ' + importPath + ' in ' + f);
        } else {
            const dir = path.dirname(resolvedPath);
            const basename = path.basename(resolvedPath);
            const dirFiles = fs.readdirSync(dir);
            if (!dirFiles.includes(basename)) {
                const actual = dirFiles.find(df => df.toLowerCase() === basename.toLowerCase());
                console.log('Case mismatch: ' + importPath + ' in ' + f + ' (actual: ' + actual + ')');
            }
        }
    }
});
