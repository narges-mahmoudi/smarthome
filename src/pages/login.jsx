import '../style.css'
import background_image from '/bimage.jpg'

function Login() {
  return (
    <>
    <div className='dashboard-container'>
      <div className='left'>
        <img className='img' src={background_image} alt="My Image" />
      </div>
      <div className='right'>
      </div> 
      <div className='login-card'>
          <div className='subtitles'>
            <h1>welcome</h1>
          </div>
          <form action="">
              <label htmlFor="username">username</label>
              <input type="text" id='username' name='username' />
     
              <label htmlFor="password">password</label>
              <input type="password" id='password' name='password' />
            
              <input type="submit" id='submit' value='submit' />

          </form>
        </div>
    </div>
    </>
  )
}

export default Login
