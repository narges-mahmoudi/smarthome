import HeaderNavBar from './header-navbar'
import Info from './Info'
import CreateAccount from './CreateAccount'

function Landing() {
   return (
      <div className='landing-container'>
         <HeaderNavBar />
         <Info />
         <CreateAccount />
      </div>
   )
}

export default Landing
