import useTemplate from './use-template'

function formFormat(format) {
  switch (format) {
    case 'slidein':
      return 'slide in'
    case 'sticky':
      return 'sticky bar'
    default:
      return format
  }
}

const Form = ({ props }) => {
  console.log({ fromThis: this.template, fromProps: props.template })
  const template = this.template || minimal
  const { options, Template } = useTemplate(template)
  return <Template {...props} options={options} format={formFormat(props.format)} />
}

export default Form
