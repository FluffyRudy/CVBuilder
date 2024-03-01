import "../styles/workHistory.css";

export default function WorkHistory({ dataProps, onChange }) {
  return (
    <div className='work'>
      <h1 className='heading'>Tell us about your most recent job</h1>
      <p className='suggestion'>We’ll start there and work backward.</p>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className='job-title'>
          <div className='center-vrt'>
            <label htmlFor='title'>Job Title</label>
            <input
              type='text'
              id='title'
              name='jobTitle'
              value={dataProps.jobTitle}
              onChange={onChange}
            />
          </div>
          <div className='center-vrt'>
            <label htmlFor='employer'>Employer</label>
            <input
              type='text'
              id='employer'
              name='employer'
              value={dataProps.employer}
              onChange={onChange}
            />
          </div>
        </div>
        <div className='job-location'>
          <label htmlFor='job-location'>Location</label>
          <input
            type='text'
            id='job-location'
            name='jobLocation'
            value={dataProps.jobLocation}
            onChange={onChange}
          />
        </div>
        <div className='work-duration'>
          <div className='center-vrt'>
            <label htmlFor='start-year'>Start Date</label>
            <input
              type='date'
              id='start-year'
              name='startDate'
              value={dataProps.startDate}
              onChange={onChange}
            />
          </div>
          <div className='center-vrt'>
            <label htmlFor='end-year'>End Date</label>
            <input
              type='date'
              id='end-year'
              name='endDate'
              value={dataProps.endDate}
              onChange={onChange}
            />
          </div>
        </div>
      </form>
    </div>
  );
}
