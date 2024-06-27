import React ,{useState,useEffect}from 'react'
import {mockInfoCardList} from '../../__mockData'

function InfoCard({title}) {
  return (
    <div className='general-card template-card'>
      {title}
    </div>
  )
}

function TemplateSection() {
    const [infoCardList, setInfoCardList] = useState([])
    function getInfoCardList() {
        setInfoCardList(mockInfoCardList)
    }
    useEffect(() => {
      getInfoCardList()
    }, [])
  return (
    <div className="section template">
      <div className='section-title'>غالب ها</div>
        <div className='scroll-container'>
        {infoCardList.map(item=>{
            return (
              <InfoCard title={item.title}/>  
            )
        })}
        </div>
      </div>
  )
}

export default TemplateSection