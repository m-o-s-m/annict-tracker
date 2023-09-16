import * as process from 'process'

import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import relay from 'vite-plugin-relay'

// https://vitejs.dev/config/
export default defineConfig(() => {
  // 環境変数を詰め替える
  process.env.VITE_CF_PAGES_COMMIT_SHA = process.env.CF_PAGES_COMMIT_SHA
  process.env.VITE_CF_PAGES_BRANCH = process.env.CF_PAGES_BRANCH

  return {
    plugins: [react(), relay],
  }
})
