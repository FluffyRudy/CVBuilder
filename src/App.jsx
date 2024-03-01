import { useState } from "react";
import PersonalInfo from "./components/PersonalInfo.jsx";
import WorkHistory from "./components/WorkHistory.jsx";
import EducationInfo from "./components/EducationInfo.jsx";
import Summery from "./components/summery.jsx";
import Preview from "./components/preview.jsx";
import data from "./defaultProps/props.js";
import "./App.css";
import "./styles/variables.css";

function App() {
  const [activeComponent, setActiveComponent] = useState("PersonalInfo");
  const [userInfo, setUserInfo] = useState({ ...data.personalInfo });
  const [workInfo, setWorkinfo] = useState({ ...data.workInfo });
  const [educationInfo, setEducationInfo] = useState({ ...data.educationInfo });
  const [summery, setSummery] = useState({ ...data.summeryInfo });
  const [profilePicture, setProfilePicture] = useState(
    "https://img.icons8.com/3d-fluency/94/user-male-circle.png"
  );
  const [previewVisibility, setPreviewVisibility] = useState(false);

  function handleInputChange(e, setState) {
    const { name, value } = e.target;
    setState((prevValue) => ({ ...prevValue, [name]: value }));
  }

  function handleActiveComponent(currentComponent) {
    setActiveComponent(currentComponent);
  }

  const renderComponent = () => {
    switch (activeComponent) {
      case "PersonalInfo":
        return (
          <PersonalInfo
            profilePic={profilePicture}
            setProfilePicture={setProfilePicture}
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
          profilePic={profilePicture}
          setProfilePicture={setProfilePicture}
          dataProps={userInfo}
          onChange={(e) => handleInputChange(e, setUserInfo)}
        />;
    }
  };

  return (
    <div className='main-container'>
      <div className='menus'>
        <div className='logo'>
          <h1>R U D Y</h1>
        </div>
        <button onClick={() => handleActiveComponent("PersonalInfo")}>
          <span className='circ-lrgtext'>1</span> Heading
        </button>

        <button onClick={() => handleActiveComponent("WorkHistory")}>
          <span className='circ-lrgtext'>2</span> Work History
        </button>

        <button onClick={() => handleActiveComponent("EducationInfo")}>
          <span className='circ-lrgtext'>3</span> Education
        </button>

        <button onClick={() => handleActiveComponent("Summery")}>
          <span className='circ-lrgtext'>4</span> Summery
        </button>

        <button
          className='preview-toggler'
          onClick={() => setPreviewVisibility(!previewVisibility)}>
          Preview
        </button>
      </div>
      <div className='content'>
        <div className='form'>
          <div className='dataform'>{renderComponent()}</div>

          {previewVisibility && (
            <Preview
              userInfo={userInfo}
              workInfo={workInfo}
              educationInfo={educationInfo}
              summery={summery}
              profilePicture={profilePicture}
              setPreviewVisibility={setPreviewVisibility}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
