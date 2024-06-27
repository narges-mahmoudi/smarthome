import React ,{useState,useEffect}from 'react'
import {mockInfoCardList} from '../../__mockData'

function InfoCard({title}) {
  return (
    <div className='general-card info-card'>
      {title}
    </div>
  )
}

function InfoSection() {
    const [infoCardList, setInfoCardList] = useState([])
    function getInfoCardList() {
        setInfoCardList(mockInfoCardList)
    }
    useEffect(() => {
      getInfoCardList()
    }, [])
  return (
    <div className="section info">
      {/* <div className='section-title'>دستگاه ها</div> */}
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

export default InfoSection