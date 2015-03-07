jest.dontMock('../sum');

describe('sum', function(){
  it('adds val x and y', function(){
    var sum = require('../sum');
    expect(sum(1,2)).toBe(3);
  })

});
