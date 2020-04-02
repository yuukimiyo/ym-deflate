const assert = require('assert');
const { inflate } = require('../')

describe('inflate test', function() {
  it("# inflate('eJzLSM3JyQcABiwCFQ==') === 'hello'", function() {
    assert('hello'===inflate('eJzLSM3JyQcABiwCFQ=='));
  })
})
