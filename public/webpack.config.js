
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');

const config = {

  plugins: [
   
    new WebpackPwaManifest({
      name: 'newTransaction',
      short_name: 'Transactions',
      description: 'An app that allows you to view debit or credit transactions.',
      start_url: '../index.html',
      background_color: '#01579b',
      theme_color: '#ffffff',
      fingerprints: false,
      inject: false,
      icons: [
        {
          src: path.resolve('./icons/icon-512x512.png'),
          sizes: [96, 128, 192, 256, 384, 512],
          destination: path.join('public', 'icons')
        }
      ]
    })
  ],
  mode: 'development'
};

module.exports = config;


//import WebpackPwaManifest from 'webpack-pwa-manifest'
 
 


