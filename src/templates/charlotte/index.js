import './charlotte-styles.css'
import Warning from '../../warning'
import BuiltWithBadge from '../../BuiltWithBadge'

const ALLOWED_FORMATS = ['inline', 'modal', 'slide in']

const bgImage = '//pages.convertkit.com/assets/charlotte/bg.jpg'

export default {
  mounted() {
    const script = document.createElement('script')
    script.src = 'https://f.convertkit.com/ckjs/ck.5.js'
    script.async = true
    document.body.appendChild(script)
  },
  render() {
    const action = this.action
    const formId = this.formId
    const hideName = this.hideName || true
    const showLabels = this.showLabels || false
    const newTab = this.newTab || false
    const hideWarnings = this.hideWarnings || false
    const className = this.className || ''
    const submitText = this.submitText || 'Send me the guide'
    const disclaimerText = this.disclaimerText || 'We respect your privacy, Unsubscribe at any time.'
    const emailPlaceholder = this.emailPlaceholder || 'Your email'
    const namePlaceholder = this.namePlaceholder || 'Your first name'
    const nameLabel = this.nameLabel || 'First name'
    const emailLabel = this.emailLabel || 'Email'
    const headingText = this.headingText || 'Get our how to guide'
    const format = this.format || 'inline'
    const backgroundImage = this.backgroundImage || bgImage
    return (
      <>
        {!hideWarnings && !ALLOWED_FORMATS.includes(format) ? <Warning message="This template is not available for the chosen format" /> : null}
        <form action={action} className={`seva-form formkit-form charlotte ${className}`} method="post" target={newTab ? '_blank' : '_self'} data-sv-form={formId} data-uid={options.uid} data-format={format} data-version={options.version} data-options={JSON.stringify(options)} min-width="400 500 600 700 800" style={{ backgroundColor: 'rgb(255, 255, 255)', borderRadius: '6px' }}>
          <div data-style="full">
            <div data-element="column" className="formkit-background" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
            <div data-element="column" className="formkit-column">
              <div className="formkit-header" data-element="header" style={{ color: 'rgb(83, 83, 83)', fontSize: '28px', fontWeight: 700 }}>
                <h1>{headingText}</h1>
              </div>
              <ul className="formkit-alert formkit-alert-error" data-element="errors" data-group="alert"></ul>
              <div data-element="fields" className="seva-fields formkit-fields">
                {!hideName && (
                  <>
                    {showLabels ? <label htmlFor="ck-first-name">{nameLabel}</label> : null}
                    <div className="formkit-field">
                      <input className="formkit-input" aria-label={nameLabel} name="fields[first_name]" placeholder={namePlaceholder} type="text" style={{ color: 'rgb(139, 139, 139)', borderColor: 'rgb(221, 224, 228)', fontWeight: 400, borderLeft: 0, borderRight: 0, borderTop: 0, paddingLeft: 0, paddingRight: 0 }} id="ck-first-name" />
                    </div>
                  </>
                )}
                {showLabels ? <label htmlFor="ck-email">{emailLabel}</label> : null}
                <div className="formkit-field">
                  <input className="formkit-input" aria-label={emailLabel} name="email_address" placeholder={emailPlaceholder} required type="email" style={{ color: 'rgb(139, 139, 139)', borderColor: 'rgb(221, 224, 228)', fontWeight: 400, borderLeft: 0, borderRight: 0, borderTop: 0, paddingLeft: 0, paddingRight: 0 }} id="ck-email" />
                </div>
                <button data-element="submit" className="formkit-submit" style={{ width: '100%', color: 'rgb(255, 255, 255)', backgroundColor: 'rgb(246, 166, 171)', borderRadius: '3px', fontWeight: 700 }}>
                  <div className="formkit-spinner">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                  <span>{submitText}</span>
                </button>
              </div>
              <div className="formkit-disclaimer" data-element="disclaimer" style={{ color: 'rgb(139, 139, 139)', fontSize: '13px' }}>
                {disclaimerText}
              </div>
              {options.settings.powered_by.show ? (
                <BuiltWithBadge href={options.settings.powered_by.url} data-variant="dark" />
              ) : null}
            </div>
          </div>
        </form>
      </>
    )
  }
}