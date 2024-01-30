const fs = require('fs');

const packageJson = fs.readFileSync('package.json');
const packageData = JSON.parse(packageJson.toString());

const unpkgList = ['recharts', '@radix-ui/react-tabs'];

let scripts = '';

for (let dep in packageData.dependencies) {
  if (unpkgList.includes(dep)) {
    scripts += `<script src="https://unpkg.com/${dep}/umd/${dep}.min.js"></script>\n`;
  }
}

console.log(scripts);
