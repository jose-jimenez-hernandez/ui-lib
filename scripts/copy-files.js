/* eslint-disable no-console */
const path = require('path');
const fse = require('fs-extra');

const packagePath = process.cwd();
const { name } = require(path.join(packagePath, 'package.json'));
const packageName = name.replace('@settle-ui/', '');
const publishPath = path.resolve(__dirname, '../lib', packageName);
const buildPath = path.join(packagePath, './lib');

async function prepend(file, string) {
  const data = await fse.readFile(file, 'utf8');
  await fse.writeFile(file, string + data, 'utf8');
}

async function createLibrary({ from, to }) {
  await fse.copySync(from, to);
}

async function run() {
  try {
    await createLibrary({ from: buildPath, to: publishPath });
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

run();
