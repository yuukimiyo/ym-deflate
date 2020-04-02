"use strict";

const Buffer = require('buffer').Buffer;
const zlib = require('zlib');
const base64js = require('base64-js');

module.exports = (str) => {
  // compress plain strings to base64 strings.
  let zlibCompressedByteArray = zlib.deflateSync(new Buffer.from(str, 'utf-8'));
  let base64str = base64js.fromByteArray(zlibCompressedByteArray);

  return base64str;
}
