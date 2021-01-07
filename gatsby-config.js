 
module.exports = {
  /* Your site config here */
  plugins: [
   
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "GCMS",
        fieldName: "getVCard",
        url: "https://silly-haibt-b5ca26.netlify.app/.netlify/functions/vCard",
      },
    },
  ],
}
