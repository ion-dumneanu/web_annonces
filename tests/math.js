var expect = require('expect.js');

var math = require('../math.js')

describe('math.js',function(){
	describe('add',function(){
	    it('add 2 numbers', function(){
               expect(math.add(3,4)).to.be.eql(7);
            });	
	});

        describe('subs',function(){
            it('subs 2 numbers', function(){
               expect(math.subs(3,4)).to.be.eql(-1);
            });
        });

});

