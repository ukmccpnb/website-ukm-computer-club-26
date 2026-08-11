// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import { VitePWA } from 'vite-plugin-pwa'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: 
//   [react(), 
//   VitePWA({ 
//     registerType: 'autoUpdate',
//     includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
//     manifest: {
//       name: 'UKM Computer Club PNB',
//       short_name: 'UKM Computer Club PNB',
//       theme_color: '#ffffff',
//       icons: [
//           {
//               src: 'pwa-64x64.png',
//               sizes: '64x64',
//               type: 'image/png'
//           },
//           {
//               src: 'pwa-192x192.png',
//               sizes: '192x192',
//               type: 'image/png'
//           },
//           {
//               src: 'pwa-512x512.png',
//               sizes: '512x512',
//               type: 'image/png',
//               purpose: 'any'
//           },
//           {
//               src: 'maskable-icon-512x512.png',
//               sizes: '512x512',
//               type: 'image/png',
//               purpose: 'maskable'
//           }
//       ],
//     }, 
//   })
// ],
// })


import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  assetsInclude: ['**/*.JPG'],

  plugins: [
    react(),

    VitePWA({
      registerType: 'autoUpdate',

      includeAssets: [
        'favicon.ico',
        'apple-touch-icon.png',
        'mask-icon.svg'
      ],

      manifest: {
        name: 'UKM Computer Club PNB',
        short_name: 'UKM Computer Club PNB',
        theme_color: '#ffffff',

        icons: [
          {
            src: 'pwa-64x64.png',
            sizes: '64x64',
            type: 'image/png'
          },
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: 'maskable-icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable'
          }
        ],
      },
    }),
  ],
})