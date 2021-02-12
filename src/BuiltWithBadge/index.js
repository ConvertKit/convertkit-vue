import './builtwith.css'

const BuiltWithBadge = ({ props }) => {
  const { href } = props
  return (
    <a href={href} className="formkit-powered-by-convertkit" target="_blank" rel="noopener noreferrer" data-element="powered-by" {...{ attrs: props }}>
      Built with ConvertKit
    </a>
  )
}

export default BuiltWithBadge