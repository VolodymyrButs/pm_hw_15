import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./index.css";
import ContextProvider from "./contextProvider";
import FormPersonal from "./pages/PersonalPage";
import JobsPage from "./pages/JobsPage";
import StudyPage from "./pages/StudyPage";
import ResumePage from "./pages/ResumePage";

const App = () => {
  const [formStep, setFormStep] = useState(0);

  return (
    <React.StrictMode>
      <ContextProvider>
        {formStep === 0 && <FormPersonal setFormStep={setFormStep} />}
        {formStep === 1 && <JobsPage setFormStep={setFormStep} />}
        {formStep === 2 && <StudyPage setFormStep={setFormStep} />}
        {formStep === 3 && <ResumePage setFormStep={setFormStep} />}
      </ContextProvider>
    </React.StrictMode>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
// {/* <Route path="/form_study" children={<FormStudy />} /> */}
//    {/* <Route path="/resume" children={<Resume />} /> */}
