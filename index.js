// index.js
var m = require('mithril');

var Kaali = require('./Kaali');
var peruna = require('./Peruna');

var root = document.body;

m.render(root, [
  m('h1', 'Parsa'),
  m('input', 'parsaInput'),
  m(Kaali),
  m(peruna),
]);
