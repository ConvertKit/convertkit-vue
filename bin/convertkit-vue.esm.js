import { createVNode, createTextVNode, mergeProps } from 'vue';

const options = {
  settings: {
    after_subscribe: {
      action: 'message',
      success_message: 'Success! Now check your email to confirm your subscription.',
      redirect_url: ''
    },
    analytics: {
      google: null,
      facebook: null,
      segment: null,
      pinterest: null
    },
    modal: {
      trigger: 'timer',
      scroll_percentage: null,
      timer: 5,
      devices: 'all',
      show_once_every: 15
    },
    powered_by: {
      show: true,
      url: 'https://convertkit.com?utm_source=dynamic&amp;utm_medium=referral&amp;utm_campaign=poweredby&amp;utm_content=form'
    },
    recaptcha: {
      enabled: false
    },
    return_visitor: {
      action: 'show',
      custom_content: ''
    },
    slide_in: {
      display_in: 'bottom_right',
      trigger: 'timer',
      scroll_percentage: null,
      timer: 5,
      devices: 'all',
      show_once_every: 15
    },
    sticky_bar: {
      display_in: 'top',
      trigger: 'timer',
      scroll_percentage: null,
      timer: 5,
      devices: 'all',
      show_once_every: 15
    }
  },
  uid: '',
  version: '5'
};

const SampleTemplate = props => createVNode("div", null, [createVNode("h1", null, [createTextVNode("Form Template")]), createVNode("form", {
  "action": props.action
}, [createVNode("label", null, [createTextVNode("Email")])])]);

const useTemplate = () => ({
  options,
  Template: SampleTemplate
});

function formFormat(format) {
  switch (format) {
    case 'slidein':
      return 'slide in';

    case 'sticky':
      return 'sticky bar';

    default:
      return format;
  }
}

const Form = ({
  template = 'minimal',
  format,
  ...props
}) => {
  const {
    options,
    Template
  } = useTemplate();
  return createVNode(Template, mergeProps(props, options, {
    "format": formFormat(format)
  }), null);
};

const ConvertKitForm = ({
  formId,
  ...props
}) => {
  const action = `https://app.convertkit.com/forms/${formId}/subscriptions`;
  return createVNode(Form, mergeProps(props, {
    "action": action,
    "formId": formId
  }), null);
};

export default ConvertKitForm;
