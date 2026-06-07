import React from "react";
import {
  HeroWrap,
  ScalesRow,
  Gavel,
  Title,
  Divider,
  Subtitle,
  Card,
  FieldGroup,
  Label,
  Select,
  Input,
  RadioGroup,
  RadioLabel,
  RadioGroupLabel,
  Button,
  DisclaimerBar,
  DisclaimerText,
} from "./styledComponent";
import { useState } from "react";
import {withRouter} from "react-router-dom"
import { Three_Year_Reserved_Array,Three_Year_Unreserved_Array } from "../../utils";
import CasteDataContextObject from "../../context/CasteContext";
import Cookie from "js-cookie"

const CasteList = [{id:"Open",text:"OPEN"},{id:"EWS",text:"EWS"},{id:"OBC",text:"OBC"},{id:"SC",text:"SC"},{id:"ST",text:"ST"}]

const Predictor = (props)=>
{

    const [CasteOfUser,SetCaste] = useState("")
    const [RankOfUser,SetRank] = useState(0)
    const [Status,SetStatus] = useState("")

    
    
    
    
    
    
    const PredictorPageConsumer = 
    <CasteDataContextObject.Consumer>
        {
            (value)=>
            {
                const {DefineCollegeList} = value


                 const OnSelectCaste = (event)=>
    {
        const OptionSelectedByUser = event.target.value
        SetCaste(OptionSelectedByUser)
                 }


                // console.log(CasteOfUser)
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    











                const RegisterTheUserRank = (event)=>
    {
        const RankEnteredByUser = event.target.value
        SetRank(RankEnteredByUser)
                }







    





























                const OnSelectReserved = (event)=>
    {
        const SelectOptionByUser = event.target.value
        SetStatus(SelectOptionByUser)
                }





    
    
    
    
    
    





















                    const OnSelectUnreserved = (event)=>
    {
        const UnreservedSelected = event.target.value
        SetStatus(UnreservedSelected)
                    }





















                        const OnClickGetClgListBtn = ()=>
                        {
                            //THE BELOW CONDITION ENSURES WHEN BUTTON IS CLICKED, THE USEFUL FUNCTIONALITY OCCURS ONLY WHEN REQUIRED FIELDS ARE SELECTED
                            if (CasteOfUser!=="" && RankOfUser!==0 && Status !== "" )
                            {
                                Cookie.set("JWT_TOKEN", 1000, {expires:7,path:"/"})
                                const {history} = props
                                //THE BELOW CONDITION DECIDES WHETHER TO USE RESERVED ARRAY OR UNRESERVED ARRAY
                                if (Status === "RESERVED")
                                {
                                    const CuratedCollegeList = Three_Year_Reserved_Array.filter
                                    (
                                        (CollegeObject)=>
                                        {
                                            if (CollegeObject.Caste===CasteOfUser && (CollegeObject["Opening Rank"]<=RankOfUser && CollegeObject["Closing Rank"]>=RankOfUser) )
                                            {
                                                return CollegeObject
                                            }
                                        }
                                    )
                                    DefineCollegeList(CuratedCollegeList)
                                    history.push("/results")
                                }
                                
                                else 
                                {
                                    const CuratedCollegeList = Three_Year_Unreserved_Array.filter
                                    (
                                        (CollegeObject)=>
                                        {
                                            if (CollegeObject.Caste===CasteOfUser && (CollegeObject["Opening Rank"]<=RankOfUser && CollegeObject["Closing Rank"]>=RankOfUser) )
                                            {
                                                return CollegeObject
                                            }
                                        }
                                    )

                                    DefineCollegeList(CuratedCollegeList)
                                    history.push("/results")
                                }
                                
                                


                            }
                        }













    
    
    
    
    
    
    
    
    
    
    


    

















































                
                    const PredictorPage = 
                    <>
                <HeroWrap>
                    <ScalesRow aria-hidden="true">⚖️</ScalesRow>
            
                    <Gavel aria-hidden="true">⚖️</Gavel>
            
                    <Title>Get a List of Colleges Basing on Your TS LAWCET Score for 3 YEARS LLB ONLY</Title>
                    <Divider />
                    <Subtitle>Telangana State Law Common Entrance Test — College Finder</Subtitle>
            
                    <Card>
                    <FieldGroup>
                        <Label htmlFor="caste">Caste Category</Label>
                        <Select id="caste" name="caste" onChange={OnSelectCaste} value={CasteOfUser}>
                        <option value="" disabled>Select your category</option>
                        {
                            CasteList.map
                            (
                                (OptionObject)=>
                                {
                                    return <option key={OptionObject.id} value={OptionObject.id}>{OptionObject.text}</option>
                                }
                            )
                        }
                        
                        </Select>
                    </FieldGroup>
            
                    <FieldGroup>
                        <Label htmlFor="rank">Your LAWCET Rank</Label>
                        <Input id="rank" name="rank" type="text" placeholder="e.g. 4250" autoComplete="off" onChange={RegisterTheUserRank} value={RankOfUser}/>
                    </FieldGroup>

                    


            
                    <FieldGroup>
                        <Label as="p">Reservation Status</Label>
                        <RadioGroupLabel>Select whether you are Reserved or Unreserved</RadioGroupLabel>
                        <RadioGroup>
                        <RadioLabel>
                            <input type="radio" name="reservation" value="RESERVED" onClick={OnSelectReserved}/>
                            Reserved
                        </RadioLabel>
                        <RadioLabel>
                            <input type="radio" name="reservation" value="UNRESERVED" onClick={OnSelectUnreserved} />
                            Unreserved
                        </RadioLabel>
                        </RadioGroup>
                    </FieldGroup>
            
                    <Button type="button" onClick={OnClickGetClgListBtn}>Get College List</Button>
                    </Card>
                </HeroWrap>
            
                <DisclaimerBar>
                    <DisclaimerText>
                    <strong>⚠ Disclaimer:</strong> I do not guarantee the accuracy of the data. This is an
                    approximation only. You need to cross-verify from other sources for an accurate list.{" "}
                    <strong>You can only get approximate college lists from this website</strong> as we are
                    having difficulties to get our hands on good data.
                    Visit the following Link to get a more detailed information about cut-off trends and ranks :
                    <a href="https://law.careers360.com/articles/ts-lawcet-rank-wise-college-list" >Find More</a>
                    </DisclaimerText>
                </DisclaimerBar>
                    </>

                    return PredictorPage
            }
        }
    </CasteDataContextObject.Consumer>

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
   

    return PredictorPageConsumer
}

export default withRouter(Predictor)