import { ScheduleForm, Benefit } from "../../Components";
import { Benifit1, Benifit2, Benifit3 } from '../../Assets/img/svg'
// Appointment section in that benifit and schedule form is call.
function AppointmentSection() {
  return (
    <div className='w-11/12 sm:w-10/12 m-auto'>
      <div className="bg-white flex flex-col sm:flex-row-reverse  justify-center">
        <div className="w-11/12 sm:w-6/12 md:4/12 relative m-auto" style={{ minHeight: '400px' }}>
          <div className='absolute -mt-36 '>
            <ScheduleForm />
          </div>
        </div>
        <div className='w-11/12 sm:w-6/12 m-auto py-10'>
          <div className='flex flex-col'>
            <div>
              <Benefit
                img={() => {
                  return < Benifit1 />
                }}
                title={`Benefit 1`}
                description={`Highlight the benefits of signing up for an appointment, online class, or video consultation.`}
              />
            </div>
            <div>
              <Benefit
                img={() => {
                  return < Benifit2 />
                }}
                title={`Benefit 2`}
                description={`For example, fitness instructors might describe how their routines make people healthier *and* happier.`}
              />
            </div>
            <div>
              <Benefit
                img={() => {
                  return < Benifit3 />
                }}
                title={`Benefit 3`}
                description={`Remind visitors how easy it is to claim your offer and start enjoying the benefits.`}
              />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default AppointmentSection;
