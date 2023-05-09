module.exports = {
  extends: ['plugin:prettier/recommended'],
  overrides: [
    {
      // Define the configuration for `.astro` file.
      files: ["*.astro"],
      // Allows Astro components to be parsed.
      parser: "astro-eslint-parser",
      rules: {},
    },
  ],
};
