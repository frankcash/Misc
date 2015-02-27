var swig  = require('swig');
var express=require('express');
var template = swig.compileFile('views/index.html');
var output = template({
    pagename: 'awesome people',
    authors: ['Paul', 'Jim', 'Jane']
});
console.log(output)
