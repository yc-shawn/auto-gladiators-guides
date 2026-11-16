const fs = require('fs');
const path = require('path');

const buildDirectory = path.resolve(__dirname, '..', 'build');
const sectsDirectory = path.join(buildDirectory, 'sects');

fs.mkdirSync(sectsDirectory, { recursive: true });
fs.copyFileSync(
  path.join(buildDirectory, 'index.html'),
  path.join(sectsDirectory, 'index.html')
);
