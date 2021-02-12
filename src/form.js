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

const Form = (context) => {
  console.log({ context, props: context?.props })
  const template = 'minimal'
  const { options, Template } = useTemplate(template)
  return <Template options={options} format="inline" />
}

export default Form
