## example

```javascript
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

gulp.task('default', function(cb){
    return gulp.src(path.join(OUTPUTPATH, '/tmp/*.json'))
        .pipe($.arttemplate(fs.readFileSync(TEMPLATHTML)))
        .pipe($.rename({
            extname:'.html',
            dirname: OUTPUTPATH
        }))
        .pipe(gulp.dest('./'));
})

```
