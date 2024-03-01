import "../styles/personalInfo.css";
import { useState } from "react";

export default function PersonalInfo({
  dataProps,
  onChange,
  profilePic,
  setProfilePicture,
}) {
  const [phoneError, setPhoneError] = useState("");

  const handlePhoneChange = (e) => {
    const phoneInput = e.target.value;
    if (!/^[0-9]*$/.test(phoneInput)) {
      setPhoneError("Please enter a valid phone number.");
    } else {
      setPhoneError("");
    }
    onChange(e);
  };

  const handleProfilePicChange = (e) => {
    if (e.target.files[0]) {
      setProfilePicture(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <div className='personal'>
      <div className='profile'>
        <img
          width='94'
          height='94'
          id='profile-picture'
          src={profilePic}
          alt='user-male-circle'
        />
        <input
          type='file'
          id='profile-pic-input'
          accept='image/*'
          onChange={handleProfilePicChange}
          style={{ display: "none" }}
        />
        <label
          id='profile-pic-label'
          htmlFor='profile-pic-input'>
          Upload
        </label>
      </div>
      <h1 className='heading'>
        What's the best way for employers to contact you
      </h1>
      <p className='suggestion'>
        Suggestion: Include an email and phone number.
      </p>
      <form>
        <div className='fullname'>
          <div className='center-vrt'>
            <label htmlFor='firstname'>First Name</label>
            <input
              type='text'
              id='firstname'
              name='firstName'
              onChange={onChange}
              value={dataProps.firstName}
            />
          </div>
          <div className='center-vrt'>
            <label htmlFor='lastname'>Last Name</label>
            <input
              type='text'
              id='lastname'
              name='lastName'
              value={dataProps.lastName}
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
            value={dataProps.profession}
            onChange={onChange}
          />
        </div>
        <div className='location'>
          <div className='center-vrt'>
            <label htmlFor='city'>City</label>
            <input
              type='text'
              id='city'
              name='city'
              value={dataProps.city}
              onChange={onChange}
            />
          </div>
          <div className='center-vrt'>
            <label htmlFor='country'>Country</label>
            <input
              type='text'
              id='country'
              name='country'
              value={dataProps.country}
              onChange={onChange}
            />
          </div>
        </div>
        <div className='contact'>
          <div className='center-vrt'>
            <label htmlFor='phone'>Phone</label>
            <input
              type='text'
              id='phone'
              name='phone'
              value={dataProps.phoneNumber}
              onChange={handlePhoneChange}
            />
            {phoneError && <p style={{ color: "red" }}>{phoneError}</p>}
          </div>
          <div className='center-vrt'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              id='email'
              name='email'
              value={dataProps.email}
              onChange={onChange}
            />
          </div>
        </div>
      </form>
    </div>
  );
}
