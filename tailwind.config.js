module.exports = {
  theme: {
    fontFamily: {
      body: [
        'Inter',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Oxygen',
        'Ubuntu',
        'Cantarell',
        'Open Sans',
        'Helvetica Neue',
        'sans-serif'
      ]
    },
    container: {
      center: true,
      padding: '2rem'
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1120px'
    },
    extend: {
      fontSize: {
        '3xl': '1.75rem',
        '5xl': '2.625rem'
      },
      spacing: {
        7: '1.75rem'
      },
      colors: {
        brand: '#2490EF'
      },
      minHeight: {
        32: '8rem'
      },
      boxShadow: {
        default: '0 3px 14px 0 rgba(68,73,82,0.03)',
        lg: '0 8px 10px 0 rgba(17,43,66,0.12)',
        xl: '0 12px 20px 4px rgba(68,73,82,0.08)'
      }
    }
  },
  variants: {},
  plugins: []
};
