import { observable, makeObservable, action, computed } from 'mobx';

const meeting = {
    serviceName: "",
    serviceDescribtion: '',
    servicePrice: 0,
    dateTime: '',
    clientName: "",
    clientPhone: 1223456789,
    clientEmail: ""
}
class MeetingStore {
    meetingsList = [];
    constructor() {
        makeObservable(this, {
            meetingsList: observable,
            addMeeting: action,
            initialMeeting:action
        })
    }
    addMeeting = async (meeting) => {
            const response = await fetch("http://localhost:8787/appointment", {
                method: "POST",
                body: JSON.stringify(meeting),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            console.log(response.status)
        if (response.status === 200) {
            this.meetingsList=([...this.meetingsList, meeting]  )
            console.log(this.meetingsList.length)
        }
    }
     initialMeeting = async () => {
        const response = await fetch("http://localhost:8787/appointments");
        const data = await response.json();
        console.log(data);
        this.meetingsList=([...data]);
    }
 
}
export default new MeetingStore();