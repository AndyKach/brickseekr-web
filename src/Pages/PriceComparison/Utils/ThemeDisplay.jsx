export const getThemeDisplay = (setData) => {
  const theme = setData?.theme;
  const themeGroup = setData?.themeGroup;
  const categoryName = setData?.extendedData?.cz_category_name;

  if (!theme && !categoryName) return null;
  const displayTheme = theme || categoryName;
  return themeGroup ? `${displayTheme}, ${themeGroup}` : displayTheme;
};
