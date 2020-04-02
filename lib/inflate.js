"use strict";

const zlib = require('zlib');
const base64js = require('base64-js');

module.exports = (base64str) => {
  // decompress base64 strings to plain strings.
  let base64decoded = (base64js.toByteArray(base64str));
  let output = zlib.inflateSync(base64decoded);

  return output.toString('utf-8', 0, output.length);
}
