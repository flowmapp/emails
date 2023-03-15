module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['airbnb', 'prettier'],
  rules: {
    'max-len': ['error', { code: 120 }],
  },
}
