import React, { useReducer } from "react";
export const myContext = React.createContext();

const initState = {
  personal: { firstName: "", lastName: "", phone: "", email: "" },
  jobs: [
    {
      name: "",
      position: "",
      startDate: "",
      finishDate: "",
    },
  ],
  study: [
    {
      name: "",
      specialty: "",
      startDate: "",
      finishDate: "",
    },
  ],
};
const ContextProvider = (props) => {
  function reducer(state, action) {
    switch (action.type) {
      case "addPersonal":
        return {
          ...state,
          personal: action.data,
        };
      case "addJobs":
        return {
          ...state,
          jobs: action.data,
        };
      case "addStudy":
        return {
          ...state,
          study: action.data,
        };
      default:
        throw new Error();
    }
  }
  const [formData, dispatch] = useReducer(reducer, initState);

  return (
    <myContext.Provider
      value={{
        formData,
        dispatch,
      }}
    >
      {props.children}
    </myContext.Provider>
  );
};

export default ContextProvider;
