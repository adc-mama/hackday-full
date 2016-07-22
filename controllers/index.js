var template = require('../dist/js/template.js')
var path = require('path')

module.exports = function indexController (req, res) {
  var data = [
	  {id: 1, author: 'Commercial', text: 'This is one comment'},
	  {id: 2, author: 'Residential', text: 'This is *another* comment'}
	]
	var html = template(data)
  res.setHeader('Content-Type', 'text/html')
  res.end(html)
}
