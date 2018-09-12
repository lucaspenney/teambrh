const gulp = require('gulp');
const gulpif = require('gulp-if');
const less = require('gulp-less');
const cssmin = require('gulp-cssmin');
const htmlmin = require('gulp-htmlmin');
const uglify = require('gulp-uglify');
const replace = require('gulp-replace');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const bro = require('gulp-bro');
const babel = require('gulp-babel')
const argv = require('yargs').argv;

gulp.task('watch', (done) => {
	gulp.watch('./css/**/*.less', gulp.series('less'));
});

let lintFiles = [
	'app/**/*.js',
	'!app/compiled.js',
	'!app/app.js',
	'!app/templates.js',
	'reactapp/**/*.js',
	'!reactapp/build/**/*.js',
];

gulp.task('watch', (done) => {
	gulp.watch('./app/**/*.js', gulp.series('transpile', 'browserify'));
	gulp.watch('./css/**/*.less', gulp.series('less'));
});

gulp.task('less', (done) => {
	return gulp.src('./css/less/main.less')
		.pipe(less())
		.on('error', (err) => {
			console.log(err.message)
			done();
		})
		.pipe(gulpif(argv.production, cssmin()))
		.pipe(gulp.dest('./css'));
});

gulp.task('lintwatch', (done) => {
	gulp.watch(lintFiles).on('change', (path, a) => {
		var dir = path.substr(0, path.lastIndexOf('/') + 1);
		console.log("File " + path + " changed");
		function isFixed(file) {
			var did = file.eslreactappint != null && file.eslint.fixed;
			if (did) console.log("Fixing lint errors in file");
			return did;
		}
		gulp.src(path)
			.pipe(eslint({
				fix: true,
			}))
			.pipe(eslint.format())
			.pipe(gulpif(isFixed, gulp.dest(dir, {
				overwrite: true
			})));
	});
});

gulp.task('transpile', (done) => {
	return gulp.src('./app/**/*.js')
		.pipe(babel({
			compact: false,
			presets: ['react', 'es2015']
		}))
		.on('error', (err) => {
			console.log(err.message);
			done();
		})
		.pipe(gulp.dest('./tmp/app'));
});

gulp.task('browserify', (done) => {
	if (argv.production) process.env.NODE_ENV = "production";
	return gulp.src('./tmp/app/app.js')
		.pipe(bro())
		.on('error', (err) => {
			console.log(err.message);
			done();
		})
		.pipe(gulpif(argv.production, uglify()))
		.on('error', (err) => {
			console.log(err.message);
			done();
		})
		.pipe(gulp.dest('./build'));
});

gulp.task('lint', (done) => {
	return gulp.src(lintFiles)
		.pipe(eslint())
		.pipe(eslint.format());
});

gulp.task('build', gulp.series('transpile', 'browserify', 'less'));
