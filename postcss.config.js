module.exports = {
   plugins: {
      "postcss-easy-import": {
         prefix: "_",
         extensions: ".css"
      },
      "postcss-nested": {},
      "postcss-sassy-mixins": {},
      "postcss-simple-vars": {},
      "postcss-cssnext": {},
      "rucksack-css": {
         responsiveType: true,
         shorthandPosition: false,
         quantityQueries: false,
         alias: false,
         inputPseudo: false,
         clearFix: true,
         fontPath: true,
         hexRGBA: true,
         easings: true
      },
      "postcss-pxtorem": {
         rootValue: 16,
         unitPrecision: 3,
         propList: [
            "font",
            "font-size",
            "line-height",
            "letter-spacing",
            "padding",
            "margin"
         ],
         selectorBlackList: [],
         replace: true,
         mediaQuery: false,
         minPixelValue: 0
      },
      "clean-css": {}
   }
}