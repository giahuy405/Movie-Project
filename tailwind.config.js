module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      height: {
        '100': '500px'
      }
    },
  },
  plugins: [],
  
  corePlugins:{
    preflight:false
  }
}