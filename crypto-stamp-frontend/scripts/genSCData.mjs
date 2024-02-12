import * as fs from 'node:fs';
import process from 'node:process';
import util from 'node:util';

function pipe(...fns) {
  return (init) => {
    return fns.reduce((acc, fn) => fn(acc), init);
  }
}

function inspect(data) {
  return util.inspect(data, {depth: null, maxStringLength: null});
}

function log(data) {
  console.log(data);
  return data;
}

function write(data) {
  const path = process.cwd() + '/contractData.ts';
  fs.writeFileSync(path, 'const cryptoStampData = ');
  fs.appendFileSync(path, data);
  fs.appendFileSync(path, '\n\nexport default cryptoStampData;');
  return data;
}

const workflow = pipe(JSON.parse, inspect, log, write)
const path = process.cwd() + '/../backend/out/CryptoStamp.sol/CryptoStamp.json';
console.log(path)
workflow(fs.readFileSync(path, "utf-8"));
