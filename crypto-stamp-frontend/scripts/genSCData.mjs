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

function buildWrite(name) {
  function write(data) {
    const path = process.cwd() + '/' + name + '.ts';
    fs.writeFileSync(path, 'const ' + name + ' = ');
    fs.appendFileSync(path, data);
    fs.appendFileSync(path, '\n\nexport default ' + name + ';');
    return data;
  }
  return write;
}

const workflow1 = pipe(
  JSON.parse,
  inspect,
  log,
  buildWrite( 'cryptoStampData')
);
const path1 = process.cwd() + '/../backend/out/CryptoStamp.sol/CryptoStamp.json';
console.log(path1)
workflow1(fs.readFileSync(path1, "utf-8"));

const workflow2 = pipe(
  JSON.parse,
  inspect,
  log,
  buildWrite('derivativeProductData')
);
const path2 = process.cwd() + '/../backend/out/CryptoStamp.sol/DerivativeProduct.json';
console.log(path2)
workflow2(fs.readFileSync(path2, "utf-8"));
