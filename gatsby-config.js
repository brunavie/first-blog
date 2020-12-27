module.exports = {
    siteMetadata: {
        title: 'Cadê a Salada?',
        description: 'A jardinagem amadora mais divertidade do Brasil!'
    },
    plugins: [
        "gatsby-plugin-catch-links",
        "gatsby-transformer-remark",
        "gatsby-plugin-react-helmet",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "posts",
                path: `${__dirname}/content/posts`
            }
        }
    ]
}