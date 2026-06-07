import { Card,CollegeName,InfoRow,Label,Value } from "../ResultsPage/styledComponent"

const CollegeCard = (props)=>
{
    const {CollegeObject} = props

    const CollegeCardElement = 
     <Card>
            <CollegeName>{CollegeObject.College}</CollegeName>
                                    
                <InfoRow>
                        <Label>Caste:</Label>
                        <Value>{CollegeObject.Caste}</Value>
                </InfoRow>
                <InfoRow>
                        <Label>Rank Range:</Label>
                        <Value>{CollegeObject["Opening Rank"]} - {CollegeObject["Closing Rank"]}</Value>
                </InfoRow>
        </Card>
    

    return CollegeCardElement
}

export default CollegeCard