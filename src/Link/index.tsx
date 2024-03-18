import { StyledLink } from "./styles";
import { Size } from "./props";
export interface ILink {
  children: React.ReactNode;
  size?: Size;
  margin?: string;
}

const Link = (props: ILink) => {
  const { children, size, margin = "0px" } = props;
  return (
    <StyledLink $size={size} $margin={margin}>
      {children}
    </StyledLink>
  );
};

export { Link };
