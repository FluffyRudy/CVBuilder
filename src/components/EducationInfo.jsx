import "../styles/educationInfo.css";

export default function EducationInfo({ dataProps, onChange }) {
  return (
    <div className='school'>
      <h1 className='heading'>Tell us about your education</h1>
      <p className='contact-suggestion'>
        Enter your education experience so far, even if you are a current
        student or did not graduate.
      </p>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className='college-name'>
          <div className='extended'>
            <label htmlFor='college'>College Name</label>
            <input
              type='text'
              id='college'
              name='collegeName'
              value={dataProps.collegeName}
              onChange={onChange}
            />
          </div>
          <div className='extended'>
            <label htmlFor='college-location'>Location</label>
            <input
              type='text'
              id='collegeLocation'
              name='collegeLocation'
              value={dataProps.collegeLocation}
              onChange={onChange}
            />
          </div>
        </div>
        <div className='degree'>
          <label htmlFor='degree'>Degree</label>
          <input
            type='text'
            id='degree'
            name='degree'
            value={dataProps.degree}
            onChange={onChange}
          />
        </div>
        <div className='study-field'>
          <div className='extended'>
            <label htmlFor='study-field'>Study Field</label>
            <input
              type='text'
              id='study-field'
              name='field'
              value={dataProps.field}
              onChange={onChange}
            />
          </div>
          <div className='extended'>
            <label htmlFor='graduation'>Graduation Date</label>
            <input
              type='date'
              id='graduation'
              name='graduationDate'
              value={dataProps.graduationDate}
              onChange={onChange}
            />
          </div>
        </div>
      </form>
    </div>
  );
}
