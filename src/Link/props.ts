const types = ["body", "display", "label", "title", "headline"] as const;

const sizes = ["large", "medium", "small"] as const;

type Size = (typeof sizes)[number];

type Type = (typeof types)[number];

const parameters = {
  docs: {
    description: {
      component:
        "Component designed to redirect the user when they click on the text. It should be used when the user interacts with some type of text and it should redirect them to another page",
    },
  },
};

const props = {
  type: {
    options: types,
    control: { type: "select" },
    description:
      "This prop is used to select one of the typography roles defined in the Foundations.",
    table: {
      defaultValue: { summary: "bodyLarge" },
    },
  },
  size: {
    options: sizes,
    control: { type: "select" },
    description:
      "This prop is used to select one of the typography roles defined in the Foundations.",
  },
  children: {
    control: { type: "text" },
    description: "The text to be displayed",
  },
  path: {
    description:
      "is the path where the MenuLink is going to navigate and is required.",
  },
  hover: {
    description: "Indicates when the mouse passes over the text",
  },
};
export { props, parameters };
export type { Size, Type };
