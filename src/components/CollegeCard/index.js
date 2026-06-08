import { Card, CollegeName, InfoRow, Label, Value } from "../ResultsPage/styledComponent";

const CollegeCard = ({ CollegeObject }) => (
  <Card>
    <CollegeName>{CollegeObject.College}</CollegeName>
    <InfoRow>
      <Label>Caste:</Label>
      <Value>{CollegeObject.Caste}</Value>
    </InfoRow>
    <InfoRow>
      <Label>Rank Range:</Label>
      <Value>
        {CollegeObject["Opening Rank"]} – {CollegeObject["Closing Rank"]}
      </Value>
    </InfoRow>
  </Card>
);

export default CollegeCard;