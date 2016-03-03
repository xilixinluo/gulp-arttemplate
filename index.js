/**
 * Created by eva on 15/10/13.
 */
var artTemplateEn = require('art-template');
var gulp = require('gulp');
var through = require('through-gulp');

function artTemplate(resource){
    var stream = through(function(file, enc, callback){
        var templateHtml = resource.toString();
        var json = file.contents.toString();
        var render = artTemplateEn.compile(templateHtml);
        var newContent = render(JSON.parse(json));
        file.contents = new Buffer(newContent);
        this.push(file);
        callback();
    });
    return stream;
}
module.exports = artTemplate;
