import styled from "styled-components";

export const PageWrap = styled.div`
  min-height: 100vh;
  padding: 2rem 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  color: #f0ead6;
  font-family: "EB Garamond", serif;

  background:
    linear-gradient(
      160deg,
      rgba(10,7,5,0.88),
      rgba(20,14,8,0.80),
      rgba(10,7,5,0.92)
    ),
    url("https://images.unsplash.com/photo-1589994965851-a8f479c573a9?auto=format&fit=crop&w=1600&q=80")
      center / cover no-repeat;
`;

/* HEADER WRAP */
export const Header = styled.div`
  width: 100%;
  max-width: 1100px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  gap: 1rem;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
`;

export const Heading = styled.h1`
  font-size: clamp(1.2rem, 3.5vw, 2rem);
  color: #e8cc78;
  margin: 0;
  line-height: 1.3;
`;

export const GoBackButton = styled.button`
  padding: 0.7rem 1rem;

  background: rgba(200, 168, 75, 0.12);
  border: 1px solid rgba(200, 168, 75, 0.4);
  border-radius: 10px;

  color: #f5e6b8;
  font-size: 0.9rem;

  cursor: pointer;

  transition: all 0.25s ease;

  display: flex;
  align-items: center;
  gap: 6px;

  white-space: nowrap;

  &:hover {
    background: rgba(200, 168, 75, 0.25);
    transform: translateY(-2px);
  }

  &:active {
    transform: scale(0.98);
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;

/* GRID */
export const CardsGrid = styled.div`
  width: 100%;
  max-width: 1100px;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1rem;
`;

/* CARD (your existing one kept stable) */
export const Card = styled.div`
  background: rgba(20, 15, 8, 0.85);
  border: 1px solid rgba(200, 168, 75, 0.25);
  padding: 1.2rem;
  border-radius: 10px;

  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);

  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-4px);
  }
`;

export const CollegeName = styled.h2`
  font-size: 1.1rem;
  color: #f5e6b8;
  margin-bottom: 0.8rem;
`;

export const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0.3rem 0;
`;

export const Label = styled.span`
  color: #b8a882;
  font-size: 0.85rem;
`;

export const Value = styled.span`
  color: #f0ead6;
  font-size: 0.9rem;
`;