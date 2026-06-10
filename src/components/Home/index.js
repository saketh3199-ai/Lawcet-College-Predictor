import {
  PageWrapper,
  ContentColumn,
  EmblemStrip,
  EmblemCircle,
  EmblemLabel,
  GoldRule,
  HeadingSection,
  MainHeading,
  SubText,
  RadioSection,
  RadioGroupLabel,
  RadioRow,
  RadioPill,
  RadioInput,
  RadioLabelText,
  RadioSubText,
  LinkedInBadge,
  LIIconBox,
  LIText,
  LIName,
  LISub,} from "./styledComponent";


import {useState,useEffect} from "react"

import PopUp from "../PopUp";

import { withRouter } from "react-router-dom";

import CasteDataContextObject from "../../context/CasteContext";

const Home = (props)=>
{

    const [PopStatus,setPopStatus] = useState(true)
    const [Timer,setTimer] = useState("02:59")


    useEffect
    (
       ()=>
       {

            const TimerId = setInterval
            (
                ()=>
                {
                    setTimer
                    (
                        (PT)=>
                        {
                             if (PT[0]+PT[1]==="00" && PT[3]+PT[4]==="01")
                            {
                                    clearInterval(TimerId)
                                    setPopStatus(false)
                            }
                            
                            
                            
                            if (PT[3]+PT[4]==="01")
                            {
                                let SecondsPart = "59"
                                let MinutesPart = parseInt(PT[0]+PT[1],10)-1
                                MinutesPart = "0"+MinutesPart
                                return MinutesPart+":"+SecondsPart
                            }

                            else
                            {
                                let UpdatedSecondsPart = parseInt(PT[3]+PT[4],10)-1

                                if (UpdatedSecondsPart<10)
                                {
                                    UpdatedSecondsPart = "0"+UpdatedSecondsPart
                                }

                                return PT[0]+PT[1]+":"+UpdatedSecondsPart
                            }

                           
                        }
                    )
                           
                },1000
            )
            
              return ()=>
                {
                    clearInterval(TimerId)
                }

           

       },[]

       
    )
  
   


    const HomeElementPageConsumer = 
    <CasteDataContextObject.Consumer>
        {
            (value)=>
            {
                const {DefineCourse} = value


                 const OnClickOkModifyPopStatus = ()=>
                {
                    setPopStatus(false)
                    
                }

                const renderDisclaimer = ()=>
                {
                    
                    
                

                    return <PopUp Timer={Timer} OnClickOkModifyPopStatus={OnClickOkModifyPopStatus} />
                }



                const OnClickThreeYearLLB = (event)=>
                {
                     DefineCourse(event.target.value)
                    console.log(event.target.value)
                    const {history} = props
                    history.push("/predict")
                   

                }


                const OnClickFiveYearLLB = (event)=>
                {
                    alert("For 5 years LLB, reserved/unreserved data is absent due to insufficient information. Please cross-check with other sources")
                    DefineCourse(event.target.value)
                    console.log(event.target.value)
                    const {history} = props
                    history.push("/predict")
                    
                }




                const HomeElementPage = 
                    <PageWrapper>
      <ContentColumn>

        {/* Emblem */}
        <EmblemStrip>
          <EmblemCircle>⚖️</EmblemCircle>
          <EmblemLabel>TS-LAWCET 2026 · Telangana</EmblemLabel>
        </EmblemStrip>

        <GoldRule />

        {/* Heading */}
        <HeadingSection>
          <MainHeading>
                Welcome to <em>my application.</em>
                <br />
                It will help you in getting a list of colleges that you can
                probably get a seat in if you are qualified in the{" "}
                <em>TS-LAWCET-2026</em> Examination.
          </MainHeading>
          
          
          
          <SubText>
                    Select your programme duration below to see projected college
                    options based on previous year cutoff data.
          </SubText>
        
        </HeadingSection>

        <GoldRule />

        {/* Radio group */}
        <RadioSection aria-labelledby="program-label">
                    <RadioGroupLabel id="program-label">
                        Select your programme
                    </RadioGroupLabel>
          
                    <RadioRow role="radiogroup">

                        <RadioPill htmlFor="radio-3yr">
                                <RadioInput type="radio" id="radio-3yr" name="programme" value="3 YEARS" onClick={OnClickThreeYearLLB}/>
                                <span>
                                    <RadioLabelText>3 Years LLB</RadioLabelText>
                                    <RadioSubText>After graduation</RadioSubText>
                                </span>
                        </RadioPill>

                        <RadioPill htmlFor="radio-5yr" > 
                            <RadioInput type="radio" id="radio-5yr" name="programme"  value="5 YEARS" onClick={OnClickFiveYearLLB}/>
                            <span>
                                <RadioLabelText>5 Years LLB</RadioLabelText>
                                <RadioSubText>After intermediate / 12th</RadioSubText>
                            </span>
                        </RadioPill>

                    </RadioRow>
        </RadioSection>

        {/* Disclaimer card */}
        {PopStatus&&renderDisclaimer()}
        

      </ContentColumn>

      {/* LinkedIn badge */}
      <LinkedInBadge href="https://www.linkedin.com/in/saketh-narwa-236aaa283" target="_blank" rel="noopener noreferrer" aria-label="Connect with Saketh Narwa on LinkedIn">
        
        <LIIconBox aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.447 20.452H17.01v-5.569c0-1.327-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.584V9h3.298v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a1.912 1.912 0 01-1.91-1.913 1.91 1.91 0 111.91 1.913zm1.648 13.019H3.686V9h3.299v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </LIIconBox>
        <LIText>
          <LIName>Saketh Narwa</LIName>
          <LISub>LinkedIn profile</LISub>
        </LIText>
      
      </LinkedInBadge>

                    </PageWrapper>


                return HomeElementPage
            }
        }

    </CasteDataContextObject.Consumer>


    return HomeElementPageConsumer

}

export default withRouter(Home)