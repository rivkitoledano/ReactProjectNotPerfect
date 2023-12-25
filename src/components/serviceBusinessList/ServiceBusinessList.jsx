
import React from 'react';
import { observer } from 'mobx-react';
import BusinessServices from '../../stores/businessServices';
import './ServiceBusinessList.css';
import SingleService from '../singleService/SingleService';
import { Outlet } from 'react-router-dom';
import ServiceInAdmin from '../serviceInAdmin/ServiceInAdmin'
const ServiceBusinessList = observer(() => {

  return (
    <div className="container">
      {BusinessServices.businessServicesList.map((service, ind) => <ServiceInAdmin key={service} i={ind}></ServiceInAdmin>)}

   
  </div>
  );
});

export default ServiceBusinessList;
//
