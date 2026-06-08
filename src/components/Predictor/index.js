import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import Cookie from "js-cookie";

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
  DisclaimerCloseButton
} from "./styledComponent";

import { Three_Year_Reserved_Array, Three_Year_Unreserved_Array } from "../../utils";
import CasteDataContextObject from "../../context/CasteContext";

const CasteList = [
  { id: "Open", text: "OPEN" },
  { id: "EWS",  text: "EWS"  },
  { id: "OBC",  text: "OBC"  },
  { id: "SC",   text: "SC"   },
  { id: "ST",   text: "ST"   },
];

const Predictor = (props) => {
  const [CasteOfUser, SetCaste]   = useState("");
  const [RankOfUser,  SetRank]    = useState(0);
  const [Status,      SetStatus]  = useState("");
  const [CloseDisclaimerClicked,SetDCStatus] = useState(false)
  return (
    <CasteDataContextObject.Consumer>
      {({ DefineCollegeList }) => {
        const OnSelectCaste    = (e) => SetCaste(e.target.value);
        const RegisterUserRank = (e) => SetRank(e.target.value);
        const OnSelectStatus   = (e) => SetStatus(e.target.value);

        const OnClickGetClgListBtn = () => {
          if (CasteOfUser !== "" && RankOfUser !== 0 && Status !== "") {
            Cookie.set("JWT_TOKEN", 1000, { expires: 7, path: "/" });

            const dataArray =
              Status === "RESERVED"
                ? Three_Year_Reserved_Array
                : Three_Year_Unreserved_Array;

            const CuratedCollegeList = dataArray.filter(
              (c) =>
                c.Caste === CasteOfUser &&
                c["Opening Rank"] <= RankOfUser &&
                c["Closing Rank"] >= RankOfUser
            );

            DefineCollegeList(CuratedCollegeList);
            props.history.push("/results");
          }
        };

        const OnClickCloseDisclaimer = ()=>
        {
            SetDCStatus(true)
        }

        return (
          <>
            <HeroWrap>
              <ScalesRow aria-hidden="true">⚖️</ScalesRow>
              <Gavel aria-hidden="true">⚖️</Gavel>

              <Title>
                Get a List of Colleges Basing on Your TS LAWCET Score for 3 YEARS LLB ONLY
              </Title>
              <Divider />
              <Subtitle>Telangana State Law Common Entrance Test — College Finder</Subtitle>

              <Card>
                {/* CASTE */}
                <FieldGroup>
                  <Label htmlFor="caste">Caste Category</Label>
                  <Select
                    id="caste"
                    name="caste"
                    onChange={OnSelectCaste}
                    value={CasteOfUser}
                  >
                    <option value="" disabled>Select your category</option>
                    {CasteList.map((opt) => (
                      <option key={opt.id} value={opt.id}>{opt.text}</option>
                    ))}
                  </Select>
                </FieldGroup>

                {/* RANK */}
                <FieldGroup>
                  <Label htmlFor="rank">Your LAWCET Rank</Label>
                  <Input
                    id="rank"
                    name="rank"
                    type="number"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    placeholder="e.g. 4250"
                    autoComplete="off"
                    onChange={RegisterUserRank}
                    value={RankOfUser === 0 ? "" : RankOfUser}
                  />
                </FieldGroup>

                {/* RESERVATION */}
                <FieldGroup>
                  <Label as="p">Reservation Status</Label>
                  <RadioGroupLabel>Select whether you are Reserved or Unreserved</RadioGroupLabel>
                  <RadioGroup>
                    <RadioLabel>
                      <input
                        type="radio"
                        name="reservation"
                        value="RESERVED"
                        onChange={OnSelectStatus}
                        checked={Status === "RESERVED"}
                      />
                      Reserved
                    </RadioLabel>
                    <RadioLabel>
                      <input
                        type="radio"
                        name="reservation"
                        value="UNRESERVED"
                        onChange={OnSelectStatus}
                        checked={Status === "UNRESERVED"}
                      />
                      Unreserved
                    </RadioLabel>
                  </RadioGroup>
                </FieldGroup>

                <Button type="button" onClick={OnClickGetClgListBtn}>
                  Get College List
                </Button>
              </Card>
            </HeroWrap>

            {!CloseDisclaimerClicked&&  <DisclaimerBar>
              <DisclaimerText>
                <strong>⚠ Disclaimer:</strong> I do not guarantee the accuracy of the data.
                This is an approximation only. Cross-verify from other sources for an accurate
                list. <strong>You can only get approximate college lists from this website</strong>{" "}
                as we are having difficulties getting our hands on good data. Visit the following
                link for more detailed cut-off trends:{" "}
                <a
                  href="https://law.careers360.com/articles/ts-lawcet-rank-wise-college-list"
                  target="_blank"
                  rel="noreferrer"
                >
                  Find More
                </a>
              </DisclaimerText>
               <DisclaimerCloseButton type="button" onClick={OnClickCloseDisclaimer}>
                  Close Disclaimer
                </DisclaimerCloseButton>
            </DisclaimerBar>}
          
          </>
        );
      }}
    </CasteDataContextObject.Consumer>
  );
};

export default withRouter(Predictor);