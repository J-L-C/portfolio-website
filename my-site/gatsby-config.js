module.exports = {
  siteMetadata: {
    description: "Personal page of Jesse Cooper",
    locale: "en",
    title: "Jesse Cooper",
    formspreeEndpoint: "https://formspree.io/f/myyoqlbd",
  },
  plugins: [
    {
      resolve: "@wkocjan/gatsby-theme-intro",
      options: {
        theme: "dark-green",
      },
    },
  ],
}
