import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        about: './about.html',
        contact: './about.html',
        addToCart: './add-to-cart.html',
        addToCart2: './add-to-cart-2.html',
        addToCart3: './add-to-cart-3.html',
        catalog: './catalog.html',
        catalog2: './catalog-2.html',
        catalog3: './catalog-3.html',
        login: './login.html',
        purchase: './purchase.html',
        register: './register.html',
        userProfile: './user-profile.html',
      },
    },
  },
  plugins: [
    tailwindcss(),
  ],
})