import "../styles/personalInfo.css";

export default function PersonalInfo({ onChange }) {
  return (
    <div className='personal'>
      <div className='profile'>
        <img
          width='94'
          height='94'
          src='https://img.icons8.com/3d-fluency/94/user-male-circle.png'
          alt='user-male-circle'
        />
        <button>Upload</button>
      </div>
      <h1 className='heading'>
        What&#39;s the best way for employers to contact you
      </h1>
      <p className='contact-suggestion'>
        Suggestion: Include an email and phone number.
      </p>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className='fullname'>
          <div className='extended'>
            <label htmlFor='firstname'>First Name</label>
            <input
              type='text'
              id='firstname'
              name='firstName'
              onChange={onChange}
            />
          </div>
          <div className='extended'>
            <label htmlFor='lastname'>Last Name</label>
            <input
              type='text'
              id='lastname'
              name='lastName'
              onChange={onChange}
            />
          </div>
        </div>
        <div className='profession'>
          <label htmlFor='profession'>Profession</label>
          <input
            type='text'
            id='profession'
            name='profession'
            onChange={onChange}
          />
        </div>
        <div className='location'>
          <div className='extended'>
            <label htmlFor='city'>City</label>
            <input
              type='text'
              id='city'
              name='city'
              onChange={onChange}
            />
          </div>
          <div className='extended'>
            <label htmlFor='country'>Country</label>
            <input
              type='text'
              id='country'
              name='country'
              onChange={onChange}
            />
          </div>
        </div>
        <div className='contact'>
          <div className='extended'>
            <label htmlFor='phone'>Phone</label>
            <input
              type='number'
              id='phone'
              name='phone'
              onChange={onChange}
            />
          </div>
          <div className='extended'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              id='email'
              name='email'
              onChange={onChange}
            />
          </div>
        </div>
      </form>
    </div>
  );
}
