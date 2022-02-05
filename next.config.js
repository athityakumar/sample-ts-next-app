/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    // assetPrefix: "/sample-ts-next-app/_next/static/images/",
    // basePath: "",
    basePath: '/sample-ts-next-app',
    assetPrefix: '/sample-ts-next-app/',
    // exportPathMap: function() {
    //   return {
    //     '/sample-ts-next-app': { page: '/' },
    //     // '/post/[slug]': { page: '/' },
    //     '/post/[slug]': { page: '/sample-ts-next-app/post/[slug]' }
    //   }
    // }
    publicRuntimeConfig: {
      // Will be available on both server and client
      basePath: "./index",
      pagePrefix: '',
      pageSuffix: '.html',
    },
}

// const withMDX = require('@next/mdx')({
//   extension: /\.mdx?$/,
// })
// module.exports = withMDX({
//   pageExtensions: ['js', 'jsx', 'mdx'],
// })
