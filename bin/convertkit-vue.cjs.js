'use strict';

function _extends() {
  return _extends = Object.assign || function (a) {
    for (var b, c = 1; c < arguments.length; c++) for (var d in b = arguments[c], b) Object.prototype.hasOwnProperty.call(b, d) && (a[d] = b[d]);

    return a;
  }, _extends.apply(this, arguments);
}

var normalMerge = ["attrs", "props", "domProps"],
    toArrayMerge = ["class", "style", "directives"],
    functionalMerge = ["on", "nativeOn"],
    mergeJsxProps = function (a) {
  return a.reduce(function (c, a) {
    for (var b in a) if (!c[b]) c[b] = a[b];else if (-1 !== normalMerge.indexOf(b)) c[b] = _extends({}, c[b], a[b]);else if (-1 !== toArrayMerge.indexOf(b)) {
      var d = c[b] instanceof Array ? c[b] : [c[b]],
          e = a[b] instanceof Array ? a[b] : [a[b]];
      c[b] = d.concat(e);
    } else if (-1 !== functionalMerge.indexOf(b)) {
      for (var f in a[b]) if (c[b][f]) {
        var g = c[b][f] instanceof Array ? c[b][f] : [c[b][f]],
            h = a[b][f] instanceof Array ? a[b][f] : [a[b][f]];
        c[b][f] = g.concat(h);
      } else c[b][f] = a[b][f];
    } else if ("hook" == b) for (var i in a[b]) c[b][i] = c[b][i] ? mergeFn(c[b][i], a[b][i]) : a[b][i];else c[b] = a[b];

    return c;
  }, {});
},
    mergeFn = function (a, b) {
  return function () {
    a && a.apply(this, arguments), b && b.apply(this, arguments);
  };
};

var helper = mergeJsxProps;

// import Minimal from './templates/minimal'
// import Charlotte from './templates/charlotte'
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
}; // const renderTemplate = template => {
//   const templateName = template.toLowerCase()
//   const allTemplates = {
//     minimal: Minimal,
//     charlotte: Charlotte,
//     clare: Clare,
//     cocoa: Cocoa,
//     mills: Mills,
//     monterey: Monterey,
//     pine: Pine,
//     poplar: Poplar,
//     powell: Powell,
//     rainier: Rainier,
//   }
//   if (!allTemplates.hasOwnProperty(templateName)) {
//     const errorMessage = `The chosen template "${template}" is not yet supported`
//     throw new ReferenceError(errorMessage)
//   }
//   return allTemplates[templateName]
// }

const SampleTemplate = {
  functional: true,
  render: (h, context) => {
    console.log({
      props: context.props,
      data: context.data
    });
    return h("div", [h("h1", ["Sample Template"]), h("form", {
      "attrs": {
        "action": true
      }
    }, [h("label", ["Email"]), h("input", {
      "attrs": {
        "type": "email"
      }
    })])]);
  }
};

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

function Form(context) {
  console.log({
    context,
    props: context?.props
  });
  const template = props.template || 'minimal';
  const {
    options,
    Template
  } = useTemplate();
  return h(Template, helper([{}, props, {
    "attrs": {
      "options": options,
      "format": formFormat(props.format)
    }
  }]));
}

const ConvertKitForm = {
  functional: true,
  render: (h, {
    props
  }) => {
    const action = `https://app.convertkit.com/forms/${props.formId}/subscriptions`;
    return h(Form, {
      "attrs": {
        "formId": props.formId,
        "action": action
      }
    });
  }
};

module.exports = ConvertKitForm;
