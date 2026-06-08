import styled from "styled-components";

export const NoResultsCard = styled.div`
  margin-top: 3rem;
  padding: 2rem 1.5rem;
  max-width: 580px;
  width: 100%;

  background: rgba(20, 15, 8, 0.92);
  border: 1px solid rgba(200, 168, 75, 0.22);
  border-radius: 10px;
  text-align: center;

  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  box-shadow: 0 10px 30px rgba(0,0,0,0.5);

  @media (max-width: 480px) {
    margin-top: 2rem;
    padding: 1.5rem 1.1rem;
    border-radius: 8px;
  }
`;

export const NoResultsTitle = styled.h2`
  font-family: "Playfair Display", Georgia, serif;
  font-size: 1.15rem;
  color: #f5e6b8;
  margin: 0;

  @media (max-width: 480px) {
    font-size: 1.05rem;
  }
`;

export const NoResultsText = styled.p`
  font-family: "EB Garamond", Georgia, serif;
  font-size: 0.92rem;
  color: rgba(240, 234, 214, 0.72);
  line-height: 1.55;
  margin: 0;

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;