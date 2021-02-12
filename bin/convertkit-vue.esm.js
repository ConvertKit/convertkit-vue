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
    }, [!hideName && h("span", [showLabels ? h("label", {
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

function Warning({
  message
}) {
  return h("div", {
    "attrs": {
      "id": "ck-warn"
    },
    "style": {
      border: 'solid medium #ccc',
      borderRadius: '4px',
      background: '#ddd',
      color: '#777',
      fontWeight: 'bold',
      padding: '10px'
    }
  }, [message]);
}

const BuiltWithBadge = {
  functional: true,
  render: (h, {
    props
  }) => {
    const {
      href
    } = props;
    return h("a", {
      "attrs": {
        "href": href,
        "className": "formkit-powered-by-convertkit",
        "target": "_blank",
        "rel": "noopener noreferrer",
        "data-element": "powered-by",
        ...props
      }
    }, ["Built with ConvertKit"]);
  }
};

const ALLOWED_FORMATS = ['inline', 'modal', 'slide in'];
const bgImage = '//pages.convertkit.com/assets/charlotte/bg.jpg';
const Charlotte = {
  functional: true,
  render: (h, {
    props
  }) => {
    const {
      action,
      formId,
      options,
      hideName = true,
      showLabels = false,
      newTab = false,
      hideWarnings = false,
      className = '',
      submitText = 'Send me the guide',
      disclaimerText = 'We respect your privacy. Unsubscribe at any time.',
      emailPlaceholder = 'Your email',
      namePlaceholder = 'Your first name',
      nameLabel = 'First name',
      emailLabel = 'Email',
      headingText = 'Get our how to guide',
      format = 'inline',
      backgroundImage = bgImage
    } = props;
    return h("div", [!hideWarnings && !ALLOWED_FORMATS.includes(format) ? h(Warning, {
      "attrs": {
        "message": "This template is not available for the chosen format"
      }
    }) : null, h("form", {
      "attrs": {
        "action": action,
        "className": `seva-form formkit-form charlotte ${className}`,
        "method": "post",
        "target": newTab ? '_blank' : '_self',
        "data-sv-form": formId,
        "data-uid": options.uid,
        "data-format": format,
        "data-version": options.version,
        "data-options": JSON.stringify(options),
        "min-width": "400 500 600 700 800"
      },
      "style": {
        backgroundColor: 'rgb(255, 255, 255)',
        borderRadius: '6px'
      }
    }, [h("div", {
      "attrs": {
        "data-style": "full"
      }
    }, [h("div", {
      "attrs": {
        "data-element": "column",
        "className": "formkit-background"
      },
      "style": {
        backgroundImage: `url(${backgroundImage})`
      }
    }), h("div", {
      "attrs": {
        "data-element": "column",
        "className": "formkit-column"
      }
    }, [h("div", {
      "attrs": {
        "className": "formkit-header",
        "data-element": "header"
      },
      "style": {
        color: 'rgb(83, 83, 83)',
        fontSize: '28px',
        fontWeight: 700
      }
    }, [h("h1", [headingText])]), h("ul", {
      "attrs": {
        "className": "formkit-alert formkit-alert-error",
        "data-element": "errors",
        "data-group": "alert"
      }
    }), h("div", {
      "attrs": {
        "data-element": "fields",
        "className": "seva-fields formkit-fields"
      }
    }, [!hideName && h("span", [showLabels ? h("label", {
      "attrs": {
        "htmlFor": "ck-first-name"
      }
    }, [nameLabel]) : null, h("div", {
      "attrs": {
        "className": "formkit-field"
      }
    }, [h("input", {
      "attrs": {
        "className": "formkit-input",
        "aria-label": nameLabel,
        "name": "fields[first_name]",
        "placeholder": namePlaceholder,
        "type": "text",
        "id": "ck-first-name"
      },
      "style": {
        color: 'rgb(139, 139, 139)',
        borderColor: 'rgb(221, 224, 228)',
        fontWeight: 400,
        borderLeft: 0,
        borderRight: 0,
        borderTop: 0,
        paddingLeft: 0,
        paddingRight: 0
      }
    })])]), showLabels ? h("label", {
      "attrs": {
        "htmlFor": "ck-email"
      }
    }, [emailLabel]) : null, h("div", {
      "attrs": {
        "className": "formkit-field"
      }
    }, [h("input", {
      "attrs": {
        "className": "formkit-input",
        "aria-label": emailLabel,
        "name": "email_address",
        "placeholder": emailPlaceholder,
        "required": true,
        "type": "email",
        "id": "ck-email"
      },
      "style": {
        color: 'rgb(139, 139, 139)',
        borderColor: 'rgb(221, 224, 228)',
        fontWeight: 400,
        borderLeft: 0,
        borderRight: 0,
        borderTop: 0,
        paddingLeft: 0,
        paddingRight: 0
      }
    })]), h("button", {
      "attrs": {
        "data-element": "submit",
        "className": "formkit-submit"
      },
      "style": {
        width: '100%',
        color: 'rgb(255, 255, 255)',
        backgroundColor: 'rgb(246, 166, 171)',
        borderRadius: '3px',
        fontWeight: 700
      }
    }, [h("div", {
      "attrs": {
        "className": "formkit-spinner"
      }
    }, [h("div"), h("div"), h("div")]), h("span", [submitText])])]), h("div", {
      "attrs": {
        "className": "formkit-disclaimer",
        "data-element": "disclaimer"
      },
      "style": {
        color: 'rgb(139, 139, 139)',
        fontSize: '13px'
      }
    }, [disclaimerText]), options.settings.powered_by.show ? h(BuiltWithBadge, {
      "attrs": {
        "href": options.settings.powered_by.url,
        "data-variant": "dark"
      }
    }) : null])])])]);
  }
};

const ALLOWED_FORMATS$1 = ['inline', 'modal', 'slide in'];
const Clare = {
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
      hideWarnings = false,
      stacked = false,
      className = '',
      submitText = 'Subscribe',
      emailPlaceholder = 'Your email address',
      namePlaceholder = 'Your first name',
      nameLabel = 'First name',
      emailLabel = 'Email',
      format = 'inline'
    } = props;
    return h("div", [!hideWarnings && !ALLOWED_FORMATS$1.includes(format) ? h(Warning, {
      "attrs": {
        "message": "This template is not available for the chosen format"
      }
    }) : null, h("form", {
      "attrs": {
        "action": action,
        "method": "post",
        "target": newTab ? '_blank' : '_self',
        "className": `seva-form formkit-form clare ${className}`,
        "method": "post",
        "data-sv-form": formId,
        "data-format": format,
        "data-version": options.version,
        "data-uid": options.uid,
        "data-options": JSON.stringify(options),
        "min-width": "400 500 600 700 800"
      }
    }, [h("div", {
      "attrs": {
        "data-style": "clean"
      }
    }, [h("ul", {
      "attrs": {
        "className": "formkit-alert formkit-alert-error",
        "data-element": "errors",
        "data-group": "alert"
      }
    }), h("div", {
      "attrs": {
        "data-element": "fields",
        "data-stacked": stacked,
        "className": "seva-fields formkit-fields"
      }
    }, [!hideName && h("span", [showLabels ? h("label", {
      "attrs": {
        "htmlFor": "ck-first-name"
      }
    }, [nameLabel]) : null, h("div", {
      "attrs": {
        "className": "formkit-field"
      }
    }, [h("input", {
      "attrs": {
        "className": "formkit-input",
        "aria-label": nameLabel,
        "name": "fields[first_name]",
        "placeholder": namePlaceholder,
        "type": "text",
        "id": "ck-first-name"
      },
      "style": {
        color: 'rgb(0, 0, 0)',
        borderColor: 'rgb(227, 227, 227)',
        borderRadius: '4px',
        fontWeight: 400
      }
    })])]), showLabels ? h("label", {
      "attrs": {
        "htmlFor": "ck-email"
      }
    }, [emailLabel]) : null, h("div", {
      "attrs": {
        "className": "formkit-field"
      }
    }, [h("input", {
      "attrs": {
        "className": "formkit-input",
        "aria-label": emailLabel,
        "name": "email_address",
        "placeholder": emailPlaceholder,
        "required": true,
        "type": "email",
        "id": "ck-email"
      },
      "style": {
        color: 'rgb(0, 0, 0)',
        borderColor: 'rgb(227, 227, 227)',
        borderRadius: '4px',
        fontWeight: 400
      }
    })]), h("button", {
      "attrs": {
        "data-element": "submit",
        "className": "formkit-submit formkit-submit"
      },
      "style": {
        color: 'rgb(255, 255, 255)',
        backgroundColor: 'rgb(22, 119, 190)',
        borderRadius: '4px',
        fontWeight: 400
      }
    }, [h("div", {
      "attrs": {
        "className": "formkit-spinner"
      }
    }, [h("div"), h("div"), h("div")]), h("span", [submitText])])]), options.settings.powered_by.show ? h(BuiltWithBadge, {
      "attrs": {
        "href": options.settings.powered_by.url
      }
    }) : null])])]);
  }
};

const ALLOWED_FORMATS$2 = ['inline', 'modal', 'slide in'];
const bgImage$1 = '//embed.filekitcdn.com/e/2owDSJCEZcjwZhVLK4rMrK/2vJTtpQyc87b2ZVG9bQ3aA';
const DefaultContent = {
  functional: true,
  render: h => h("p", ["Subscribe below and we\u2019ll notify you when the product is released."])
};
const Cocoa = {
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
      hideWarnings = false,
      className = '',
      submitText = 'Download',
      disclaimerText = 'We respect your privacy. Unsubscribe at any time.',
      emailPlaceholder = 'Your email',
      namePlaceholder = 'Your first name',
      nameLabel = 'First name',
      emailLabel = 'Email',
      format = 'inline',
      backgroundImage = bgImage$1,
      backgroundColor = [46, 46, 46],
      borderRadius = 0,
      headingText = 'Join the waitlist',
      children = h(DefaultContent)
    } = props;
    const bgColor = backgroundColor.join(' ');
    const formRadius = `${borderRadius}px`;
    return h("div", [!hideWarnings && !ALLOWED_FORMATS$2.includes(format) ? h(Warning, {
      "attrs": {
        "message": "This template is not available for the chosen format"
      }
    }) : null, h("form", {
      "attrs": {
        "action": action,
        "className": `seva-form formkit-form cocoa ${className}`,
        "method": "post",
        "target": newTab ? '_blank' : '_self',
        "data-sv-form": formId,
        "data-uid": options.uid,
        "data-format": format,
        "data-version": options.version,
        "data-options": JSON.stringify(options),
        "min-width": "400 500 600 700 800"
      },
      "style": {
        borderRadius: formRadius
      }
    }, [h("div", {
      "attrs": {
        "data-style": "full"
      },
      "style": {
        '--border-radius': formRadius
      }
    }, [h("div", {
      "attrs": {
        "className": "formkit-container"
      },
      "style": {
        backgroundImage: `linear-gradient(180deg, rgb(${bgColor} / .3) 0%, rgb(${bgColor} / .73) 64%, rgb(${bgColor}) 89%), url(${backgroundImage})`
      }
    }, [h("div", {
      "attrs": {
        "className": "formkit-header",
        "data-element": "header"
      },
      "style": {
        color: 'rgb(255 255 255)',
        fontWeight: 700
      }
    }, [h("h1", [headingText])]), h("div", {
      "attrs": {
        "className": "formkit-content",
        "data-element": "content"
      },
      "style": {
        color: 'rgb(255 255 255)'
      }
    }, [children]), h("ul", {
      "attrs": {
        "className": "formkit-alert formkit-alert-error",
        "data-element": "errors",
        "data-group": "alert"
      }
    }), h("div", {
      "attrs": {
        "data-element": "fields",
        "className": "seva-fields formkit-fields"
      },
      "style": {
        color: 'rgb(255 255 255)'
      }
    }, [!hideName && h("span", [showLabels ? h("label", {
      "attrs": {
        "htmlFor": "ck-first-name"
      }
    }, [nameLabel]) : null, h("div", {
      "attrs": {
        "className": "formkit-field"
      }
    }, [h("input", {
      "attrs": {
        "className": "formkit-input",
        "aria-label": nameLabel,
        "name": "fields[first_name]",
        "placeholder": namePlaceholder,
        "type": "text",
        "id": "ck-first-name"
      },
      "style": {
        color: 'rgb(105 113 119)',
        fontWeight: 400,
        backgroundColor: 'rgb(27 27 27)',
        borderRadius: '4px'
      }
    })])]), showLabels ? h("label", {
      "attrs": {
        "htmlFor": "ck-email"
      }
    }, [emailLabel]) : null, h("div", {
      "attrs": {
        "className": "formkit-field"
      }
    }, [h("input", {
      "attrs": {
        "className": "formkit-input",
        "name": "email_address",
        "aria-label": emailLabel,
        "placeholder": emailPlaceholder,
        "required": true,
        "type": "email"
      },
      "style": {
        color: 'rgb(105 113 119)',
        fontWeight: 400,
        backgroundColor: 'rgb(27 27 27)',
        borderRadius: '4px'
      }
    })]), h("button", {
      "attrs": {
        "data-element": "submit",
        "className": "formkit-submit formkit-submit"
      },
      "style": {
        color: 'rgb(255 255 255)',
        backgroundColor: 'rgb(245 113 72)',
        borderRadius: '4px',
        fontWeight: 700
      }
    }, [h("div", {
      "attrs": {
        "className": "formkit-spinner"
      }
    }, [h("div"), h("div"), h("div")]), h("span", [submitText])])]), h("div", {
      "attrs": {
        "className": "formkit-disclaimer",
        "data-element": "disclaimer"
      },
      "style": {
        color: 'rgb(203 203 203)'
      }
    }, [disclaimerText]), options.settings.powered_by.show ? h(BuiltWithBadge, {
      "attrs": {
        "href": options.settings.powered_by.url,
        "data-variant": "light"
      }
    }) : null])])])]);
  }
};

const ALLOWED_FORMATS$3 = ['inline', 'modal', 'slide in'];
const DefaultContent$1 = {
  functional: true,
  render: h => h("p", ["Subscribe to get our latest content by email."])
};
const Mills = {
  functional: true,
  render: (h, {
    props
  }) => {
    const {
      action,
      formId,
      options,
      hideName = true,
      showLabels = false,
      newTab = false,
      hideWarnings = false,
      stacked = false,
      className = '',
      submitText = 'Subscribe',
      disclaimerText = "We won't send you spam. Unsubscribe at any time.",
      emailPlaceholder = 'Email Address',
      namePlaceholder = 'First Name',
      nameLabel = 'First name',
      emailLabel = 'Email',
      format = 'inline',
      headingText = 'Join the Newsletter',
      children = h(DefaultContent$1)
    } = props;
    return h("div", [!hideWarnings && !ALLOWED_FORMATS$3.includes(format) ? h(Warning, {
      "attrs": {
        "message": "This template is not available for the chosen format"
      }
    }) : null, h("form", {
      "attrs": {
        "action": action,
        "className": `seva-form formkit-form mills ${className}`,
        "method": "post",
        "target": newTab ? '_blank' : '_self',
        "data-sv-form": formId,
        "data-uid": options.uid,
        "data-format": format,
        "data-version": options.version,
        "data-options": JSON.stringify(options),
        "min-width": "400 500 600 700 800"
      },
      "style": {
        backgroundColor: 'rgb(249 250 251)',
        borderRadius: '4px'
      }
    }, [h("div", {
      "attrs": {
        "className": "formkit-background"
      },
      "style": {
        opacity: 0.2
      }
    }), h("div", {
      "attrs": {
        "data-style": "minimal"
      }
    }, [h("div", {
      "attrs": {
        "className": "formkit-header",
        "data-element": "header"
      },
      "style": {
        color: 'rgb(77, 77, 77)',
        fontSize: '27px',
        fontWeight: 700,
        textAlign: 'center'
      }
    }, [h("h1", [headingText])]), h("div", {
      "attrs": {
        "className": "formkit-subheader",
        "data-element": "subheader"
      },
      "style": {
        color: 'rgb(104 104 104)',
        fontsize: '18px'
      }
    }, [children]), h("ul", {
      "attrs": {
        "className": "formkit-alert formkit-alert-error",
        "data-element": "errors",
        "data-group": "alert"
      }
    }), h("div", {
      "attrs": {
        "data-element": "fields",
        "data-stacked": stacked,
        "className": "seva-fields formkit-fields"
      }
    }, [!hideName && h("span", [showLabels ? h("label", {
      "attrs": {
        "htmlFor": "ck-first-name"
      }
    }, [nameLabel]) : null, h("div", {
      "attrs": {
        "className": "formkit-field"
      }
    }, [h("input", {
      "attrs": {
        "className": "formkit-input",
        "aria-label": nameLabel,
        "name": "fields[first_name]",
        "placeholder": namePlaceholder,
        "type": "text",
        "id": "ck-first-name"
      },
      "style": {
        color: 'rgb(0 0 0)',
        borderColor: 'rgb(227 227 227)',
        borderRadius: '4px',
        fontWeight: 400
      }
    })])]), showLabels ? h("label", {
      "attrs": {
        "htmlFor": "ck-email"
      }
    }, [emailLabel]) : null, h("div", {
      "attrs": {
        "className": "formkit-field"
      }
    }, [h("input", {
      "attrs": {
        "className": "formkit-input",
        "aria-label": emailLabel,
        "name": "email_address",
        "placeholder": emailPlaceholder,
        "required": "",
        "type": "email",
        "id": "ck-email"
      },
      "style": {
        color: 'rgb(0 0 0)',
        borderColor: 'rgb(227 227 227)',
        borderRadius: '4px',
        fontWeight: 400
      }
    })]), h("button", {
      "attrs": {
        "data-element": "submit",
        "className": "formkit-submit formkit-submit"
      },
      "style": {
        color: 'rgb(255 255 255)',
        backgroundColor: 'rgb(22 119 190)',
        borderRadius: '4px',
        fontWeight: 400
      }
    }, [h("div", {
      "attrs": {
        "className": "formkit-spinner"
      }
    }, [h("div"), h("div"), h("div")]), h("span", [submitText])])]), h("div", {
      "attrs": {
        "className": "formkit-guarantee",
        "data-element": "guarantee"
      },
      "style": {
        color: 'rgb(77 77 77)',
        fontSize: '13px',
        fontWeight: 400
      }
    }, [disclaimerText]), options.settings.powered_by.show ? h(BuiltWithBadge, {
      "attrs": {
        "href": options.settings.powered_by.url,
        "data-variant": "dark"
      }
    }) : null])])]);
  }
};

const ALLOWED_FORMATS$4 = ['inline', 'modal', 'slide in'];
const bgImage$2 = '//pages.convertkit.com/assets/monterey/bg.jpg';
const DefaultContent$2 = {
  functional: true,
  render: h => h("p", ["Subscribe to get our latest content by email."])
};
const Monterey = {
  functional: true,
  render: (h, {
    props
  }) => {
    const {
      action,
      formId,
      options,
      hideName = true,
      showLabels = false,
      newTab = false,
      hideWarnings = false,
      className = '',
      submitText = 'Subscribe',
      emailPlaceholder = 'Email Address',
      namePlaceholder = 'First Name',
      nameLabel = 'First name',
      emailLabel = 'Email',
      format = 'inline',
      backgroundImage = bgImage$2,
      backgroundOpacity = 0.7,
      backgroundColor = [51, 51, 51],
      borderRadius = 0,
      headingText = 'Join the newsletter',
      children = h(DefaultContent$2)
    } = props;
    const bgColor = backgroundColor.join(' ').concat(`/${backgroundOpacity}`);
    const formRadius = `${borderRadius}px`;
    return h("div", [!hideWarnings && !ALLOWED_FORMATS$4.includes(format) ? h(Warning, {
      "attrs": {
        "message": "This template is not available for the chosen format"
      }
    }) : null, h("form", {
      "attrs": {
        "action": action,
        "className": `seva-form formkit-form monterey ${className}`,
        "target": newTab ? '_blank' : '_self',
        "method": "post",
        "data-sv-form": formId,
        "data-uid": options.uid,
        "data-format": format,
        "data-version": options.version,
        "data-options": JSON.stringify(options),
        "min-width": "400 500 600 700 800"
      },
      "style": {
        backgroundColor: 'rgb(243 246 249)',
        borderRadius: formRadius
      }
    }, [h("div", {
      "attrs": {
        "data-style": "image"
      }
    }, [h("div", {
      "attrs": {
        "data-element": "column",
        "className": "formkit-column"
      },
      "style": {
        backgroundImage: `linear-gradient(rgb(${bgColor}), rgb(${bgColor})), url(${backgroundImage})`,
        height: '480px'
      }
    }, [h("div", {
      "attrs": {
        "className": "formkit-header",
        "data-element": "header"
      },
      "style": {
        color: 'rgb(255 255 255)',
        fontSize: '36px',
        fontWeight: 700
      }
    }, [h("h1", [headingText])]), h("div", {
      "attrs": {
        "className": "formkit-subheader",
        "data-element": "subheader"
      },
      "style": {
        color: 'rgb(255 255 255)',
        fontSize: '22px'
      }
    }, [children])]), h("div", {
      "attrs": {
        "data-element": "column",
        "className": "formkit-column"
      }
    }, [h("ul", {
      "attrs": {
        "className": "formkit-alert formkit-alert-error",
        "data-element": "errors",
        "data-group": "alert"
      }
    }), h("div", {
      "attrs": {
        "data-element": "fields",
        "className": "seva-fields formkit-fields"
      }
    }, [!hideName && h("span", [showLabels ? h("label", {
      "attrs": {
        "htmlFor": "ck-first-name"
      }
    }, [nameLabel]) : null, h("div", {
      "attrs": {
        "className": "formkit-field"
      }
    }, [h("input", {
      "attrs": {
        "className": "formkit-input",
        "name": "fields[first_name]",
        "aria-label": nameLabel,
        "placeholder": namePlaceholder,
        "type": "text",
        "id": "ck-first-name"
      },
      "style": {
        color: 'rgb(77 77 77)',
        borderColor: 'rgb(227 227 227)',
        borderRadius: 0,
        fontWeight: 400
      }
    })])]), showLabels ? h("label", {
      "attrs": {
        "htmlFor": "ck-email"
      }
    }, [emailLabel]) : null, h("div", {
      "attrs": {
        "className": "formkit-field"
      }
    }, [h("input", {
      "attrs": {
        "className": "formkit-input",
        "name": "email_address",
        "aria-label": emailLabel,
        "placeholder": emailPlaceholder,
        "required": true,
        "type": "email"
      },
      "style": {
        color: 'rgb(77 77 77)',
        borderColor: 'rgb(227 227 227)',
        borderRadius: 0,
        fontWeight: 400
      }
    })]), h("button", {
      "attrs": {
        "data-element": "submit",
        "className": "formkit-submit formkit-submit"
      },
      "style": {
        color: 'rgb(255 255 255)',
        backgroundColor: 'rgb(51 51 51)',
        borderRadius: 0,
        fontWeight: 400
      }
    }, [h("div", {
      "attrs": {
        "className": "formkit-spinner"
      }
    }, [h("div"), h("div"), h("div")]), h("span", [submitText])])]), options.settings.powered_by.show ? h(BuiltWithBadge, {
      "attrs": {
        "href": options.settings.powered_by.url,
        "data-variant": "dark"
      }
    }) : null])])])]);
  }
};

const ALLOWED_FORMATS$5 = ['inline', 'modal', 'slide in'];
const DefaultContent$3 = {
  functional: true,
  render: h => h("p", ["Subscribe to get our latest content by email."])
};
const Pine = {
  functional: true,
  render: (h, {
    props
  }) => {
    const {
      action,
      formId,
      options,
      hideName = true,
      showLabels = false,
      newTab = false,
      hideWarnings = false,
      className = '',
      submitText = 'Subscribe',
      disclaimerText = 'We respect your privacy. Unsubscribe at any time.',
      emailPlaceholder = 'Email Address',
      namePlaceholder = 'First Name',
      nameLabel = 'First name',
      emailLabel = 'Email',
      format = 'inline',
      backgroundImage = null,
      thumbnailImage = null,
      headingText = 'Join the Newsletter',
      children = h(DefaultContent$3)
    } = props;
    const background = backgroundImage ? `linear-gradient(rgb(249 250 251/.8),rgb(249 250 251/.8)), url(${backgroundImage})` : 'rgb(249 250 251)';
    return h("div", [!hideWarnings && !ALLOWED_FORMATS$5.includes(format) ? h(Warning, {
      "attrs": {
        "message": "This template is not available for the chosen format"
      }
    }) : null, h("form", {
      "attrs": {
        "action": action,
        "className": `seva-form formkit-form pine ${className}`,
        "method": "post",
        "target": newTab ? '_blank' : '_self',
        "data-sv-form": formId,
        "data-uid": options.uid,
        "data-format": format,
        "data-version": options.version,
        "data-options": JSON.stringify(options),
        "min-width": "400 500 600 700 800"
      },
      "style": {
        backgroundColor: 'rgb(255, 255, 255)',
        borderRadius: '6px'
      }
    }, [h("div", {
      "attrs": {
        "data-style": "full"
      }
    }, [h("div", {
      "attrs": {
        "data-element": "column",
        "className": "formkit-column"
      },
      "style": {
        background
      }
    }, [h("div", {
      "attrs": {
        "className": "formkit-header",
        "data-element": "header"
      },
      "style": {
        color: 'rgb(77 77 77)',
        fontSize: '20px',
        fontWeight: 700
      }
    }, [h("h1", [headingText])]), h("div", {
      "attrs": {
        "className": "formkit-subheader",
        "data-element": "subheader"
      },
      "style": {
        color: 'rgb(104 104 104)',
        fontSize: '15px'
      }
    }, [children]), h("div", {
      "attrs": {
        "className": "formkit-image formkit-image relative focus:outline-none",
        "role": "button",
        "tabIndex": "0"
      }
    }, [thumbnailImage && h("img", {
      "attrs": {
        "className": "cursor-pointer focus:outline-blue ",
        "src": thumbnailImage,
        "alt": headingText
      },
      "style": {
        maxWidth: '100%'
      }
    })])]), h("div", {
      "attrs": {
        "data-element": "column",
        "className": "formkit-column"
      }
    }, [h("ul", {
      "attrs": {
        "className": "formkit-alert formkit-alert-error",
        "data-element": "errors",
        "data-group": "alert"
      }
    }), h("div", {
      "attrs": {
        "data-element": "fields",
        "className": "seva-fields formkit-fields"
      }
    }, [!hideName && h("span", [showLabels ? h("label", {
      "attrs": {
        "htmlFor": "ck-first-name"
      }
    }, [nameLabel]) : null, h("div", {
      "attrs": {
        "className": "formkit-field"
      }
    }, [h("input", {
      "attrs": {
        "className": "formkit-input",
        "aria-label": nameLabel,
        "name": "fields[first_name]",
        "placeholder": namePlaceholder,
        "type": "text",
        "id": "ck-first-name"
      },
      "style": {
        color: 'rgb(0, 0, 0)',
        borderColor: 'rgb(227 227 227)',
        borderRadius: '4px',
        fontWeight: 400
      }
    })])]), showLabels ? h("label", {
      "attrs": {
        "htmlFor": "ck-email"
      }
    }, [emailLabel]) : null, h("div", {
      "attrs": {
        "className": "formkit-field"
      }
    }, [h("input", {
      "attrs": {
        "className": "formkit-input",
        "aria-label": emailLabel,
        "name": "email_address",
        "placeholder": emailPlaceholder,
        "required": true,
        "type": "email",
        "id": "ck-email"
      },
      "style": {
        color: 'rgb(0, 0, 0)',
        borderColor: 'rgb(227 227 227)',
        borderRadius: '4px',
        fontWeight: 400
      }
    })]), h("button", {
      "attrs": {
        "data-element": "submit",
        "className": "formkit-submit"
      },
      "style": {
        color: 'rgb(255 255 255)',
        backgroundColor: 'rgb(22 119 190)',
        borderRadius: '24px',
        fontWeight: 700
      }
    }, [h("div", {
      "attrs": {
        "className": "formkit-spinner"
      }
    }, [h("div"), h("div"), h("div")]), h("span", [submitText])])]), h("div", {
      "attrs": {
        "className": "formkit-guarantee",
        "data-element": "guarantee"
      },
      "style": {
        color: 'rgb(77 77 77)',
        fontSize: '13px',
        fontWeight: 400
      }
    }, [disclaimerText]), options.settings.powered_by.show ? h(BuiltWithBadge, {
      "attrs": {
        "href": options.settings.powered_by.url,
        "data-variant": "dark"
      }
    }) : null])])])]);
  }
};

const ALLOWED_FORMATS$6 = ['inline', 'modal', 'slide in'];
const bgImage$3 = 'https://embed.filekitcdn.com/e/ob1LxuDzufvKjqSohJyaUP/5oPVzNSoHca4JJZz2kaMCf';
const DefaultContent$4 = {
  functional: true,
  render: h => h("p", ["I\u2019ll send you a simple guide that will boost your photography skills overnight.", h("br"), "\u200B", h("br"), "Get the 28-step guide by subscribing below."])
};
const Poplar = {
  functional: true,
  render: (h, {
    props
  }) => {
    const {
      action,
      formId,
      options,
      hideName = true,
      showLabels = false,
      newTab = false,
      hideWarnings = false,
      stacked = false,
      className = '',
      submitText = 'Download',
      disclaimerText = 'We respect your privacy. Unsubscribe at any time.',
      emailPlaceholder = 'Email Address',
      namePlaceholder = 'First Name',
      nameLabel = 'First name',
      emailLabel = 'Email',
      format = 'inline',
      children = h(DefaultContent$4),
      backgroundImage = bgImage$3,
      headingText = 'Learn how to take photos like a pro',
      borderRadius = 5
    } = props;
    const formRadius = `${borderRadius}px`;
    return h("div", [!hideWarnings && !ALLOWED_FORMATS$6.includes(format) ? h(Warning, {
      "attrs": {
        "message": "This template is not available for the chosen format"
      }
    }) : null, h("form", {
      "attrs": {
        "action": action,
        "className": `seva-form formkit-form poplar ${className}`,
        "target": newTab ? '_blank' : '_self',
        "method": "post",
        "data-sv-form": formId,
        "data-uid": options.uid,
        "data-format": format,
        "data-version": options.version,
        "data-options": JSON.stringify(options),
        "min-width": "400 500 600 700 800"
      },
      "style": {
        backgroundColor: 'rgb(255 255 255)',
        borderRadius: '10px'
      }
    }, [h("div", {
      "attrs": {
        "data-style": "full"
      },
      "style": {
        '--bg-border-radius': formRadius
      }
    }, [h("div", {
      "attrs": {
        "data-element": "column",
        "className": "formkit-column"
      }
    }, [h("div", {
      "attrs": {
        "className": "formkit-header",
        "data-element": "header"
      },
      "style": {
        color: 'rgb(55 63 69)',
        fontWeight: 700
      }
    }, [h("h1", [headingText])]), h("div", {
      "attrs": {
        "className": "formkit-content",
        "data-element": "content"
      },
      "style": {
        color: 'rgb(105 113 119)'
      }
    }, [children]), h("ul", {
      "attrs": {
        "className": "formkit-alert formkit-alert-error",
        "data-element": "errors",
        "data-group": "alert"
      }
    }), h("div", {
      "attrs": {
        "data-element": "fields",
        "data-stacked": stacked,
        "className": "seva-fields formkit-fields"
      }
    }, [!hideName && h("span", [showLabels ? h("label", {
      "attrs": {
        "htmlFor": "ck-first-name"
      }
    }, [nameLabel]) : null, h("div", {
      "attrs": {
        "className": "formkit-field"
      }
    }, [h("input", {
      "attrs": {
        "className": "formkit-input",
        "name": "fields[first_name]",
        "aria-label": nameLabel,
        "placeholder": namePlaceholder,
        "type": "text",
        "id": "ck-first-name"
      },
      "style": {
        color: 'rgb(105 113 119)',
        backgroundColor: 'rgb(243 246 249)',
        borderRadius: '5px',
        fontWeight: 400
      }
    })])]), showLabels ? h("label", {
      "attrs": {
        "htmlFor": "ck-email"
      }
    }, [emailLabel]) : null, h("div", {
      "attrs": {
        "className": "formkit-field"
      }
    }, [h("input", {
      "attrs": {
        "className": "formkit-input",
        "name": "email_address",
        "aria-label": emailLabel,
        "placeholder": emailPlaceholder,
        "required": true,
        "type": "email"
      },
      "style": {
        color: 'rgb(105 113 119)',
        backgroundColor: 'rgb(243 246 249)',
        borderRadius: '5px',
        fontWeight: 400
      }
    })]), h("button", {
      "attrs": {
        "data-element": "submit",
        "className": "formkit-submit formkit-submit"
      },
      "style": {
        color: 'rgb(255 255 255)',
        backgroundColor: 'rgb(120 94 223)',
        borderRadius: '5px',
        fontWeight: 700
      }
    }, [h("div", {
      "attrs": {
        "className": "formkit-spinner"
      }
    }, [h("div"), h("div"), h("div")]), h("span", [submitText])])]), h("div", {
      "attrs": {
        "className": "formkit-disclaimer",
        "data-element": "disclaimer"
      },
      "style": {
        color: 'rgb(105 113 119)'
      }
    }, [disclaimerText]), options.settings.powered_by.show ? h(BuiltWithBadge, {
      "attrs": {
        "href": options.settings.powered_by.url
      }
    }) : null]), h("div", {
      "attrs": {
        "data-element": "column",
        "className": "formkit-background"
      },
      "style": {
        backgroundImage: `url(${backgroundImage})`
      }
    })])])]);
  }
};

const ALLOWED_FORMATS$7 = ['inline', 'modal', 'slide in'];
const bgImage$4 = '//pages.convertkit.com/assets/powell/bg.jpg';
const DefaultContent$5 = {
  functional: true,
  render: h => h("p", ["Subscribe to get our latest content by email."])
};
const Powell = {
  functional: true,
  render: (h, {
    props
  }) => {
    const {
      action,
      formId,
      options,
      hideName = true,
      showLabels = false,
      newTab = false,
      hideWarnings = false,
      className = '',
      submitText = 'Subscribe',
      emailPlaceholder = 'Email Address',
      namePlaceholder = 'First Name',
      nameLabel = 'First name',
      emailLabel = 'Email',
      format = 'inline',
      backgroundImage = bgImage$4,
      backgroundOpacity = 0.8,
      backgroundColor = [251, 105, 112],
      headingText = 'Join the newsletter',
      disclaimerText = "We won't send you spam. Unsubscribe at any time.",
      children = h(DefaultContent$5)
    } = props;
    const bgColor = backgroundColor.join(' ').concat(`/${backgroundOpacity}`);
    return h("div", [!hideWarnings && !ALLOWED_FORMATS$7.includes(format) ? h(Warning, {
      "attrs": {
        "message": "This template is not available for the chosen format"
      }
    }) : null, h("form", {
      "attrs": {
        "action": action,
        "className": `seva-form formkit-form powell ${className}`,
        "method": "post",
        "target": newTab ? '_blank' : '_self',
        "data-sv-form": formId,
        "data-uid": options.uid,
        "data-format": format,
        "data-version": options.version,
        "data-options": JSON.stringify(options),
        "min-width": "400 500 600 700 800"
      },
      "style": {
        backgroundColor: 'rgb(255 255 255)',
        borderRadius: '8px'
      }
    }, [h("div", {
      "attrs": {
        "data-style": "card"
      }
    }, [h("div", {
      "attrs": {
        "data-element": "column",
        "className": "formkit-column"
      },
      "style": {
        background: `linear-gradient(rgb(${bgColor}), rgb(${bgColor})), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'rgb(255, 255, 255)',
        fontSize: '22px',
        fontWeight: 700
      }
    }, [h("div", {
      "attrs": {
        "className": "formkit-header",
        "data-element": "header"
      }
    }, [h("h1", [headingText])])]), h("div", {
      "attrs": {
        "data-element": "column",
        "className": "formkit-column"
      }
    }, [h("div", {
      "attrs": {
        "className": "formkit-subheader",
        "data-element": "subheader"
      },
      "style": {
        color: 'rgb(125 125 125)',
        fontSize: '16px'
      }
    }, [children]), h("ul", {
      "attrs": {
        "className": "formkit-alert formkit-alert-error",
        "data-element": "errors",
        "data-group": "alert"
      }
    }), h("div", {
      "attrs": {
        "data-element": "fields",
        "className": "seva-fields formkit-fields"
      }
    }, [!hideName && h("span", [showLabels ? h("label", {
      "attrs": {
        "htmlFor": "ck-first-name"
      }
    }, [nameLabel]) : null, h("div", {
      "attrs": {
        "className": "formkit-field"
      }
    }, [h("input", {
      "attrs": {
        "className": "formkit-input",
        "aria-label": nameLabel,
        "name": "fields[first_name]",
        "placeholder": namePlaceholder,
        "type": "text",
        "id": "ck-first-name"
      },
      "style": {
        color: 'rgb(77 77 77)',
        borderColor: 'rgb(227 227 227)',
        borderRadius: '4px',
        fontWeight: 400
      }
    })])]), showLabels ? h("label", {
      "attrs": {
        "htmlFor": "ck-email"
      }
    }, [emailLabel]) : null, h("div", {
      "attrs": {
        "className": "formkit-field"
      }
    }, [h("input", {
      "attrs": {
        "className": "formkit-input",
        "aria-label": emailLabel,
        "name": "email_address",
        "placeholder": emailPlaceholder,
        "required": true,
        "type": "email",
        "id": "ck-email"
      },
      "style": {
        color: 'rgb(77 77 77)',
        borderColor: 'rgb(227 227 227)',
        borderRadius: '4px',
        fontWeight: 400
      }
    })]), h("button", {
      "attrs": {
        "data-element": "submit",
        "className": "formkit-submit formkit-submit"
      },
      "style": {
        color: 'rgb(255 255 255)',
        backgroundColor: 'rgb(251 105 112)',
        borderRadius: '24px',
        fontWeight: 700
      }
    }, [h("div", {
      "attrs": {
        "className": "formkit-spinner"
      }
    }, [h("div"), h("div"), h("div")]), h("span", [submitText])])]), h("div", {
      "attrs": {
        "className": "formkit-guarantee",
        "data-element": "guarantee"
      },
      "style": {
        color: 'rgb(125 125 125)',
        fontSize: '13px',
        fontWeight: 400
      }
    }, [disclaimerText]), options.settings.powered_by.show ? h(BuiltWithBadge, {
      "attrs": {
        "href": options.settings.powered_by.url,
        "data-variant": "dark"
      }
    }) : null])])])]);
  }
};

const ALLOWED_FORMATS$8 = ['inline', 'modal', 'slide in'];
const bgImage$5 = '//pages.convertkit.com/assets/rainier/bg.jpg';
const DefaultContent$6 = {
  functional: true,
  render: h => h("p", ["Receive tips and tricks on how to travel the world"])
};
const Rainier = {
  functional: true,
  render: (h, {
    props
  }) => {
    const {
      action,
      formId,
      options,
      hideName = true,
      showLabels = false,
      newTab = false,
      hideWarnings = false,
      stacked = false,
      className = '',
      submitText = 'Send it my way!',
      emailPlaceholder = 'Email Address',
      namePlaceholder = 'First Name',
      nameLabel = 'First name',
      emailLabel = 'Email',
      format = 'inline',
      backgroundImage = bgImage$5,
      backgroundOpacity = 0.8,
      backgroundColor = [16, 16, 16],
      headingText = 'Join the Newsletter',
      children = h(DefaultContent$6)
    } = props;
    const bgColor = backgroundColor.join(' ').concat(`/${backgroundOpacity}`);
    return h("div", [!hideWarnings && !ALLOWED_FORMATS$8.includes(format) ? h(Warning, {
      "attrs": {
        "message": "This template is not available for the chosen format"
      }
    }) : null, h("form", {
      "attrs": {
        "action": action,
        "className": `seva-form formkit-form rainier ${className}`,
        "method": "post",
        "target": newTab ? '_blank' : '_self',
        "data-sv-form": formId,
        "data-uid": options.uid,
        "data-format": format,
        "data-version": options.version,
        "data-options": JSON.stringify(options),
        "min-width": "400 500 600 700 800"
      }
    }, [h("div", {
      "attrs": {
        "className": "formkit-container",
        "data-style": "full"
      },
      "style": {
        backgroundColor: 'rgb(255 255 255)'
      }
    }, [h("div", {
      "attrs": {
        "className": "formkit-hero"
      }
    }, [h("div", {
      "attrs": {
        "className": "formkit-hero-bg-color"
      },
      "style": {
        backgroundImage: `linear-gradient(rgb(${bgColor}), rgb(${bgColor})), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }
    }), h("div", {
      "attrs": {
        "className": "formkit-header",
        "data-element": "header"
      },
      "style": {
        fontSize: '27px',
        fontWeight: 700,
        marginBottom: '20px',
        color: 'rgb(255 255 255)'
      }
    }, [h("h1", [headingText]), h("p", ["\u200B"])]), h("div", {
      "attrs": {
        "className": "formkit-content",
        "data-element": "content"
      },
      "style": {
        color: 'rgb(255 255 255)',
        fontSize: '18px',
        fontWeight: 400
      }
    }, [children])]), h("div", [h("ul", {
      "attrs": {
        "className": "formkit-alert formkit-alert-error",
        "data-element": "errors",
        "data-group": "alert"
      }
    }), h("div", {
      "attrs": {
        "data-element": "fields",
        "data-stacked": stacked,
        "className": "seva-fields formkit-fields"
      }
    }, [!hideName && h("span", [showLabels ? h("label", {
      "attrs": {
        "htmlFor": "ck-first-name"
      }
    }, [nameLabel]) : null, h("div", {
      "attrs": {
        "className": "formkit-field"
      }
    }, [h("input", {
      "attrs": {
        "className": "formkit-input",
        "aria-label": nameLabel,
        "name": "fields[first_name]",
        "placeholder": namePlaceholder,
        "type": "text",
        "id": "ck-first-name"
      },
      "style": {
        color: 'rgb(146 146 146)',
        borderColor: 'rgb(228 231 234)',
        borderRadius: 0,
        fontWeight: 400
      }
    })])]), showLabels ? h("label", {
      "attrs": {
        "htmlFor": "ck-email"
      }
    }, [emailLabel]) : null, h("div", {
      "attrs": {
        "className": "formkit-field"
      }
    }, [h("input", {
      "attrs": {
        "className": "formkit-input",
        "aria-label": emailLabel,
        "name": "email_address",
        "placeholder": emailPlaceholder,
        "required": true,
        "type": "email",
        "id": "ck-email"
      },
      "style": {
        color: 'rgb(146 146 146)',
        borderColor: 'rgb(228 231 234)',
        borderRadius: 0,
        fontWeight: 400
      }
    })]), h("button", {
      "attrs": {
        "data-element": "submit",
        "className": "formkit-submit formkit-submit",
        "type": "submit"
      },
      "style": {
        color: 'rgb(255 255 255)',
        backgroundColor: 'rgb(199 92 86)',
        borderRadius: 0,
        fontWeight: 700
      }
    }, [h("div", {
      "attrs": {
        "className": "formkit-spinner"
      }
    }, [h("div"), h("div"), h("div")]), h("span", [submitText])])]), options.settings.powered_by.show ? h(BuiltWithBadge, {
      "attrs": {
        "href": options.settings.powered_by.url,
        "data-variant": "dark"
      }
    }) : null])])])]);
  }
};

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
    minimal: Minimal,
    charlotte: Charlotte,
    clare: Clare,
    cocoa: Cocoa,
    mills: Mills,
    monterey: Monterey,
    pine: Pine,
    poplar: Poplar,
    powell: Powell,
    rainier: Rainier
  };

  if (!allTemplates.hasOwnProperty(templateName)) {
    const errorMessage = `The chosen template "${template}" is not yet supported`;
    throw new ReferenceError(errorMessage);
  }

  return allTemplates[templateName];
};

const useTemplate = template => {
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
