var LIVERELOAD_PORT = 35729;

var SRC = {
    sass: [
        "source/sass/*.sass"
    ],
    jade: [
        "source/*.jade"
    ],
    js: [
        "source/js/*.js"
    ]
};

var WATCH = {
    sass: [
        "source/sass/*.sass"
    ],
    jade: [
        "source/*.jade"
    ],
    js: [
        "source/js/*.js"
    ]
};

var DEST = "build/";

var OPTIONS = {
    sass: {
        indentedSyntax: true,
        comments: 'map',
        style: 'compact',
        sourceMap: 'sass'
    },
    jade: {
        pretty: true
    }
};


var gulp = require("gulp"),
    gutil = require("gulp-util"),
    sass = require("gulp-sass"),
    jade = require("gulp-jade-php"),
    watch = require("gulp-watch"),
    plumber = require('gulp-plumber'),
    tinylr = require('tiny-lr')(),
    del = require("del");


var notifyLiveReload = function (event) {
    var fileName = require('path').relative(__dirname, event.path);

    tinylr.changed({
        body: {
            files: [fileName]
        }
    });
    gutil.log(gutil.colors.green("liveReload"));
};

function display(error) {
    gutil.log(gutil.colors.red(error));
    this.emit("end");
}

gulp.task('liveReload', function () {
    tinylr.listen(LIVERELOAD_PORT);
});


gulp.task("clean", function (cb) {
    return del([
            DEST + '/**',
            '!' + DEST + '/dev/**',
            '!' + DEST + '/dev'
        ], {
            force: true, dot: true
        }
    );
});


gulp.task("jade", function (done) {
    gulp.src(SRC.jade)
        .pipe(plumber())
        .pipe(jade(OPTIONS.jade))
        .on("error", display)
        .pipe(gulp.dest(DEST))
        .on("end", done);

    notifyLiveReload;
});

gulp.task("sass", function (done) {
    gulp.src(SRC.sass)
        .pipe(sass(OPTIONS.sass))
        .on("error", display)
        .pipe(gulp.dest(DEST + "css/"))
        .on("end", done);
});

gulp.task("js", function (done) {
    gulp.src(SRC.js)
        .pipe(gulp.dest(DEST + "js/"))
        .on("end", done);
});


gulp.task("build", ['js', 'jade', 'sass']);

gulp.task("watch", function () {
    gulp.watch(WATCH.js, ['js']);
    gulp.watch(WATCH.jade, ['jade']);
    gulp.watch(WATCH.sass, ['sass']);
});

gulp.task("default", ['build', 'watch']);