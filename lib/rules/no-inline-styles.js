/**
 * @type {import('eslint').Rule.RuleModule}
 */
const rule = {
  meta: {
    type: "suggestion",
  },
  create: function (context) {
    return {
      TaggedTemplateExpression: (node) => {},
    };
  },
};

export default rule;
