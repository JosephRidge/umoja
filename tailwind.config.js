const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      'primaryYellow':"#EC9E41",
      'white': "#FFFFFF",
      'darkgray':"#373449",
      'textgray':'#A0988f',
      'darkBlue':'#041759',
      'lightGray':'#DCDCDC',
      'maroon':'#A90000',
      'red':'#ED4343', 
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'dark-orange':'#FB8B24'
    },
    zIndex: {
      '400': '400',
    }
  },
  plugins: [],
}