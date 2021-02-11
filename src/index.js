const ConvertKitForm = ({ props }) => {
  const action = `https://app.convertkit.com/forms/${props.formId}/subscriptions`
  return (
    <form action={action}>
      <label>Email</label>
      <input type="email" />
    </form>
  )
}

export default ConvertKitForm

