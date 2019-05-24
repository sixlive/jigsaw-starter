let mix = require('laravel-mix');
let build = require('./tasks/build.js');
const tailwindcss = require('tailwindcss');
require('laravel-mix-purgecss');

mix.disableSuccessNotifications();
mix.setPublicPath('source/assets/build');
mix.webpackConfig({
    plugins: [
        build.jigsaw,
        build.browserSync(),
        build.watch(['source/**/*.md', 'source/**/*.php', 'source/**/*.scss', '!source/**/_tmp/*']),
    ]
});

mix.js('source/_assets/js/main.js', 'js')
    .postCss('source/_assets/css/main.css', 'css')
    .options({
        processCssUrls: false,
        postCss: [
            tailwindcss('./tailwind.config.js'),
          ]
    }).purgeCss({
        folders: ['source'],
        whitelistPatterns: [/language/, /hljs/],
    }).version();
