import DashboardSideBar from '../../components/sidebar'
import TemplateCard from '../../components/template-card'
import DeviceCard from '../../components/device-card'
import InfoSection from './InfoSection'
import TemplateSection from './TemplateSection'
import DeviceSection from './DeviceSection'

function Home() {
  return (
   
    <div className='content-container'>
      <InfoSection/>
      <DeviceSection/>
      <TemplateSection/>
      {/* <div className="section device">
        <DeviceCard title='device card 1  '></DeviceCard>

      </div>
      <div className="section template">
        <TemplateCard title='template card 1  '/>
        <TemplateCard title='template card 2  '/>
        <TemplateCard title='template card 3  '/>
        <TemplateCard title='template card 4  '/>
      </div> */}
    </div>
  )
}

export default Home
