var fs = require('fs');

exports.render = function(template_name, values, callback){
    var str_array = [];
    var last_idx = 0;
    fs.readFile('templates/' + template_name, 'utf8', function(err, data){
        var re = /({{\s*([0-9a-zA-Z_]+)\s*}})/g;
        data.replace(re, function(match, full, identifier, idx) {
            str_array.push(data.slice(last_idx, idx) + values[identifier]);
            last_idx = idx + full.length;
        });

        if (last_idx !== data.length - 1){
            str_array.push(data.slice(last_idx, data.length));
        }

        callback(str_array.join(""));
    });
}