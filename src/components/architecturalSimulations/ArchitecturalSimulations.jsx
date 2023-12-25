import { Outlet, useParams } from 'react-router-dom'
import ShowingBusinessDetails from '../showingBusinessDetails/ShowingBusinessDetails'
import BusinessServices from '../../stores/businessServices'
import SingleService from '../singleService/SingleService'
import './ArchitecturalSimulations.css'
import { useEffect } from 'react'
const ArchitecturalSimulations = () => {
  useEffect(() => {
   localStorage.removeItem('isLogin'); 
}, [])
const { service } = useParams()
  return (
    <>
      <ShowingBusinessDetails></ShowingBusinessDetails>
      <div className="container">
        <div className="sidebar">
          {BusinessServices.businessServicesList.map((service, ind) => (
            <a href={ind} key={ind}>
              <div>{service.serviceName}</div>
            </a>))}

        </div>
        <div className="content">

          {service ? <Outlet context={[service]} /> : <SingleService context={[0]}></SingleService>}

        </div>
      </div>

    </>
  )
}

export default ArchitecturalSimulations