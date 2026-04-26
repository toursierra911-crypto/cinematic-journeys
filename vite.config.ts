import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsConfigPaths from 'vite-tsconfig-paths'
import { tanstackStart } from '@tanstack/react-start/plugin'
import { nodeAdapter } from '@tanstack/start-node'

export default defineConfig({
  plugins: [
    tsConfigPaths(),
    tanstackStart({
      adapter: nodeAdapter(),
    }),
    react(),
  ],
})