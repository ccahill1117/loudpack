import { Example } from './../src/example.js';

describe('Example', function() {
  it('should test whether an example has been instantiated', function() {
    var newExample = new Example();
    expect(newExample.example).toEqual("no");
  });
});
