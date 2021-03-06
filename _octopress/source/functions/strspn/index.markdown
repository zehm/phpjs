---
layout: page
title: "JavaScript strspn function"
comments: true
sharing: true
footer: true
alias:
- /functions/view/strspn:550
- /functions/view/strspn
- /functions/view/550
- /functions/strspn:550
- /functions/550
---
<!-- Generated by Rakefile:build -->
A JavaScript equivalent of PHP's strspn

{% codeblock strings/strspn.js lang:js https://raw.github.com/kvz/phpjs/master/functions/strings/strspn.js raw on github %}
function strspn(str1, str2, start, lgth) {
  //  discuss at: http://phpjs.org/functions/strspn/
  // original by: Valentina De Rosa
  // improved by: Brett Zamir (http://brett-zamir.me)
  //   example 1: strspn('42 is the answer, what is the question ...', '1234567890');
  //   returns 1: 2
  //   example 2: strspn('foo', 'o', 1, 2);
  //   returns 2: 2

  var found;
  var stri;
  var strj;
  var j = 0;
  var i = 0;

  start = start ? (start < 0 ? (str1.length + start) : start) : 0;
  lgth = lgth ? ((lgth < 0) ? (str1.length + lgth - start) : lgth) : str1.length - start;
  str1 = str1.substr(start, lgth);

  for (i = 0; i < str1.length; i++) {
    found = 0;
    stri = str1.substring(i, i + 1);
    for (j = 0; j <= str2.length; j++) {
      strj = str2.substring(j, j + 1);
      if (stri == strj) {
        found = 1;
        break;
      }
    }
    if (found != 1) {
      return i;
    }
  }

  return i;
}
{% endcodeblock %}

 - [Raw function on GitHub](https://github.com/kvz/phpjs/blob/master/functions/strings/strspn.js)

Please note that php.js uses JavaScript objects as substitutes for PHP arrays, they are 
the closest match to this hashtable-like data structure. 

Please also note that php.js offers community built functions and goes by the 
[McDonald's Theory](https://medium.com/what-i-learned-building/9216e1c9da7d). We'll put online 
functions that are far from perfect, in the hopes to spark better contributions. 
Do you have one? Then please just: 

 - [Edit on GitHub](https://github.com/kvz/phpjs/edit/master/functions/strings/strspn.js)


### Other PHP functions in the strings extension
{% render_partial _includes/custom/strings.html %}
