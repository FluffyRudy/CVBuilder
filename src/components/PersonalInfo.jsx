import "../styles/personalInfo.css";

export default function PersonalInfo() {
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
        Suggestion: Include an emailand phone number.
      </p>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className='fullname'>
          <div className='extended'>
            <label htmlFor='firstname'>First Name</label>
            <input
              type='text'
              id='firstname'
              name='firstname'
            />
          </div>
          <div className='extended'>
            <label htmlFor='lastname'>Last Name</label>
            <input
              type='text'
              id='lastname'
              name='lastname'
            />
          </div>
        </div>
        <div className='profession'>
          <label htmlFor='profession'>Profession</label>
          <input
            type='text'
            id='profession'
            name='profession'
          />
        </div>
        <div className='location'>
          <div className='extended'>
            <label htmlFor='location'>City</label>
            <input
              type='text'
              id='location'
              name='location'
            />
          </div>
          <div className='extended'>
            <label htmlFor='country'>Country</label>
            <input
              type='text'
              id='country'
              name='country'
            />
          </div>
        </div>
        <div className='contact'>
          <div className='extended'>
            <label htmlFor='phone'>Contact</label>
            <input
              type='number'
              id='phone'
              name='phone'
            />
          </div>
          <div className='extended'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              id='email'
              name='email'
            />
          </div>
        </div>
      </form>
    </div>
  );
}
