/**
 * Created by xdj on 2017/7/22.
 */
//载入gulp模块
var gulp=require('gulp');
var less=require('gulp-less');
var cssnano=require('gulp-cssnano');
//注册一个任务
gulp.task('say',function(){
    //当gulp执行这个say任务时会自动执行该函数
    //console.log('hello world');
    //复制文件
    //gulp.src取出一个文件
    gulp.src('src/index.html')
        .pipe(gulp.dest('dist/'));//将此处需要的操作传进去

});
gulp.task('dist',function(){
    gulp.watch('src/index.html',['copy']);
    //gulp.watch('src/styles/*.less',['style']);
});
gulp.task('style',function(){
    gulp.src('src/styles/*.less')
        .pipe(less())
        .pipe(cssnano())
        .pipe(gulp.dest('dist/css/'));
})