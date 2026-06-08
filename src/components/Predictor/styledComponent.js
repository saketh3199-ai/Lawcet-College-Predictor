import styled, { keyframes } from "styled-components";

export const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
`;

export const shimmer = keyframes`
  0%   { background-position: -600px 0; }
  100% { background-position:  600px 0; }
`;

/* ─── PAGE WRAPPER ─────────────────────────────────────────────────────────── */
export const HeroWrap = styled.div`
  position: relative;
  min-height: 100vh;
  min-height: 100dvh; /* dynamic viewport on mobile */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /* enough bottom padding so the fixed disclaimer never overlaps content */
  padding: 3rem 1.5rem 7rem;
  box-sizing: border-box;

  font-family: 'EB Garamond', Georgia, serif;
  color: #f0ead6;
  overflow-x: hidden;

  background:
    linear-gradient(160deg, rgba(10,7,5,0.85) 0%, rgba(20,14,8,0.78) 40%, rgba(10,7,5,0.92) 100%),
    url("https://images.unsplash.com/photo-1589994965851-a8f479c573a9?auto=format&fit=crop&w=1600&q=80")
      center / cover no-repeat fixed;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse 70% 55% at 50% 30%, rgba(180,140,60,0.10) 0%, transparent 70%),
      repeating-linear-gradient(
        0deg,
        transparent,
        transparent 79px,
        rgba(180,140,60,0.03) 80px
      );
    pointer-events: none;
  }

  *, *::before, *::after { box-sizing: border-box; }

  /* ── tablet (≤ 768 px) */
  @media (max-width: 768px) {
    padding: 2.5rem 1.25rem 6.5rem;
    justify-content: flex-start;
    padding-top: 2.5rem;
    background-attachment: scroll; /* fixed bg causes jank on iOS */
  }

  /* ── large phone (≤ 480 px) */
  @media (max-width: 480px) {
    padding: 1.8rem 1rem 6rem;
    padding-top: 2rem;
  }

  /* ── small phone (≤ 360 px) */
  @media (max-width: 360px) {
    padding: 1.5rem 0.75rem 5.5rem;
  }
`;

/* ─── DECORATIVE SCALES ICON ───────────────────────────────────────────────── */
export const ScalesRow = styled.div`
  position: absolute;
  top: 2rem;
  right: 2.5rem;
  opacity: 0.15;
  font-size: 5rem;
  pointer-events: none;
  user-select: none;

  @media (max-width: 768px) {
    font-size: 3.5rem;
    top: 1.2rem;
    right: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 2.8rem;
    top: 1rem;
    right: 0.8rem;
    opacity: 0.12;
  }
`;

/* ─── HERO GAVEL ICON ──────────────────────────────────────────────────────── */
export const Gavel = styled.div`
  font-size: 2.8rem;
  margin-bottom: 1.2rem;
  animation: ${fadeUp} 0.7s ease both;
  filter: drop-shadow(0 0 18px rgba(200,160,60,0.5));

  @media (max-width: 768px) {
    font-size: 2.4rem;
    margin-bottom: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
    margin-bottom: 0.8rem;
  }
`;

/* ─── MAIN HEADING ─────────────────────────────────────────────────────────── */
export const Title = styled.h1`
  font-family: 'Playfair Display', Georgia, serif;
  font-size: clamp(1.3rem, 4.5vw, 2.9rem);
  font-weight: 900;
  text-align: center;
  line-height: 1.22;
  letter-spacing: -0.01em;
  max-width: 680px;
  width: 100%;
  margin: 0;

  background: linear-gradient(
    90deg,
    #c8a84b 0%,
    #f5e6b8 35%,
    #e8cc78 55%,
    #c8a84b 100%
  );
  background-size: 600px 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${fadeUp} 0.8s ease 0.1s both, ${shimmer} 4s linear 1.2s infinite;

  @media (max-width: 768px) {
    font-size: clamp(1.25rem, 5vw, 1.8rem);
    max-width: 100%;
    padding: 0 0.25rem;
  }

  @media (max-width: 480px) {
    font-size: clamp(1.15rem, 5.5vw, 1.5rem);
    line-height: 1.3;
  }

  @media (max-width: 360px) {
    font-size: 1.1rem;
  }
`;

/* ─── GOLD DIVIDER ─────────────────────────────────────────────────────────── */
export const Divider = styled.div`
  width: 120px;
  height: 1.5px;
  background: linear-gradient(90deg, transparent, #c8a84b, transparent);
  margin: 1.4rem auto;
  animation: ${fadeUp} 0.7s ease 0.25s both;

  @media (max-width: 480px) {
    margin: 1rem auto;
    width: 80px;
  }
`;

/* ─── SUBTITLE ─────────────────────────────────────────────────────────────── */
export const Subtitle = styled.p`
  font-size: 1.05rem;
  color: #b8a882;
  font-style: italic;
  letter-spacing: 0.02em;
  text-align: center;
  margin: 0;
  animation: ${fadeUp} 0.7s ease 0.3s both;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    font-size: 0.88rem;
    padding: 0 0.5rem;
  }
`;

/* ─── FORM CARD ────────────────────────────────────────────────────────────── */
export const Card = styled.div`
  margin-top: 2.4rem;
  background: rgba(20, 15, 8, 0.82);
  border: 1px solid rgba(200, 168, 75, 0.28);
  border-radius: 4px;
  padding: 2.4rem 2.8rem;
  width: 100%;
  max-width: 520px;
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  animation: ${fadeUp} 0.8s ease 0.4s both;
  box-shadow:
    0 0 0 0.5px rgba(200,168,75,0.10),
    0 24px 60px rgba(0,0,0,0.55);

  @media (max-width: 768px) {
    max-width: 480px;
    padding: 2rem 2rem;
    margin-top: 1.8rem;
  }

  @media (max-width: 600px) {
    padding: 1.8rem 1.5rem;
    margin-top: 1.5rem;
    border-radius: 3px;
  }

  @media (max-width: 480px) {
    padding: 1.4rem 1.1rem;
    margin-top: 1.2rem;
  }

  @media (max-width: 360px) {
    padding: 1.2rem 0.9rem;
    margin-top: 1rem;
  }
`;

/* ─── FIELD GROUP ──────────────────────────────────────────────────────────── */
export const FieldGroup = styled.div`
  margin-bottom: 1.6rem;

  @media (max-width: 480px) {
    margin-bottom: 1.25rem;
  }

  @media (max-width: 360px) {
    margin-bottom: 1rem;
  }
`;

/* ─── LABEL ────────────────────────────────────────────────────────────────── */
export const Label = styled.label`
  display: block;
  font-size: 0.75rem;
  font-family: 'EB Garamond', Georgia, serif;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #c8a84b;
  margin-bottom: 0.5rem;

  @media (max-width: 480px) {
    font-size: 0.7rem;
  }
`;

/* ─── SELECT ───────────────────────────────────────────────────────────────── */
export const Select = styled.select`
  width: 100%;
  background: rgba(10, 7, 5, 0.72);
  border: 1px solid rgba(200, 168, 75, 0.35);
  border-radius: 2px;
  color: #f0ead6;
  font-family: 'EB Garamond', Georgia, serif;
  font-size: 1rem;
  padding: 0.72rem 2.5rem 0.72rem 1rem;
  appearance: none;
  -webkit-appearance: none;

  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23c8a84b' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  cursor: pointer;
  transition: border-color 0.2s, box-shadow 0.2s;

  &:focus {
    outline: none;
    border-color: rgba(200, 168, 75, 0.7);
    box-shadow: 0 0 0 2px rgba(200,168,75,0.12);
  }

  option {
    background: #1a120a;
    color: #f0ead6;
  }

  @media (max-width: 480px) {
    font-size: 16px; /* prevents iOS auto-zoom on focus */
    padding: 0.65rem 2.2rem 0.65rem 0.85rem;
  }
`;

/* ─── INPUT ────────────────────────────────────────────────────────────────── */
export const Input = styled.input`
  width: 100%;
  background: rgba(10, 7, 5, 0.72);
  border: 1px solid rgba(200, 168, 75, 0.35);
  border-radius: 2px;
  color: #f0ead6;
  font-family: 'EB Garamond', Georgia, serif;
  font-size: 1rem;
  padding: 0.72rem 1rem;
  transition: border-color 0.2s, box-shadow 0.2s;

  &::placeholder { color: rgba(176,160,120,0.4); }

  &:focus {
    outline: none;
    border-color: rgba(200, 168, 75, 0.7);
    box-shadow: 0 0 0 2px rgba(200,168,75,0.12);
  }

  @media (max-width: 480px) {
    font-size: 16px; /* prevents iOS auto-zoom */
    padding: 0.65rem 0.85rem;
  }
`;

/* ─── RADIO GROUP HINT ─────────────────────────────────────────────────────── */
export const RadioGroupLabel = styled.p`
  font-size: 0.82rem;
  color: #b8a882;
  font-style: italic;
  margin: 0 0 0.65rem 0;
  font-family: 'EB Garamond', Georgia, serif;

  @media (max-width: 480px) {
    font-size: 0.76rem;
  }
`;

/* ─── RADIO ROW ────────────────────────────────────────────────────────────── */
export const RadioGroup = styled.div`
  display: flex;
  gap: 0.8rem;
  margin-top: 0.2rem;

  /* stack on very narrow screens */
  @media (max-width: 360px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

/* ─── RADIO PILL ───────────────────────────────────────────────────────────── */
export const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.45rem;
  cursor: pointer;
  font-size: 0.96rem;
  color: #d4c49a;
  padding: 0.58rem 1.1rem;
  border: 1px solid rgba(200, 168, 75, 0.28);
  border-radius: 2px;
  transition: background 0.18s, border-color 0.18s, color 0.18s;
  flex: 1;

  /* checked state (CSS :has) */
  &:has(input:checked) {
    background: rgba(200,168,75,0.15);
    border-color: rgba(200,168,75,0.65);
    color: #f5e6b8;
  }

  input[type="radio"] {
    accent-color: #c8a84b;
    width: 15px;
    height: 15px;
    flex-shrink: 0;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 0.55rem 0.7rem;
  }

  @media (max-width: 360px) {
    justify-content: flex-start;
    padding: 0.5rem 0.7rem;
  }
`;

/* ─── SUBMIT BUTTON ────────────────────────────────────────────────────────── */
export const Button = styled.button`
  width: 100%;
  margin-top: 0.8rem;
  padding: 0.88rem 1.5rem;
  background: linear-gradient(135deg, #c8a84b 0%, #a8852e 100%);
  border: none;
  border-radius: 2px;
  color: #0a0705;
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 1.05rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  cursor: pointer;
  transition: opacity 0.2s, transform 0.15s, box-shadow 0.2s;
  box-shadow: 0 4px 20px rgba(200,168,75,0.3);
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;

  &:hover {
    opacity: 0.92;
    box-shadow: 0 6px 28px rgba(200,168,75,0.45);
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0) scale(0.99);
    opacity: 1;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    padding: 0.82rem 1rem;
    margin-top: 0.5rem;
    /* large tap target */
    min-height: 48px;
  }
`;

/* ─── DISCLAIMER FOOTER ────────────────────────────────────────────────────── */
export const DisclaimerBar = styled.footer`
  display:flex;
  flex-direction:column;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(8, 5, 3, 0.96);
  border-top: 1px solid rgba(200,168,75,0.18);
  padding: 0.65rem 1.5rem;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  z-index: 99;
  font-family: 'EB Garamond', Georgia, serif;

  @media (max-width: 768px) {
    padding: 0.6rem 1.25rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem 0.9rem;
  }
`;

export const DisclaimerText = styled.p`
  font-size: 0.8rem;
  color: #7a6a48;
  text-align: center;
  line-height: 1.55;
  max-width: 900px;
  margin: 0 auto;

  strong { color: #a88428; font-weight: 500; }

  a {
    color: #c8a84b;
    text-decoration: underline;
    text-underline-offset: 2px;
    margin-left: 4px;
  }

  @media (max-width: 768px) {
    font-size: 0.76rem;
  }

  @media (max-width: 480px) {
    font-size: 0.7rem;
    line-height: 1.45;
    text-align: left;
  }

  @media (max-width: 360px) {
    font-size: 0.66rem;
  }
`;


export const DisclaimerCloseButton = styled.button`
  margin-top: 0.5rem;
  padding: 0.45rem 1.2rem;
  background: linear-gradient(135deg, #c8a84b 0%, #a8852e 100%);
  border: none;
  border-radius: 2px;
  color: #0a0705;
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  cursor: pointer;
  transition: opacity 0.2s, transform 0.15s, box-shadow 0.2s;
  box-shadow: 0 4px 20px rgba(200,168,75,0.3);
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
  align-self: center;

  /* fixed width on desktop, full width on mobile */
  width: 160px;

  &:hover {
    opacity: 0.92;
    box-shadow: 0 6px 28px rgba(200,168,75,0.45);
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0) scale(0.99);
    opacity: 1;
  }

  @media (max-width: 480px) {
    width: 100%;
    font-size: 0.88rem;
    padding: 0.6rem 1rem;
    margin-top: 0.4rem;
    min-height: 44px;
  }
`;