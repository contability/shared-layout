/** @type {import("prettier").Config} */
module.exports = {
  singleQuote: true,
  jsxSingleQuote: true,
  semi: true,
  useTabs: false,
  tabWidth: 2,
  trailingComma: "all",
  printWidth: 120,
  arrowParens: "always",
  plugins: [require.resolve("prettier-plugin-tailwindcss")],
};
