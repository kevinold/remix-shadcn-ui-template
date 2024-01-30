const fs = require('fs');

const packageJson = fs.readFileSync('package.json');
const packageData = JSON.parse(packageJson.toString());

const unpkgList = ['recharts', '@radix-ui/react-tabs'];

let scripts = '';

// https://www.npmjs.com/package/cdn-resolve
// https://unpkg.com/
// unpkg.com/:package@:version/:file

// https://unpkg.com/recharts/ ->  https://unpkg.com/browse/recharts@2.11.0/

// <script src="https://cdn.jsdelivr.net/npm/@radix-ui/react-slot@1.0.2/dist/index.min.js"></script>

// https://www.npmjs.com/package/cdnme
for (let dep in packageData.dependencies) {
  if (unpkgList.includes(dep)) {
    scripts += `<script src="https://unpkg.com/${dep}/umd/${dep}.min.js"></script>\n`;
  }
}

console.log(scripts);
