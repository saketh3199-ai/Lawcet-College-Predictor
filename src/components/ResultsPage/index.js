import React from "react";
import { withRouter } from "react-router-dom";
import Cookie from "js-cookie";

import {
  PageWrap,
  Header,
  Heading,
  CardsGrid,
  GoBackButton,
} from "./styledComponent";

import CasteDataContextObject from "../../context/CasteContext";
import CollegeCard from "../CollegeCard";
import NoResultCard from "../NoResultsCard";

const ResultsPage = (props) => {
  const OnClickTryAnotherSearch = () => {
    Cookie.remove("JWT_TOKEN");
    props.history.push("/predict");
  };

  return (
    <CasteDataContextObject.Consumer>
      {({ CollegeArray }) => (
        <PageWrap>
          <Header>
            <Heading>Colleges you are likely to get admission in</Heading>
            <GoBackButton onClick={OnClickTryAnotherSearch}>
              ← Go back to search
            </GoBackButton>
          </Header>

          <CardsGrid>
            {CollegeArray.length === 0
              ? <NoResultCard />
              : CollegeArray.map((CollegeObject, index) => (
                  <CollegeCard key={index} CollegeObject={CollegeObject} />
                ))}
          </CardsGrid>
        </PageWrap>
      )}
    </CasteDataContextObject.Consumer>
  );
};

export default withRouter(ResultsPage);