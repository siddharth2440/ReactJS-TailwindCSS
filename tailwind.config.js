/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'home':"url('./src/assets/1.png')"
      },
      backdropBlur:{
        xs:'2px'
      }
    },
    fontFamily:{
      localFont:["Single Day", 'cursive']
    },
    colors:{
      color1:'#000000',
      color2:'red',
      color3:'green',
      default:'white',
      titleColor:'#2D8FBF'
    }
  },
  plugins: [],
} 

