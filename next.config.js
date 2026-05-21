/** @type {import('next').NextConfig} */
const path = require('path');
const withVideos = require('next-videos')
 
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['resource.back.aqualeafitsol.com', 'localhost'],
  },
  // other settings...
  webpack (config, { buildId, dev, isServer, defaultLoaders, webpack }) {
    let hasFound = false

    for (let i = 0; i < config.module.rules.length; i++) {
      const rule = config.module.rules[i]

      if (!rule.oneOf) continue

      rule.oneOf.forEach(one => {
        if (!`${one.issuer?.and}`.includes('_app')) return
        one.issuer.and = [path.resolve(__dirname)]
        hasFound = true
      })

      if (hasFound) break
    }
    config.plugins.push(new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }))
    
    return config
  },
  
}



module.exports = nextConfig;



 





 