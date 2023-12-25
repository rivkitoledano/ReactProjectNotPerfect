
import BusinessServices from '../../stores/businessServices'
import './ServiceInAdmin.css'
import * as React from 'react';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import FormSetService from '../formSetService/FormSetService';
const ServiceInAdmin = ({ i }) => {
   
    return (
        <>
            <div className='single'>
                <div className='cardCard'>
                    <h2 className='name'>
                        {BusinessServices.businessServicesList[i].serviceName}</h2>
                    <div>{BusinessServices.businessServicesList[i].serviceDescription}</div>
                    <div>מחיר: {BusinessServices.businessServicesList[i].servicePrice}</div>
                    <div>{BusinessServices.businessServicesList[i].dateTime}</div>
                         <FormSetService servNum={i}></FormSetService>
                </div>
            </div>
        </>
    )
}

export default ServiceInAdmin;