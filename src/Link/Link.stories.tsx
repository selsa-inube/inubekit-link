import { Link, ILink } from ".";
import { BrowserRouter } from "react-router-dom";
import { props, parameters } from "./props";

const story = {
  tittle: "data/Link",
  component: Link,
  parameters,
  argTypes: props,
  decorators: [
    (Story: React.ElementType) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

const Default = (args: ILink) => {
  return <Link {...args}>{args.children}</Link>;
};

Default.args = {
  children: "Link",
  size: "20px",
  path: "/",
};

export { Default };
export default story;
