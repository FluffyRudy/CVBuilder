import { useState } from "react";
import PersonalInfo from "./components/PersonalInfo";
import WorkHistory from "./components/WorkHistory";
import EducationInfo from "./components/EducationInfo";
import Summery from "./components/summery";
import data from "./defaultProps/props";
import "./App.css";

function App() {
  const [activeComponent, setActiveComponent] = useState("PersonalInfo");
  const [userInfo, setUserInfo] = useState({ ...data.personalInfo });
  const [workInfo, setWorkinfo] = useState({ ...data.workInfo });
  const [educationInfo, setEducationInfo] = useState({ ...data.educationInfo });
  const [summery, setSummery] = useState({ ...data.summery });

  function handleInputChange(e, setState) {
    const { name, value } = e.target;
    setState((prevValue) => ({ ...prevValue, [name]: value }));
  }

  const renderComponent = () => {
    switch (activeComponent) {
      case "PersonalInfo":
        return (
          <PersonalInfo
            dataProps={userInfo}
            onChange={(e) => handleInputChange(e, setUserInfo)}
          />
        );
      case "WorkHistory":
        return (
          <WorkHistory
            dataProps={workInfo}
            onChange={(e) => handleInputChange(e, setWorkinfo)}
          />
        );
      case "EducationInfo":
        return (
          <EducationInfo
            dataProps={educationInfo}
            onChange={(e) => handleInputChange(e, setEducationInfo)}
          />
        );
      case "Summery":
        return (
          <Summery
            dataProps={summery}
            onChange={(e) => handleInputChange(e, setSummery)}
          />
        );
      default:
        <PersonalInfo
          dataProps={userInfo}
          onChange={(e) => handleInputChange(e, setUserInfo)}
        />;
    }
  };

  return (
    <>
      <div className='menus'>
        <div className='logo'>
          <h1>R U D Y</h1>
        </div>
        <button onClick={() => setActiveComponent("PersonalInfo")}>
          <span className='circ-lrgtext'>1</span> Heading
        </button>

        <button onClick={() => setActiveComponent("WorkHistory")}>
          <span className='circ-lrgtext'>2</span> Work History
        </button>

        <button onClick={() => setActiveComponent("EducationInfo")}>
          <span className='circ-lrgtext'>3</span> Education
        </button>

        <button onClick={() => setActiveComponent("Summery")}>
          <span className='circ-lrgtext'>3</span> Summery
        </button>
      </div>
      <main>
        <div className='form'>
          <div className='dataform'>{renderComponent()}</div>
        </div>
        <div className='preview'>
          <div className='preview-box'>
            <div className='preview-menu'>
              <img
                width='50'
                height='50'
                src='https://img.icons8.com/3d-fluency/94/user-male-circle.png'
                alt='user-male-circle'
              />
              <div className='name-profession'>
                <p className='preview-fname'>
                  {userInfo.firstName + " " + userInfo.lastName}
                </p>
                <p style={{ fontSize: "0.7em" }}>{userInfo.profession}</p>
              </div>

              <div className='preview-contact-loc'>
                <p className='preview-label'>Contact</p>
                <p style={{ fontSize: "0.5em" }}>Phone: {userInfo.phone}</p>
                <p style={{ fontSize: "0.5em" }}>Email: {userInfo.email}</p>
                <p style={{ fontSize: "0.5em" }}>
                  {userInfo.city && userInfo.city + ", " + userInfo.country}
                </p>
              </div>
            </div>
            <div className='other-detail'>
              <div className='perview-summery'>
                <h2 className='preview-label first-label'>Summery</h2>
                <p>{summery.info}</p>
              </div>
              <div className='work-history'>
                <h2 className='preview-label'>Work History</h2>

                <div className='work-history-info'>
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
                    {educationInfo.collegeName &&
                      educationInfo.collegeName + ", "}
                    {educationInfo.collegeLocation}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
