import { StyledLink } from "./styles";
export interface ILink {
  children: React.ReactNode;
  size?: string;
  path?: string;
}

const Link = (props: ILink) => {
  const { children, size = "20px", path } = props;
  return (
    <StyledLink to={path} $size={size}>
      {children}
    </StyledLink>
  );
};

export { Link };
