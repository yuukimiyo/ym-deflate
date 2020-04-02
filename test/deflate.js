const assert = require('assert');
const { deflate } = require('../')

describe('deflte test', function() {
  it("# deflate('hello') === 'eJzLSM3JyQcABiwCFQ=='", function() {
    assert('eJzLSM3JyQcABiwCFQ=='===deflate('hello'));
  })
})
