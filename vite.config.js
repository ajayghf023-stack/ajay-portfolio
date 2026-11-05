import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [
            {
              name: 'three-vendor',
              test: /node_modules[\\/]three[\\/]/,
              maxSize: 400_000,
            },
            {
              name: 'r3f-vendor',
              test: /node_modules[\\/]@react-three[\\/]/,
              maxSize: 300_000,
            },
          ],
        },
      },
    },
  },
})
