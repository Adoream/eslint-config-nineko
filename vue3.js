module.exports = {
    parser: 'vue-eslint-parser',
    extends: [ 'plugin:vue/vue3-recommended', 'eslint:recommended' ],
    rules: {
        'vue/singleline-html-element-content-newline': 'off',
        'vue/html-indent': ['error', 4],
        'no-unused-vars': 'off'
    }
};
