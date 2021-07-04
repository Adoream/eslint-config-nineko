const { hasAnyDep } = require('ptils');

const typescript = hasAnyDep('typescript') && 'nineko/typescript';
const vue2 = hasAnyDep('vue') && 'nineko/vue2';

module.exports = {
  extends: ['nineko/base', typescript, vue2].filter(Boolean)
};
