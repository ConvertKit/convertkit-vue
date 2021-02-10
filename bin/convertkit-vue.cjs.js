'use strict';

const ConvertKitForm = {
  functional: true,
  render: (h, {
    formId
  }) => {
    const action = `https://app.convertkit.com/forms/${formId}/subscriptions`;
    return h("form", {
      "attrs": {
        "action": action
      }
    }, [h("label", ["Email"]), h("input", {
      "attrs": {
        "type": "email"
      }
    })]);
  }
};

module.exports = ConvertKitForm;
