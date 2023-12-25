import { useState } from "react";
import { observer } from 'mobx-react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import BusinessServices from "../../stores/businessServices.js";
import Swal from 'sweetalert2'
import X from '../../assets/images/X.gif'
const FormSetService = observer(({ servNum = 0 }) => {
    const serv = BusinessServices.businessServicesList.find(
        (serv) => serv.serviceId === String(servNum)
    );
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        serviceId: serv.serviceId,
        serviceName: serv.serviceName,
        serviceDescription: serv.serviceDescription,
        servicePrice: serv.servicePrice,
        serviceImage: serv.serviceImage
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleSubmit = (event) => {
        if (formData.serviceName !== '' && formData.serviceDescription !== '' && formData.servicePrice !== '') {
            Swal.fire({
                title: "Do you want to save the changes?",
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: "Save",
                denyButtonText: `Don't save`
            }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    Swal.fire("Saved!", "", "success");
                    event.preventDefault();
                     BusinessServices.addService(formData);

                } else if (result.isDenied) {
                    Swal.fire("Changes are not saved", "", "info");
                }
            });


        }
        else {
            Swal.fire({
                title: "Error!",
                text: "required filds",
                imageUrl: X,
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: "image"
            });

        }

        // Reset the form after submitting
        setFormData({
            serviceId: serv.serviceId,
            serviceName: serv.serviceName,
            serviceDescription: serv.serviceDescription,
            servicePrice: serv.servicePrice,
            serviceImage: serv.serviceImage
        });
        setIsOpen(false);
    };



    return (
        <>
            <Button variant="contained" onClick={() => setIsOpen(true)}>עריכה</Button>

            <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
                <DialogTitle>  Set service</DialogTitle>
                <DialogContent>
                    <form onSubmit={handleSubmit} className="Form">
                        <div className="PopupsInput">
                            <TextField
                                fullWidth
                                label="service Name"
                                name="serviceName"
                                value={formData.serviceName}
                                onChange={handleInputChange}
                                placeholder=" service Name"
                            />
                        </div>
                        <div className="PopupsInput">

                            <TextField
                                fullWidth
                                label=" service Description"
                                name="serviceDescription"
                                value={formData.serviceDescription}
                                onChange={handleInputChange}
                                placeholder="service Description"
                            />
                        </div>

                        <div className="PopupsInput">

                            <TextField
                                fullWidth
                                label="  service Price"
                                name="servicePrice"
                                value={formData.servicePrice}
                                onChange={handleInputChange}
                                placeholder="service Price"
                            />
                        </div>



                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setIsOpen(false)}>Cancel</Button>
                    <Button type="submit" onClick={handleSubmit}>Submit</Button>
                </DialogActions>
            </Dialog>
        </>
    )
})

export default FormSetService