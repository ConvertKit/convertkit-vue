import Minimal from './templates/minimal'
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
}

const renderTemplate = template => {
  const templateName = template.toLowerCase()
  const allTemplates = {
    minimal: Minimal,
    // charlotte: Charlotte,
    // clare: Clare,
    // cocoa: Cocoa,
    // mills: Mills,
    // monterey: Monterey,
    // pine: Pine,
    // poplar: Poplar,
    // powell: Powell,
    // rainier: Rainier,
  }

  if (!allTemplates.hasOwnProperty(templateName)) {
    const errorMessage = `The chosen template "${template}" is not yet supported`
    throw new ReferenceError(errorMessage)
  }

  return allTemplates[templateName]
}

const useTemplate = (template) => {
  console.log({ template })
  return {
    options,
    Template: renderTemplate(template)
  }
}

export default useTemplate
