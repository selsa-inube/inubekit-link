import { Link, ILink } from ".";
import { props } from "./props";

const story = {
  tittle: "data/Link",
  component: Link,
  argTypes: props,
};

export const Default = (args: ILink) => {
  return <Link {...args}>{args.children}</Link>;
};

Default.args = {
  children: "Link",
  size: "small",
  margin: "0px",
};

export default story;
