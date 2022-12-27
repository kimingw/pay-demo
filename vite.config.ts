import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 8079,
    proxy: {
      "/shop": {
        target: "https://testnet-web3.hashnut.io/",
        changeOrigin: true,
      },
    },
  },
})
