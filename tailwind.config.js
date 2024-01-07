export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#FAEDCD',
          500: '#D4A373',
        },
        secondary: {
          500: '#7f5539',
          100: '#ddb892',
        },

      },
      fontSize: {
        'normal': '20px',
        'small': '15px', // Example of modifying an existing size
        'md': '30px',
        'lg': '40px',
        'xlg': '50px',
        'xxlg': '65px',
        // Add more custom sizes as needed
      },
    },
  },
  plugins: [
    
  ],
}

