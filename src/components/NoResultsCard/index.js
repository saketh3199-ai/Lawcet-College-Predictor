import { NoResultsCard, NoResultsTitle, NoResultsText } from "./styledComponent";

const NoResultCard = () => (
  <NoResultsCard>
    <NoResultsTitle>No colleges were found</NoResultsTitle>
    <NoResultsText>
      Try with different data. The website is under construction so more college
      data may be added soon — check back later.
    </NoResultsText>
  </NoResultsCard>
);

export default NoResultCard;