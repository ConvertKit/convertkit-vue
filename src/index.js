import Form from './form'

const ConvertKitForm = ({ formId, ...props }) => {
  const action = `https://app.convertkit.com/forms/${formId}/subscriptions`
  return (
    <>
      <Form {...props} action={action} formId={formId} />
      <script src="https://f.convertkit.com/ckjs/ck.5.js" defer async></script>
    </>
  )
}

export default ConvertKitForm

