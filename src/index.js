const ConvertKitForm = ({ formId }) => {
  const action = `https://app.convertkit.com/forms/${formId}/subscriptions`
  return (
    <form action={action}>
      <label>Email</label>
      <input type="email" />
    </form>
  )
}

export default ConvertKitForm

