import React from "react";

const CasteDataContextObject = React.createContext
(
  {
    DefineCollegeList: () => {},
    CollegeArray: [],
    Course:"",
    DefineCourse:()=>{}


  }
);

export default CasteDataContextObject;