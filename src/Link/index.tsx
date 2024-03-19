import { StyledLink } from "./styles";
interface ILink {
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
export type { ILink };
