import { StyledLink } from "./styles";
import { Type, Size } from "./props";
interface ILink {
  children: React.ReactNode;
  size: Size;
  type: Type;
  path: string;
}

const Link = (props: ILink) => {
  const { children, size, type, path } = props;
  return (
    <StyledLink to={path} $size={size} $type={type}>
      {children}
    </StyledLink>
  );
};

export { Link };
export type { ILink };
