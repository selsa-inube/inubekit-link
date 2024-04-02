import { StyledLink } from "./styles";
import { ILinkType, ILinkSize } from "./props";
interface ILink {
  children: React.ReactNode;
  size?: ILinkSize;
  type?: ILinkType;
  path: string;
}

const Link = (props: ILink) => {
  const { children, size = "large", type = "body", path } = props;
  return (
    <StyledLink to={path} $size={size} $type={type}>
      {children}
    </StyledLink>
  );
};

export { Link };
export type { ILink };
