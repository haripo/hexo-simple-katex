var katex = require('katex');

function filter(data) {
  var displayRegExp = new RegExp(/\$\$[^$]*\$\$/, 'mg');
  data.content = data.content.replace(displayRegExp, function(s) {
    return katex.renderToString(s.slice(2, -2), { displayMode: true });
  });

  var regexp = new RegExp(/\$[^$]*\$/, 'mg');
  data.content = data.content.replace(regexp, function(s) {
    return katex.renderToString(s.slice(1, -1));
  });
  return data;
}

module.exports = filter;
