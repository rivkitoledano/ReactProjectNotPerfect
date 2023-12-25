import { useState } from "react";
import { observable, makeObservable, action, computed } from 'mobx';
import { observer } from 'mobx-react';
import businessServices from "../../stores/businessServices";
import logoRT from '../../assets/images/logoRT.png';
import './ShowingBusinessDetails.css';

const ShowingBusinessDetails = observer(() => {
  return (
    <div className="flex-container">
      <div className="logo-container">
        <img className="logo-image" src={logoRT} alt="Logo" />
      </div>
      <div className="details-container">
        <h1 className="business-name">{businessServices.business.name}</h1>
        
        <div className="business-owner">{businessServices.business.owner}</div>
        <p className="business-description">{businessServices.business.description}</p>
        <h2 className="business-address">{businessServices.business.address}</h2>
        <h3 className="business-phone">{businessServices.business.phone}</h3>
        <div className="business-phone">{businessServices.business.email}</div>
      </div>
    </div>
  );
});

export default ShowingBusinessDetails;
