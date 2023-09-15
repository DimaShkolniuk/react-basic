const PromoHeading = (props) => {
  const { heading, callToAction } = props
  return (
    <h1>
      {heading} <br /> {callToAction}
    </h1>
  )
}
export default PromoHeading
