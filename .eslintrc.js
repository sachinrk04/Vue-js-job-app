module.exports = {
  root: true,
  extends: ["eslint:recommended", "plugin:vue/recommended", "plugin:prettier/recommended"],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    "prettier/prettier": "error",
    "vue/multi-word-component-names": "off",
    "no-unused-vars": "off",
  },
};
