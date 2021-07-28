const sortOrderSmacss = require('stylelint-config-property-sort-order-smacss/generate');

module.exports = {
  extends: "stylelint-config-standard",
  plugins: [
    "stylelint-order"
  ],
  rules: {
    'order/properties-order': [
      sortOrderSmacss()
    ],
  },
}
