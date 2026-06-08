import styled from "styled-components";

/* ─── PAGE WRAPPER ─────────────────────────────────────────────────────────── */
export const PageWrap = styled.div`
  min-height: 100vh;
  min-height: 100dvh;
  padding: 2rem 1.25rem 3rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  color: #f0ead6;
  font-family: "EB Garamond", serif;

  background:
    linear-gradient(
      160deg,
      rgba(10,7,5,0.90),
      rgba(20,14,8,0.82),
      rgba(10,7,5,0.94)
    ),
    url("https://images.unsplash.com/photo-1589994965851-a8f479c573a9?auto=format&fit=crop&w=1600&q=80")
      center / cover no-repeat;

  @media (max-width: 768px) {
    padding: 1.5rem 1rem 2.5rem;
    background-attachment: scroll;
  }

  @media (max-width: 480px) {
    padding: 1.25rem 0.75rem 2rem;
  }
`;

/* ─── HEADER ROW ───────────────────────────────────────────────────────────── */
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
    align-items: flex-start;
    gap: 0.75rem;
    margin-bottom: 1.25rem;
  }

  @media (max-width: 480px) {
    gap: 0.6rem;
    margin-bottom: 1rem;
  }
`;

export const Heading = styled.h1`
  font-family: "Playfair Display", Georgia, serif;
  font-size: clamp(1.1rem, 3.5vw, 2rem);
  color: #e8cc78;
  margin: 0;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: clamp(1rem, 5vw, 1.4rem);
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const GoBackButton = styled.button`
  padding: 0.65rem 1.1rem;
  background: rgba(200, 168, 75, 0.1);
  border: 1px solid rgba(200, 168, 75, 0.38);
  border-radius: 6px;
  color: #f5e6b8;
  font-family: "EB Garamond", Georgia, serif;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background 0.22s, transform 0.18s;
  display: flex;
  align-items: center;
  gap: 6px;
  white-space: nowrap;
  flex-shrink: 0;
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
  min-height: 44px; /* accessible tap target */

  &:hover {
    background: rgba(200, 168, 75, 0.22);
    transform: translateY(-2px);
  }

  &:active { transform: scale(0.98); }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    font-size: 0.88rem;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
    padding: 0.6rem 1rem;
  }
`;

/* ─── CARDS GRID ───────────────────────────────────────────────────────────── */
export const CardsGrid = styled.div`
  width: 100%;
  max-width: 1100px;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }
`;

/* ─── COLLEGE CARD ─────────────────────────────────────────────────────────── */
export const Card = styled.div`
  background: rgba(20, 15, 8, 0.88);
  border: 1px solid rgba(200, 168, 75, 0.22);
  padding: 1.2rem 1.3rem;
  border-radius: 8px;
  box-shadow: 0 8px 28px rgba(0,0,0,0.4);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 14px 36px rgba(0,0,0,0.5);
  }

  @media (max-width: 480px) {
    padding: 1rem 1.1rem;
    border-radius: 6px;

    /* no hover lift on touch — feels laggy */
    &:hover { transform: none; }
  }
`;

export const CollegeName = styled.h2`
  font-family: "Playfair Display", Georgia, serif;
  font-size: clamp(0.95rem, 2.5vw, 1.1rem);
  color: #f5e6b8;
  margin: 0 0 0.8rem 0;
  line-height: 1.3;

  @media (max-width: 480px) {
    font-size: 0.95rem;
    margin-bottom: 0.65rem;
  }
`;

export const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 0.5rem;
  margin: 0.3rem 0;

  @media (max-width: 360px) {
    flex-direction: column;
    gap: 0.1rem;
    margin: 0.4rem 0;
  }
`;

export const Label = styled.span`
  color: #b8a882;
  font-size: 0.85rem;
  flex-shrink: 0;

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

export const Value = styled.span`
  color: #f0ead6;
  font-size: 0.9rem;
  text-align: right;

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }

  @media (max-width: 360px) {
    text-align: left;
  }
`;