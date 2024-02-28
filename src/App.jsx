import { useState } from "react";
import PersonalInfo from "./components/PersonalInfo";
import WorkHistory from "./components/WorkHistory";
import EducationInfo from "./components/EducationInfo";
import "./App.css";

function App() {
  const [activeComponent, setActiveComponent] = useState("PersonalInfo");
  const renderComponent = () => {
    switch (activeComponent) {
      case "PersonalInfo":
        return <PersonalInfo />;
      case "WorkHistory":
        return <WorkHistory />;
      case "EducationInfo":
        return <EducationInfo />;
      default:
        <PersonalInfo />;
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
        <div className='profile'>
          <img
            width='94'
            height='94'
            src='https://img.icons8.com/3d-fluency/94/user-male-circle.png'
            alt='user-male-circle'
          />
          <button>Upload</button>
        </div>
        <div className='form'>
          <div className='dataform'>{renderComponent()}</div>
        </div>
        <div className='preview'>
          <div className='preview-box'></div>
        </div>
      </main>
    </>
  );
}

export default App;
