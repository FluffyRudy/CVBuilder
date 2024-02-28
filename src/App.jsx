import { useState } from "react";
import PersonalInfo from "./components/PersonalInfo";
import WorkHistory from "./components/WorkHistory";
import EducationInfo from "./components/EducationInfo";
import data from "./defaultProps/props";
import "./App.css";

function App() {
  const [activeComponent, setActiveComponent] = useState("PersonalInfo");
  const [userInfo, setUserInfo] = useState(data.personalInfo);
  const [workInfo, setWorkinfo] = useState(data.workInfo);

  function handleInputChange(e, setState) {
    const { name, value } = e.target;
    setState((prevValue) => ({ ...prevValue, [name]: value }));
  }

  const renderComponent = () => {
    switch (activeComponent) {
      case "PersonalInfo":
        return (
          <PersonalInfo onChange={(e) => handleInputChange(e, setUserInfo)} />
        );
      case "WorkHistory":
        return (
          <WorkHistory onChange={(e) => handleInputChange(e, setWorkinfo)} />
        );
      case "EducationInfo":
        return <EducationInfo />;
      default:
        <PersonalInfo onChange={(e) => handleInputChange(e, setUserInfo)} />;
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
              <p className='preview-fname'>
                {userInfo.firstName + " " + userInfo.lastName}
              </p>
              <div className='preview-contact'>
                <p className='preview-label'>Contact</p>
                <p style={{ fontSize: "0.5em" }}>Phone: {userInfo.phone}</p>
                <p style={{ fontSize: "0.5em" }}>Email: {userInfo.email}</p>
              </div>
            </div>
            <div className='other-detail'>
              <p>Summery</p>
              <div className='work-history'>
                <hr />
                <p>Work History</p>
                <hr />
                <div className='work-history-info'>
                  <div className='date'>
                    <p>{workInfo.startDate && workInfo.startDate + "-"}</p>
                    <p>{workInfo.endDate}</p>
                  </div>
                  <div className='company-employee'>
                    <p>{workInfo.jobTitle}</p>
                    <p>
                      {workInfo.employer + ", "}
                      {workInfo.jobLocation && workInfo.jobLocation}{" "}
                    </p>
                  </div>
                </div>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
