import { NoResultsCard,NoResultsTitle,NoResultsText } from "./styledComponent"

const NoResultCard = ()=>
{
    const NoResultCardElement = 
    <NoResultsCard>
  <NoResultsTitle>No colleges were found</NoResultsTitle>

  <NoResultsText>
    You can try with different data. Also, the website is under construction so more college
    data might be added soon. Check back at a different time.
  </NoResultsText>
    </NoResultsCard>

    return NoResultCardElement
}


export default NoResultCard