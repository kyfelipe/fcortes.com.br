const getThemeColor = () => {
  const theme = typeof window !== 'undefined' && window.__theme;

  if (theme === 'light') return '#FFFFFF'
  if (theme === 'dark') return '#121212'
}

export default getThemeColor;
