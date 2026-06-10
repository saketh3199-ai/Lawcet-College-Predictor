    import styled, { keyframes } from "styled-components";

/* ─── Keyframes ───────────────────────────────────────────── */
export const fadeDown = keyframes`
  from { opacity: 0; transform: translateY(-18px); }
  to   { opacity: 1; transform: translateY(0); }
`;

export const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(18px); }
  to   { opacity: 1; transform: translateY(0); }
`;

/* ─── Page shell ──────────────────────────────────────────── */
export const PageWrapper = styled.div`
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  font-family: 'Inter', sans-serif;

  background-color: #0d1b2a;
  background-image:
    radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.72) 100%),
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Crect width='120' height='120' fill='%230d1b2a'/%3E%3Ccircle cx='60' cy='60' r='38' fill='none' stroke='%23c9a84c' stroke-width='0.4' stroke-dasharray='4 6' opacity='0.18'/%3E%3Cpath d='M40 60 Q60 34 80 60 Q60 86 40 60Z' fill='none' stroke='%23c9a84c' stroke-width='0.35' opacity='0.12'/%3E%3Cline x1='60' y1='22' x2='60' y2='98' stroke='%23c9a84c' stroke-width='0.3' opacity='0.1'/%3E%3Cline x1='22' y1='60' x2='98' y2='60' stroke='%23c9a84c' stroke-width='0.3' opacity='0.1'/%3E%3C/svg%3E");
  background-size: cover, 120px 120px;
  background-attachment: fixed, fixed;

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

export const ContentColumn = styled.main`
  width: 100%;
  max-width: 780px;
  padding: 56px 32px 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  @media (max-width: 600px) {
    padding: 36px 18px 100px;
    gap: 28px;
  }
`;

/* ─── Emblem strip ────────────────────────────────────────── */
export const EmblemStrip = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  animation: ${fadeDown} 0.7s ease both;
`;

export const EmblemCircle = styled.div`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  border: 2px solid #c9a84c;
  background: rgba(201, 168, 76, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;

  @media (max-width: 600px) {
    width: 56px;
    height: 56px;
    font-size: 24px;
  }
`;

export const EmblemLabel = styled.p`
  font-size: 11px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: #c9a84c;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 9px;
    letter-spacing: 0.14em;
  }
`;

/* ─── Gold divider ────────────────────────────────────────── */
export const GoldRule = styled.div`
  width: 160px;
  height: 1px;
  background: linear-gradient(to right, transparent, #c9a84c, transparent);
  flex-shrink: 0;

  @media (max-width: 600px) {
    width: 100px;
  }
`;

/* ─── Heading ─────────────────────────────────────────────── */
export const HeadingSection = styled.section`
  text-align: center;
  animation: ${fadeDown} 0.9s 0.15s ease both;
  padding: 0 8px;
`;

export const MainHeading = styled.h1`
  font-family: 'Playfair Display', serif;
  font-size: clamp(20px, 4vw, 34px);
  font-weight: 700;
  color: #f0e6cc;
  line-height: 1.45;
  margin-bottom: 14px;

  em {
    color: #c9a84c;
    font-style: normal;
  }

  @media (max-width: 600px) {
    font-size: 20px;
    line-height: 1.5;
    margin-bottom: 10px;
  }
`;

export const SubText = styled.p`
  font-size: 14px;
  color: rgba(240, 230, 204, 0.55);
  line-height: 1.7;
  max-width: 560px;

  @media (max-width: 600px) {
    font-size: 13px;
  }
`;

/* ─── Radio group ─────────────────────────────────────────── */
export const RadioSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  animation: ${fadeUp} 0.9s 0.3s ease both;
  width: 100%;
`;

export const RadioGroupLabel = styled.p`
  font-size: 12px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #c9a84c;
  font-weight: 500;

  @media (max-width: 600px) {
    font-size: 11px;
  }
`;

export const RadioRow = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    gap: 12px;
  }
`;

export const RadioPill = styled.label`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 16px 32px;
  border-radius: 6px;
  border: 1px solid rgba(201, 168, 76, 0.22);
  background: rgba(13, 27, 42, 0.6);
  cursor: pointer;
  min-width: 240px;
  transition: border-color 0.2s, background 0.2s;

  &:hover {
    border-color: rgba(201, 168, 76, 0.6);
  }

  @media (max-width: 600px) {
    min-width: unset;
    width: 100%;
    max-width: 320px;
    padding: 14px 20px;
    gap: 12px;
  }
`;

export const RadioInput = styled.input`
  accent-color: #c9a84c;
  width: 18px;
  height: 18px;
  cursor: pointer;
  flex-shrink: 0;
`;

export const RadioLabelText = styled.span`
  font-family: 'Playfair Display', serif;
  font-size: 16px;
  font-weight: 500;
  color: rgba(240, 230, 204, 0.85);

  @media (max-width: 600px) {
    font-size: 15px;
  }
`;

export const RadioSubText = styled.span`
  font-size: 11px;
  color: rgba(240, 230, 204, 0.4);
  display: block;
  margin-top: 2px;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
`;

/* ─── Disclaimer card ─────────────────────────────────────── */
export const DisclaimerCard = styled.div`
  width: 100%;
  max-width: 640px;
  border: 1px solid rgba(201, 168, 76, 0.25);
  border-left: 3px solid #c9a84c;
  border-radius: 0 6px 6px 0;
  background: rgba(13, 27, 42, 0.75);
  padding: 20px 24px;
  animation: ${fadeUp} 0.9s 0.45s ease both;

  @media (max-width: 600px) {
    padding: 16px 16px 16px 18px;
  }
`;

export const DisclaimerTitle = styled.p`
  font-size: 11px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #c9a84c;
  font-weight: 500;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const DisclaimerBody = styled.p`
  font-size: 12.5px;
  color: rgba(240, 230, 204, 0.6);
  line-height: 1.75;
  margin-bottom: 16px;

  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

export const ConsentRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-end;
    gap: 8px;
  }
`;

export const ConsentNote = styled.span`
  font-size: 11px;
  color: rgba(240, 230, 204, 0.4);
`;

export const OkButton = styled.button`
  padding: 8px 24px;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-family: 'Inter', sans-serif;
  border-radius: 4px;
  border: 1px solid #c9a84c;
  background: transparent;
  color: #c9a84c;
  cursor: pointer;
  transition: background 0.18s, color 0.18s;

  &:hover {
    background: #c9a84c;
    color: #0d1b2a;
  }

  @media (max-width: 600px) {
    width: 100%;
    padding: 10px 24px;
  }
`;

/* ─── LinkedIn badge ──────────────────────────────────────── */
export const LinkedInBadge = styled.a`
  position: fixed;
  bottom: 28px;
  right: 28px;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 16px 10px 12px;
  background: rgba(13, 27, 42, 0.88);
  border: 1px solid rgba(201, 168, 76, 0.3);
  border-radius: 6px;
  text-decoration: none;
  transition: border-color 0.18s, background 0.18s;
  z-index: 100;

  &:hover {
    border-color: #c9a84c;
    background: rgba(13, 27, 42, 0.95);
  }

  @media (max-width: 600px) {
    bottom: 16px;
    right: 16px;
    padding: 8px 12px 8px 10px;
    gap: 8px;
  }
`;

export const LIIconBox = styled.div`
  width: 28px;
  height: 28px;
  background: #0a66c2;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  @media (max-width: 600px) {
    width: 24px;
    height: 24px;
  }
`;

export const LIText = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LIName = styled.p`
  font-size: 12px;
  font-weight: 500;
  color: #f0e6cc;
  line-height: 1.3;

  @media (max-width: 600px) {
    font-size: 11px;
  }
`;

export const LISub = styled.p`
  font-size: 10px;
  color: rgba(240, 230, 204, 0.45);
  line-height: 1.3;
`;


/* ─── Popup Overlay ───────────────────────────────────────── */
export const PopupOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  padding: 16px;
`;

export const PopupBox = styled.div`
  width: 100%;
  max-width: 560px;
  background: #0f2035;
  border: 1px solid rgba(201, 168, 76, 0.35);
  border-top: 3px solid #c9a84c;
  border-radius: 8px;
  padding: 28px 28px 24px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  position: relative;

  @media (max-width: 600px) {
    padding: 22px 18px 20px;
    gap: 14px;
  }
`;

export const PopupTopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PopupTitle = styled.p`
  font-size: 11px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #c9a84c;
  font-weight: 500;
  font-family: 'Inter', sans-serif;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const PopupCloseButton = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid rgba(201, 168, 76, 0.3);
  background: transparent;
  color: rgba(240, 230, 204, 0.6);
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: border-color 0.18s, color 0.18s, background 0.18s;
  flex-shrink: 0;

  &:hover {
    border-color: #c9a84c;
    color: #f0e6cc;
    background: rgba(201, 168, 76, 0.1);
  }
`;

export const PopupBody = styled.p`
  font-size: 13px;
  color: rgba(240, 230, 204, 0.6);
  line-height: 1.78;
  font-family: 'Inter', sans-serif;

  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

export const PopupTimerRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid rgba(201, 168, 76, 0.15);
  padding-top: 16px;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    padding-top: 12px;
  }
`;

export const TimerLabel = styled.span`
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(240, 230, 204, 0.4);
  font-family: 'Inter', sans-serif;
`;

export const TimerDisplay = styled.span`
  font-family: 'Playfair Display', serif;
  font-size: 28px;
  font-weight: 700;
  color: #c9a84c;
  letter-spacing: 0.06em;

  @media (max-width: 600px) {
    font-size: 24px;
  }
`;

export const PopupConsentRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: stretch;
    gap: 8px;
  }
`;

export const PopupConsentNote = styled.span`
  font-size: 11px;
  color: rgba(240, 230, 204, 0.35);
  font-family: 'Inter', sans-serif;
`;

export const PopupOkButton = styled.button`
  padding: 9px 28px;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-family: 'Inter', sans-serif;
  border-radius: 4px;
  border: 1px solid #c9a84c;
  background: transparent;
  color: #c9a84c;
  cursor: pointer;
  transition: background 0.18s, color 0.18s;

  &:hover {
    background: #c9a84c;
    color: #0d1b2a;
  }

  @media (max-width: 600px) {
    width: 100%;
    padding: 11px 28px;
  }
`;