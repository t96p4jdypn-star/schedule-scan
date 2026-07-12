import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
export default defineConfig({base:'/schedule-scan/',plugins:[react(),VitePWA({registerType:'autoUpdate',includeAssets:['icon.svg'],manifest:{name:'Schedule Scan',short_name:'Schedule Scan',description:'画像やPDFから予定を読み取り、カレンダーへ登録',theme_color:'#f7f8fa',background_color:'#f7f8fa',display:'standalone',start_url:'.',icons:[{src:'icon.svg',sizes:'any',type:'image/svg+xml',purpose:'any maskable'}]},workbox:{maximumFileSizeToCacheInBytes:6_000_000,navigateFallback:'index.html'}})]})
