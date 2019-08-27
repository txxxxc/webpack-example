const path = require('path');

const outputPath = path.resolve(__dirname, 'dist');
console.log({ outputPath });

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    filename: 'main.js',
    path: outputPath
  }
};
