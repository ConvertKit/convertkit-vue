import { createVNode, createTextVNode } from 'vue';

const ConvertKitForm = ({
  formId
}) => {
  const action = `https://app.convertkit.com/forms/${formId}/subscriptions`;
  return createVNode("form", {
    "action": action
  }, [createVNode("label", null, [createTextVNode("Email")]), createVNode("input", {
    "type": "email"
  }, null)]);
};

export default ConvertKitForm;
