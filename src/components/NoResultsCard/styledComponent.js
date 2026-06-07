import styled from "styled-components";

export const NoResultsCard = styled.div`
  margin-top: 3rem;
  padding: 2rem;
  max-width: 600px;
  width: 100%;

  background: rgba(20, 15, 8, 0.9);
  border: 1px solid rgba(200, 168, 75, 0.25);
  border-radius: 10px;

  text-align: center;

  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
`;

export const NoResultsTitle = styled.h2`
  font-size: 1.2rem;
  color: #f5e6b8;
  margin: 0;
`;

export const NoResultsText = styled.p`
  font-size: 0.9rem;
  color: rgba(240, 234, 214, 0.75);
  line-height: 1.5;
  margin: 0;
`;