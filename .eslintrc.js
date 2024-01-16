module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
	},
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: "module",
		parser: "@typescript-eslint/parser",
	},
	extends: [
		"plugin:@typescript-eslint/recommended",
		"plugin:nuxt/recommended",
		"plugin:vue/vue3-recommended",
	],
	plugins: ["@typescript-eslint", "indent-empty-lines"],
	rules: {
		"no-console": "off",
		"vue/component-name-in-template-casing": ["error", "PascalCase"],
		"vue/multi-word-component-names": "off",
		"no-unreachable": "warn",
		"object-curly-spacing": "off",
		"quotes": "off",
		"no-extra-semi": "error",
		"no-trailing-spaces": "off",
		"indent-empty-lines/indent-empty-lines": "warn",
		"@typescript-eslint/no-explicit-any": "off",
		"@typescript-eslint/no-unused-vars": "off"
	},
};
