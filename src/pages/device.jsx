import React,{useState,useEffect} from 'react'
import axios from 'axios';
import TemplatListCard from '../components/template-list-card'
import AddCardBtn from '../components/AddCardBtn'
import Api from '../api'

function Template() {
  const [cardList, setCardList] = useState([])
  
  function getCardListData() {
    axios.get(Api.GET_DEVICE_LIST)
    .then(res=>{
     setCardList(res.data.data)
    })
  }
  useEffect(() => {
    getCardListData()
  }, [])
  
  return (
  
      <div className='content-container template-container'>
        <div className='section-title'>دستگاه ها</div>
        <div className="general-card template-section">
          <div className='vertical-scroll-container'>
          {cardList.map(item => {
          return (<TemplatListCard title=' TemplatListCard 1'/>)
         })}
          <TemplatListCard title=' TemplatListCard 1'></TemplatListCard>
          <TemplatListCard title='TemplatListCard 2'></TemplatListCard>
          <TemplatListCard title='TemplatListCard 3'></TemplatListCard>
          <TemplatListCard title=' TemplatListCard 1'></TemplatListCard>
          <TemplatListCard title='TemplatListCard 2'></TemplatListCard>
          <TemplatListCard title='TemplatListCard 3'></TemplatListCard>
          </div>
          <AddCardBtn customClassName='template-add-btn'/>
        </div>
      </div>
  )
}

export default Template