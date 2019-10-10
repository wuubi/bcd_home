/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)
exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
    query {
      allBigCommerceNode {
        edges {
          node {
	    images {
		url_thumbnail
		}
	  description
          name
	  price
        }
      }
    }
  `)
  data.allBigCommerce.edges.node.forEach(({ id, name }) => {
    actions.createPage({
      path: name,
      component: path.resolve(`./src/components/product.js`),
      context: {
        productId: id,
      },
    })
  })
}
