import Header from './components/Header'
import Main from './components/Main'
import Sidebar from './components/Sidebar'

function Start() {
  return (
    <div>
      <Header name={'Anna'} color={'green'} />
      <Main name={'Jack'} />
      <Sidebar name={'Alex'} />
    </div>
  )
}
export default Start
