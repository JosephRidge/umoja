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
      'green':'#45B600'
    },
    zIndex: {
      '400': '400',
    }
  },
  plugins: [],
}