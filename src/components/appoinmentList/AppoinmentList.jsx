
import { observable, makeObservable, action, computed } from 'mobx';
import { observer } from 'mobx-react';
import MeetingStore from '../../stores/managementOfMeetings.js';
import SingleAppointment from '../singleAppointment/SingleAppointment';

import { useEffect } from "react";
const AppoinmentList = observer(()=> {
  useEffect(() => {
    MeetingStore.initialMeeting();
  },[])
    return (
      <>
      <div>
           {MeetingStore.meetingsList.map((v,key)=><SingleAppointment key={v} i={key}></SingleAppointment>)}
      </div>
    </>
    )
  }
)
  export default AppoinmentList