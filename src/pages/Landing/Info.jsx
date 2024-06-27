import infoPic from '../../assets/infoPic.jpg'

function Info() {
    return (
      <div className='landing-section'>
        <div>
          <h1>تجربه ی زندگی راحت تر،سریع تر و به صرفه تر با خانه ی هوشمند</h1>
          <p>تعامل انسان با اجزای یک خانه هوشمند فارغ از فاصله زمانی و مکانی ، جذابیت آن را برای علاقمندان به دنیای فناوری دوچندان میکند ، زیرا در هر مکان و هر زمان کنترل اجزای خانه را در دست خواهند داشت.</p>
        </div>
        <div className='img-container'><img src={infoPic}/></div>
      </div>
    )
  }
  
  export default Info
  