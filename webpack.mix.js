let mix = require('laravel-mix');

mix.js('src/app.js', 'dist').vue();
mix.sass('src/scss/style.scss', 'dist');