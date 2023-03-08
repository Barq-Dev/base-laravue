const mix = require('laravel-mix');
var path = require('path');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.options({
    hmrOptions: {
        host: 'base-laravue.test',  // mysite.test is my local domain used for testing
        port: 8080,
    }
})
    .js('resources/js/app.js', 'public/js')
    .webpackConfig({
        resolve: {
            alias: {
                '@': path.resolve('resources/js')
            },
            extensions: ['#', '.js', '.vue', '.json']
        }
    })
    .vue()
    .sass('resources/sass/app.scss', 'public/css')
    .copy('resources/js/service-worker.js', 'public/service-worker.js');