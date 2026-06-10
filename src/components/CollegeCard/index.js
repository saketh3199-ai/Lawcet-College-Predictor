import { Card, CollegeName, InfoRow, Label, Value } from "../ResultsPage/styledComponent";
import CasteDataContextObject from "../../context/CasteContext";


const CollegeCard = ({ CollegeObject }) => (
  <CasteDataContextObject.Consumer>

    {
      (value)=>
      {
        const {Course} = value
        const CollegeCardElement =
        <Card>
    <CollegeName>{CollegeObject.College}</CollegeName>
    <InfoRow>
      <Label>Caste:</Label>
      <Value>{CollegeObject.Caste}</Value>
    </InfoRow>
    {Course==="5 YEARS"&&<InfoRow>
      <Label>Course:</Label>
      <Value>{CollegeObject.Course}</Value>
    </InfoRow>}
    <InfoRow>
      <Label>Rank Range:</Label>
      <Value>
        {CollegeObject["Opening Rank"]} – {CollegeObject["Closing Rank"]}
      </Value>
    </InfoRow>
        </Card>

        return CollegeCardElement
      }
    }
  </CasteDataContextObject.Consumer>
  
);

export default CollegeCard;