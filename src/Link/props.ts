const parameters = {
  docs: {
    description: {
      component:
        "Component designed to redirect the user when they click on the text. It should be used when the user interacts with some type of text and it should redirect them to another page",
    },
  },
};

const props = {
  size: {
    control: { type: "text" },
    table: {
      defaultValue: { summary: "20px" },
    },
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
