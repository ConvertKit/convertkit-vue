const ConvertKitForm = {
  functional: true,
  render: (h, {
    props
  }) => {
    const action = `https://app.convertkit.com/forms/${props.formId}/subscriptions`;
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

export default ConvertKitForm;
