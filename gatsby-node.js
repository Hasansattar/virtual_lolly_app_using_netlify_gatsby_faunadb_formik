const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
  query MyQuery {
    getVCard {
      getVCard {
        c1
        c2
        c3
        link
        msg
        rec
        id
        sender
      }
    }
  }
  
      `);

      console.log(JSON.stringify(result))

  result.data.getVCard.getVCard.forEach((d) => {
        console.log("++++++++++++++++" , d)
    createPage({
      path: `template/${d.link}`,
      component: path.resolve(`./src/pages/template.js`),
      context: d,
    });
  });
};

// exports.onCreatePage = async ({ page, actions }) => {
//   const { createPage } = actions;

//   if (page.path.match(/^\/lollies/)) {
//     page.matchPath = "/lollies/*";

//     // Update the page.

//     createPage(page);
//   }
// };

