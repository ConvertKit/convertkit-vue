import Form from './form'

const ConvertKitForm = ({ props }) => {
  const action = `https://app.convertkit.com/forms/${props.formId}/subscriptions`
  return (
    <Form vBind={props} action={action} />
  )
}

export default ConvertKitForm
