const Minimal = {
  functional: true,
  render: (h, {
    props
  }) => {
    const {
      action,
      formId,
      options,
      hideName = false,
      showLabels = false,
      newTab = false,
      className = '',
      submitText = 'Subscribe',
      emailPlaceholder = 'Your email',
      namePlaceholder = 'Your first name',
      nameLabel = 'First name',
      emailLabel = 'Email',
      format = 'inline'
    } = props;
    return h("form", {
      "attrs": {
        "action": action,
        "method": "post",
        "target": newTab ? '_blank' : '_self',
        "data-sv-form": formId,
        "data-uid": options.uid,
        "data-format": format,
        "data-version": options.version,
        "data-options": JSON.stringify(options),
        "className": className
      }
    }, [!hideName && h("div", [showLabels ? h("label", {
      "attrs": {
        "htmlFor": "ck-first-name"
      }
    }, [nameLabel]) : null, h("input", {
      "attrs": {
        "type": "text",
        "name": "fields[first_name]",
        "placeholder": namePlaceholder,
        "aria-label": nameLabel,
        "id": "ck-first-name"
      }
    })]), showLabels ? h("label", {
      "attrs": {
        "htmlFor": "ck-email"
      }
    }, [emailLabel]) : null, h("input", {
      "attrs": {
        "type": "email",
        "name": "email_address",
        "placeholder": emailPlaceholder,
        "aria-label": emailLabel,
        "id": "ck-email"
      }
    }), h("button", {
      "attrs": {
        "type": "submit"
      }
    }, [submitText])]);
  }
};

// import Clare from './templates/clare'
// import Cocoa from './templates/cocoa'
// import Mills from './templates/mills'
// import Monterey from './templates/monterey'
// import Pine from './templates/pine'
// import Poplar from './templates/poplar'
// import Powell from './templates/powell'
// import Rainier from './templates/rainier'

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

const renderTemplate = template => {
  const templateName = template.toLowerCase();
  const allTemplates = {
    minimal: Minimal // charlotte: Charlotte,
    // clare: Clare,
    // cocoa: Cocoa,
    // mills: Mills,
    // monterey: Monterey,
    // pine: Pine,
    // poplar: Poplar,
    // powell: Powell,
    // rainier: Rainier,

  };

  if (!allTemplates.hasOwnProperty(templateName)) {
    const errorMessage = `The chosen template "${template}" is not yet supported`;
    throw new ReferenceError(errorMessage);
  }

  return allTemplates[templateName];
};

const useTemplate = template => {
  console.log({
    template
  });
  return {
    options,
    Template: renderTemplate(template)
  };
};

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

const Form = {
  functional: true,
  render: (h, {
    props
  }) => {
    const template = props.template || 'minimal';
    const format = props.format || 'inline';
    const {
      options,
      Template
    } = useTemplate(template);
    return h(Template, {
      "props": { ...props
      },
      "attrs": {
        "options": options,
        "format": formFormat(format)
      }
    });
  }
};

const ConvertKitForm = {
  functional: true,
  render: (h, {
    props
  }) => {
    const action = `https://app.convertkit.com/forms/${props.formId}/subscriptions`;
    return h(Form, {
      "props": { ...props
      },
      "attrs": {
        "action": action,
        "formId": props.formId
      }
    });
  }
};

export default ConvertKitForm;
