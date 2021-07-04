module.exports = {
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser'
    },
    extends: [ 'plugin:vue/vue-recommended', 'eslint:recommended' ],
    rules: {
        'vue/singleline-html-element-content-newline': 'off'
    }
};
