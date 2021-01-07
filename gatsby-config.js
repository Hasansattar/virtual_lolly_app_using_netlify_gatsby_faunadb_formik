 
module.exports = {
  /* Your site config here */
  plugins: [
   
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "GCMS",
        fieldName: "getVCard",
        url: "https://festive-cori-74da1c.netlify.app/.netlify/functions/vCard",
      },
    },
  ],
}
