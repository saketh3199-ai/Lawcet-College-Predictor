import React from "react";
import {
  PageWrap,
  Header,
  Heading,
  CardsGrid,
  GoBackButton
} from "./styledComponent";

import CasteDataContextObject from "../../context/CasteContext";
import CollegeCard from "../CollegeCard";
import NoResultCard from "../NoResultsCard";
import { withRouter } from "react-router-dom";
import Cookie from "js-cookie"

const ResultsPage = (props) => {
  const OnClickTryAnotherSearch = () => {
    props.history.push("/");
    Cookie.remove("JWT_TOKEN")
  };

  return (
    <CasteDataContextObject.Consumer>
      {(value) => {
        const { CollegeArray } = value;

        return (
          <PageWrap>

            {/* HEADER */}
            <Header>
              <Heading>
                Colleges you are likely to get admission in
              </Heading>

              <GoBackButton onClick={OnClickTryAnotherSearch}>
                ← Go back to search
              </GoBackButton>
            </Header>

            {/* CONTENT */}
            <CardsGrid>
              {CollegeArray.length === 0
                ? <NoResultCard />
                : CollegeArray.map((CollegeObject, index) => (
                    <CollegeCard
                      key={index}
                      CollegeObject={CollegeObject}
                    />
                  ))}
            </CardsGrid>

          </PageWrap>
        );
      }}
    </CasteDataContextObject.Consumer>
  );
};

export default withRouter(ResultsPage);