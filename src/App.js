import Predictor from "./components/Predictor"
import ResultsPage from "./components/ResultsPage"
import {Switch,Route} from "react-router-dom"
import CasteDataContextObject from "./context/CasteContext"
import { useState } from "react"
import ProtectedRoute from "./components/ProtectedRoute"
const App = ()=>
{
  const [CollegeArray,SetCollegeArray] = useState([])


  const DefineCollegeList = (CollegeList)=>
  {
    SetCollegeArray
    (
      (PreviousStateArray)=>
      {
        return [...CollegeList]
      }
    )

  }


  const AppPage =
  <CasteDataContextObject.Provider value={{DefineCollegeList:DefineCollegeList,CollegeArray:CollegeArray}}>
    <Switch>
      <Route exact path="/" component={Predictor} />
      <ProtectedRoute exact path="/results" component={ResultsPage} />
    </Switch>
  </CasteDataContextObject.Provider>
    

  return AppPage
}

export default App