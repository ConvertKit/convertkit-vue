'use strict';

var vue = require('vue');

const ConvertKitForm = ({
  formId
}) => {
  const action = `https://app.convertkit.com/forms/${formId}/subscriptions`;
  return vue.createVNode("form", {
    "action": action
  }, [vue.createVNode("label", null, [vue.createTextVNode("Email")]), vue.createVNode("input", {
    "type": "email"
  }, null)]);
};

module.exports = ConvertKitForm;
