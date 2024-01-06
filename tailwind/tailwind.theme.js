const customTheme = {
  extend: {
    colors: {
      primary: {
        DEFAULT: 'var(--primary)',
        HOVER: 'var(--primary-hover)',
        'outlined-hover': 'var(--primary-outlined-hover)'
      },
      accent: {
        DEFAULT: 'var(--accent)',
        HOVER: 'var(--accent-hover)',
        'outlined-hover': 'var(--accent-outlined-hover)'
      },
      neutral: {
        'gray-light': 'var(--neutral-gray-light)',
        'gray-dark': 'var(--neutral-gray-dark)'
      }
    }
  }
}
exports.theme = customTheme
