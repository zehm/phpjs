
/////////////////////////////////////////////////////////////////////
//  Function: htmlentities(string, quote_style=<ENT_QUOTES|ENT_COMPAT|ENT_NOQUOTES>)
//  
//  Description
//      JS equivalent of PHP's htmlentities function.
// 
//  Notes:
//    discuss at: http://phpjs.org/functions/htmlentities/
//   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
//    revised by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
//    revised by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
//   improved by: nobbler
//   improved by: Jack
//   improved by: Rafał Kukawski (http://blog.kukawski.pl)
//   improved by: Dj (http://phpjs.org/functions/htmlentities:425#comment_134018)
//   bugfixed by: Onno Marsman
//   bugfixed by: Brett Zamir (http://brett-zamir.me)
//      input by: Ratheous
//    depends on: get_html_translation_table
//     example 1: htmlentities('Kevin & van Zonneveld');
//     returns 1: 'Kevin &amp; van Zonneveld'
//     example 2: htmlentities("foo'bar","ENT_QUOTES");
//     returns 2: 'foo&#039;bar'
/////////////////////////////////////////////////////////////////////
htmlentities = function(string, quote_style) {
    var hash_map = {}, symbol = '', entity = '';
    hash_map = get_html_translation_table('HTML_ENTITIES', quote_style);
    if (hash_map === false) return false;
    
    // First loop replaces special characters with __NUMBER__
    var symbols_used = {};
    for (symbol in hash_map) {
        if (hash_map.hasOwnProperty(symbol)) {
            string = string.split(symbol).join('__'+symbol.charCodeAt(0)+'__');
            symbols_used[symbol.charCodeAt(0)] = true;
        }
    }

    // Second loop replaces __NUMBER__ with the approperiate html entity
    for (symbol in symbols_used) {
        if (symbols_used.hasOwnProperty(symbol)) {
            string = string.split('__'+symbol+'__').join(hash_map[String.fromCharCode(symbol)]);
        }
    }
    
    return string;
};
