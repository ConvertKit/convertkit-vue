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

const Form = ({
  template = 'minimal',
  format,
  ...props
}) => {
  const { options, Template } = useTemplate(template)
  return <Template {...props} options={options} format={formFormat(format)} />
}

export default Form
