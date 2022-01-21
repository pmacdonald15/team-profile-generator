const fse = require('fs-extra');

const ensureDir = (sampleHtml) => {
  return new Promise((resolve, reject) => {
    fse.ensureDir('./dist', err => {
      if (err) {
        reject(err);
        return;
      }

      resolve(sampleHtml);
    });
  });
};


const writeFile = fileContent => {
  return new Promise((resolve, reject) => {
    fse.writeFile('./dist/index.html', fileContent, err => {
      // if an error occurs, rejects and sends error to "catch" method
      if (err) {
        reject(err);
        // returns to ensure it doesnt run other function as well
        return;
      }

      // if it meets criteria, then sends to "then" method
      resolve({
        ok: true,
        message: 'HTML file created!'
      });
    });
  });
};

const copyFile = fileContent => {
  return new Promise((resolve, reject) => {
    fse.copyFile('./src/style.css', './dist/style.css', err => {
      // if error occurs, rejects and sends to "catch" method
      if (err) {
        reject(err);
        // returns to make sure another function isnt ran
        return;
      }

      // if it passes criteria, sends to the "then" method
      resolve({
        ok: true,
        message: 'CSS file copied!'
      });
    });
  });
};

module.exports = { ensureDir, writeFile, copyFile };