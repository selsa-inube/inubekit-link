const sizes = ["large", "medium", "small"] as const;
type Size = (typeof sizes)[number];

const props = {
  parameters: {
    docs: {
      description: {
        component:
          "Component designed to redirect the user when they click on the text. It should be used when the user interacts with some type of text and it should redirect them to another page",
      },
    },
  },
  size: {
    options: sizes,
    control: { type: "select" },
    description:
      "This prop is used to select one of the typography roles defined in the Foundations.",
  },
  margin: {
    control: { type: "text" },
    description:
      "Sets the margin in px or global values for all four sides of the component.",
    table: {
      defaultValue: { summary: "0px" },
    },
  },
  children: {
    control: { type: "text" },
    description: "The text to be displayed",
  },
  hover: {
    description: "Indicates when the mouse passes over the text",
  },
};
export { props };
export type { Size };
