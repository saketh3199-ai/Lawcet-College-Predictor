import Predictor from "./components/Predictor";
import ResultsPage from "./components/ResultsPage";
import Home from "./components/Home";
import { Switch, Route } from "react-router-dom";
import CasteDataContextObject from "./context/CasteContext";
import { useState } from "react";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => 
{
  const [CollegeArray, SetCollegeArray] = useState([]);
  const [Course,SetCourse] = useState("")



  const DefineCollegeList = (CollegeList) => 
  {
    SetCollegeArray(() => [...CollegeList]);
  }


  const DefineCourse = (CourseDuration)=>
  {
    SetCourse(CourseDuration)
  }




  return (
    <CasteDataContextObject.Provider value={{ DefineCollegeList, CollegeArray,Course,DefineCourse:DefineCourse }}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path='/predict' component={Predictor} />
        <ProtectedRoute exact path="/results" component={ResultsPage} />
      </Switch>
    </CasteDataContextObject.Provider>
  );
}

export default App;