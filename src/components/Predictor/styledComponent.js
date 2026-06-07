import styled, { keyframes } from "styled-components";

export const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(28px); }
  to   { opacity: 1; transform: translateY(0); }
`;

export const shimmer = keyframes`
  0%   { background-position: -600px 0; }
  100% { background-position: 600px 0; }
`;

export const HeroWrap = styled.div`
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem 1.5rem 6rem;
  box-sizing: border-box;
  font-family: 'EB Garamond', Georgia, serif;
  color: #f0ead6;
  overflow-x: hidden;
  background:
    linear-gradient(160deg, rgba(10,7,5,0.82) 0%, rgba(20,14,8,0.75) 40%, rgba(10,7,5,0.90) 100%),
    url("https://images.unsplash.com/photo-1589994965851-a8f479c573a9?auto=format&fit=crop&w=1600&q=80")
      center / cover no-repeat;

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
        rgba(180,140,60,0.035) 80px
      );
    pointer-events: none;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  @media (max-width: 480px) {
    padding: 2rem 1rem 5.5rem;
    justify-content: flex-start;
    padding-top: 3rem;
  }
`;

export const ScalesRow = styled.div`
  position: absolute;
  top: 2rem;
  right: 2.5rem;
  opacity: 0.18;
  font-size: 5rem;
  pointer-events: none;
  user-select: none;

  @media (max-width: 480px) {
    font-size: 3rem;
    top: 1rem;
    right: 1rem;
  }
`;

export const Gavel = styled.div`
  font-size: 2.8rem;
  margin-bottom: 1.2rem;
  animation: ${fadeUp} 0.7s ease both;
  filter: drop-shadow(0 0 18px rgba(200,160,60,0.5));

  @media (max-width: 480px) {
    font-size: 2.2rem;
    margin-bottom: 0.8rem;
  }
`;

export const Title = styled.h1`
  font-family: 'Playfair Display', Georgia, serif;
  font-size: clamp(1.45rem, 5vw, 2.9rem);
  font-weight: 900;
  text-align: center;
  line-height: 1.22;
  letter-spacing: -0.01em;
  max-width: 720px;
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

  @media (max-width: 480px) {
    font-size: clamp(1.3rem, 6vw, 1.7rem);
    line-height: 1.3;
    padding: 0 0.5rem;
  }
`;

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

export const Subtitle = styled.p`
  font-size: 1.05rem;
  color: #b8a882;
  font-style: italic;
  letter-spacing: 0.02em;
  text-align: center;
  margin: 0;
  animation: ${fadeUp} 0.7s ease 0.3s both;

  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 0 1rem;
  }
`;

export const Card = styled.div`
  margin-top: 2.4rem;
  background: rgba(20, 15, 8, 0.78);
  border: 1px solid rgba(200, 168, 75, 0.28);
  border-radius: 4px;
  padding: 2.4rem 2.8rem;
  width: 100%;
  max-width: 520px;
  backdrop-filter: blur(12px);
  animation: ${fadeUp} 0.8s ease 0.4s both;
  box-shadow:
    0 0 0 0.5px rgba(200,168,75,0.12),
    0 24px 60px rgba(0,0,0,0.55);

  @media (max-width: 600px) {
    padding: 1.8rem 1.4rem;
    margin-top: 1.6rem;
    border-radius: 3px;
  }

  @media (max-width: 480px) {
    padding: 1.4rem 1rem;
    margin-top: 1.2rem;
  }
`;

export const FieldGroup = styled.div`
  margin-bottom: 1.6rem;

  @media (max-width: 480px) {
    margin-bottom: 1.2rem;
  }
`;

export const Label = styled.label`
  display: block;
  font-size: 0.78rem;
  font-family: 'EB Garamond', Georgia, serif;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #c8a84b;
  margin-bottom: 0.5rem;
`;

export const Select = styled.select`
  width: 100%;
  background: rgba(10, 7, 5, 0.7);
  border: 1px solid rgba(200, 168, 75, 0.35);
  border-radius: 2px;
  color: #f0ead6;
  font-family: 'EB Garamond', Georgia, serif;
  font-size: 1rem;
  padding: 0.68rem 1rem;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23c8a84b' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  cursor: pointer;
  transition: border-color 0.2s;

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
    font-size: 0.95rem;
    padding: 0.6rem 0.8rem;
  }
`;

export const Input = styled.input`
  width: 100%;
  background: rgba(10, 7, 5, 0.7);
  border: 1px solid rgba(200, 168, 75, 0.35);
  border-radius: 2px;
  color: #f0ead6;
  font-family: 'EB Garamond', Georgia, serif;
  font-size: 1rem;
  padding: 0.68rem 1rem;
  transition: border-color 0.2s;

  &::placeholder { color: rgba(176,160,120,0.45); }

  &:focus {
    outline: none;
    border-color: rgba(200, 168, 75, 0.7);
    box-shadow: 0 0 0 2px rgba(200,168,75,0.12);
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
    padding: 0.6rem 0.8rem;
  }
`;

export const RadioGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 0.2rem;

  @media (max-width: 380px) {
    flex-direction: column;
    gap: 0.6rem;
  }
`;

export const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  font-size: 0.98rem;
  color: #d4c49a;
  padding: 0.55rem 1.1rem;
  border: 1px solid rgba(200, 168, 75, 0.28);
  border-radius: 2px;
  transition: background 0.18s, border-color 0.18s;
  flex: 1;
  justify-content: center;

  &:has(input:checked) {
    background: rgba(200,168,75,0.14);
    border-color: rgba(200,168,75,0.65);
    color: #f5e6b8;
  }

  input[type="radio"] {
    accent-color: #c8a84b;
    width: 15px;
    height: 15px;
  }

  @media (max-width: 480px) {
    font-size: 0.92rem;
    padding: 0.5rem 0.8rem;
  }
`;

export const RadioGroupLabel = styled.p`
  font-size: 0.82rem;
  color: #b8a882;
  font-style: italic;
  margin: 0 0 0.65rem 0;
  font-family: 'EB Garamond', Georgia, serif;
`;

export const Button = styled.button`
  width: 100%;
  margin-top: 0.8rem;
  padding: 0.85rem 1.5rem;
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

  &:hover {
    opacity: 0.92;
    box-shadow: 0 6px 28px rgba(200,168,75,0.45);
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
    opacity: 1;
  }

  @media (max-width: 480px) {
    font-size: 0.98rem;
    padding: 0.78rem 1rem;
    margin-top: 0.5rem;
  }
`;

export const DisclaimerBar = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(8, 5, 3, 0.94);
  border-top: 1px solid rgba(200,168,75,0.2);
  padding: 0.7rem 1.5rem;
  backdrop-filter: blur(8px);
  z-index: 99;
  font-family: 'EB Garamond', Georgia, serif;

  @media (max-width: 480px) {
    padding: 0.55rem 1rem;
  }
`;

export const DisclaimerText = styled.p`
  font-size: 0.82rem;
  color: #8a7a58;
  text-align: center;
  line-height: 1.55;
  max-width: 900px;
  margin: 0 auto;

  strong {
    color: #b8952a;
    font-weight: 500;
  }

  @media (max-width: 480px) {
    font-size: 0.72rem;
    line-height: 1.45;
  }
`;