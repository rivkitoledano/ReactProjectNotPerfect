
import './SingleAppointment.css'
import MeetingStore from '../../stores/managementOfMeetings.js';

const SingleAppointment = ({ i }) => {

  return (
    <>
      <div className='single'>
        <div className='card'>
          <h2 className='name'>
                       {MeetingStore.meetingsList[i].serviceName}</h2>
          <div>שם:     {MeetingStore.meetingsList[i].clientName}</div>
          <div>פלאפון: {MeetingStore.meetingsList[i].clientPhone}</div>
          <div>אימייל: {MeetingStore.meetingsList[i].clientEmail}</div>
          <div>שעה:     {MeetingStore.meetingsList[i].dateTime}</div>
        </div>
      </div>
    </>
  )
}

export default SingleAppointment;