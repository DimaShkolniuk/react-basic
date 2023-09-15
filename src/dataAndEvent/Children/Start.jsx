import Children from './components/Children'

const Start = () => {
  const date = new Date()
  return (
    <div>
      <Children message={date.toLocaleTimeString()} />
    </div>
  )
}
export default Start
