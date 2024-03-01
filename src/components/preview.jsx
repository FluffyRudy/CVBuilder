import "../styles/preview.css";
import cancelButton from "../assets/cancel.svg";

export default function Preview({
  userInfo,
  workInfo,
  educationInfo,
  summery,
  profilePicture,
  setPreviewVisibility,
}) {
  function closePreview() {
    setPreviewVisibility(false);
  }

  return (
    <div className='preview'>
      <div className='heading-cancelbtn'>
        <h1>Resume Preview</h1>
        <button onClick={() => closePreview()}>
          <img
            src={cancelButton}
            alt=''
          />
        </button>
      </div>
      <div className='preview-box'>
        <div className='preview-menu'>
          <div className='preview-profile'>
            <img
              src={profilePicture}
              alt='user-male-circle'
              id='preview-profile-img'
            />
            <div className='name-profession'>
              <p className='preview-fname'>
                {userInfo.firstName + " " + userInfo.lastName}
              </p>
              <p>{userInfo.profession}</p>
            </div>
          </div>
          <div className='preview-contact-loc'>
            <p className='preview-label'>Contact</p>
            <p>Phone: {userInfo.phone}</p>
            <p>Email: {userInfo.email}</p>
            <p>{userInfo.city && userInfo.city + ", " + userInfo.country}</p>
          </div>
        </div>
        <div className='other-detail'>
          <div className='perview-summery'>
            <h2 className='preview-label first-label'>Summery</h2>
            <p>{summery.info}</p>
          </div>
          <div className='work-history'>
            <h2 className='preview-label'>Work History</h2>

            <div className='work-history-info center-hrz'>
              <div className='date'>
                <p>{workInfo.startDate && workInfo.startDate + "-"}</p>
                <p>{workInfo.endDate}</p>
              </div>
              <div className='company-employee'>
                <p>{workInfo.jobTitle}</p>
                <p>
                  {workInfo.employer && workInfo.employer + ", "}
                  {workInfo.jobLocation && workInfo.jobLocation}{" "}
                </p>
              </div>
            </div>
          </div>
          <div className='education-info'>
            <h2 className='preview-label'>Education</h2>

            <div className='education-degree'>
              <p>
                {educationInfo.degree && educationInfo.degree + ": "}
                {educationInfo.field}
              </p>
              <p>
                {educationInfo.collegeName && educationInfo.collegeName + ", "}
                {educationInfo.collegeLocation}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
