import Form from './form'

const ConvertKitForm = ({ formId, ...props }) => {
  const action = `https://app.convertkit.com/forms/${formId}/subscriptions`
  return <Form {...props} action={action} formId={formId} />
}

export default ConvertKitForm

