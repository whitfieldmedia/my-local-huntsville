// const Sitemap = require('react-router-sitemap');
require('babel-register')({
    presets: ["es2015", "react"]
})

const router = require('./sitemap-routes').default;
const Sitemap = require('react-router-sitemap').default;

function generateSitemap() {
    return (
        new Sitemap(router)
            .build('https://www.mylocalhuntsville.com')
            .save('./public/sitemap.xml')
    )
}
generateSitemap()

// (
//     new Sitemap(router)
//         .build('https://www.mylocalhuntsville.com', { limitCountPaths: 5000 })
//         .save('./sitemap.xml', '/static/')
// )