import Form from './form'

const ConvertKitForm = ({ props }) => {
  const action = `https://app.convertkit.com/forms/${props.formId}/subscriptions`
  console.log({ props })
  return (
    <Form v-bind={props} action={action} />
  )
}

export default ConvertKitForm
