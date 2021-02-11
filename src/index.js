import Form from './form'

const ConvertKitForm = ({ props }) => {
  const action = `https://app.convertkit.com/forms/${props.formId}/subscriptions`
  return (
    <>
      <Form {...props} action={action} />
      {
        props.template && props.template !== 'minimal' ? (
          <script src="https://f.convertkit.com/ckjs/ck.5.js" defer async></script>
        ) : null
      }
    </>
  )
}

export default ConvertKitForm
