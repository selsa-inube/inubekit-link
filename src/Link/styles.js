import { styled } from "styled-components";
import { inube } from "@inubekit/foundations";

const StyledLink = styled.a`
  font-family: ${({ theme }) =>
      theme?.typography?.label?.large?.font || "Roboto"},
    sans-serif;
  line-height: ${({ theme, $size }) => {
    theme?.typography?.label?.[$size]?.lineHeight ||
      inube.typography.label[$size].lineHeight;
  }};
  font-size: ${({ theme, $size }) => {
    theme?.typography?.label?.[$size]?.size ||
      inube.typography.label[$size].size;
  }};
  letter-spacing: ${({ theme, $size }) => {
    theme?.typography?.label?.[$size]?.tracking ||
      inube.typography.label[$size].tracking;
  }};
  font-weight: ${({ theme, $size }) => {
    theme?.typography?.label?.[$size]?.weight ||
      inube.typography.label[$size].weight;
  }};
  margin: ${({ $margin }) => $margin};
  text-align: ${({ $textAlign }) => $textAlign};
  color: ${({ theme }) => {
    return (
      theme?.link?.content?.color?.regular || inube.link.content.color.regular
    );
  }};
  cursor: pointer;
  text-decoration: none;
  &:hover {
    border-bottom: 1px solid
      ${({ theme }) =>
        theme?.link?.content?.color?.hover || inube.link.content.color.hover};
    color: ${({ theme }) =>
      theme?.link?.content?.color?.hover || inube.link.content.color.hover};
  }
`;

export { StyledLink };
