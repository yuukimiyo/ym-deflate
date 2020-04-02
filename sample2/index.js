const { deflate, inflate } = require("ym-deflate");

console.log("----------deflte----------");

console.log("input: hello");
console.log(deflate("hello"));
// eJzLSM3JyQcABiwCFQ==

console.log("----------inflate----------");

console.log("input: eJzLSM3JyQcABiwCFQ==");
console.log(inflate("eJzLSM3JyQcABiwCFQ=="));
// hello
