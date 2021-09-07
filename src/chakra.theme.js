const { extendTheme } = require("@chakra-ui/react");

module.exports = extendTheme({
  styles: {
    global: ({ theme }) => {
      return {
        ".masonry-grid": {
          display: "flex",
          width: "auto",
          marginLeft: `-${theme.space[2]}`,
          marginRight: `-${theme.space[2]}`,
        },
        ".masonry-grid-column": {
          paddingLeft: theme.space[2],
          paddingRight: theme.space[2],
          backgroundClip: "padding-box",
        },
      };
    },
  },
});
