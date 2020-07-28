import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import { FluidImageQuery } from "../../graphql-types";
import { ensureKeys } from "../utils/ensureKeys";

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Image: React.FC = () => {
  const { placeholderImage } = useStaticQuery<FluidImageQuery>(graphql`
    query FluidImage {
      placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const { fluid } = ensureKeys(placeholderImage?.childImageSharp, ["fluid"]);

  return (
    <Img fluid={ensureKeys(fluid, ["src", "aspectRatio", "sizes", "srcSet"])} />
  );
};

export default Image;
