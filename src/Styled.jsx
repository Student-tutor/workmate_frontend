import styled from "styled-components";

// Sign_In

export const Background = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Box = styled.div`
  width: 400px;
  margin: auto;
  height: auto;
  padding: 2%;
  border-radius: 10px;
  box-shadow: 0 2px 3px 2px rgba(0, 0, 0, 0.3);

  @media (max-width: 900px) {
    width: 80%;
  }
`;

export const Form = styled.form``;

export const FormControl = styled.div`
  width: 90%;
  margin-bottom: 3vh;
  &.btn {
    margin-top: 5vh;
  }
`;

export const InputField = styled.div`
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  padding: 15px 20px;
  outline: none;
  border-radius: 6px;
  border: none;
  background: #7527c43f;
`;

export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 12vh;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 5%;
  transition: all 0.5s linear;
  z-index: 999;

  &.active {
    background: var(--Color-1);
    height: 10vh;

    .toggle {
      color: #fff;
    }
  }

  a {
    color: #fff;
  }

  @media (max-width: 900px) {
    .active {
      right: 30px;
    }
  }
`;

export const Logo = styled.img`
  width: 50px;
`;

export const Toggle = styled.div`
  color: var(--c);
  font-size: 20pt;
  display: none;

  @media (max-width: 900px) {
    display: block;
    transition: all 0.5s linear;
  }
`;

export const Links = styled.ul`
  @media (max-width: 900px) {
    width: auto;
    box-shadow: 0 1px 2px 5px rgba(0, 0, 0, 0.04);
    border-radius: 10px;
    padding: 20px 30px;
    position: absolute;
    top: 10vh;
    right: -100vw;
    background: var(--Color-5);
    transition: all 0.5s linear;
    text-align: left;
  }
`;

export const LinkItem = styled.li`
  display: inline-block;
  margin-left: 20px;
  list-style-type: none;

  a {
    text-decoration: none;
    position: relative;

    &.btn {
      background-color: var(--Color-2);
      border-radius: 50px;
      padding: 8px 25px;
    }

    /* &.btn::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        left: -3px;
        top: -3px;
        z-index: -1;
        background:var(--Color-4);
        border-radius: 50px;
        padding: 3px ;
        box-shadow: 0 1px 2px 1px rgba(0, 0, 0, 0.3);
    } */
  }

  @media (max-width: 900px) {
    display: block;
    margin-bottom: 20px;
    transition: all 0.5s linear;
  }
`;

export const Home = styled.div``;

export const ShowcaseContainer = styled.div``;

export const Showcase = styled.section`
  display: grid;
  grid-template-columns: auto 40%;
  grid-gap: 5%;
  align-items: center;
  height: 70vh;
  background: var(--Color-5);
  padding: 2% 5%;
  padding-top: 15vh;

  @media (max-width: 900px) {
    padding-top: 10vh;
    grid-template-columns: 1fr;
  }
`;
export const ShowcaseText = styled.div`
  width: 80%;

  @media (max-width: 900px) {
    width: 100%;
  }
`;
export const ShowcaseTitle = styled.h3`
  font-size: 32pt;
  font-weight: 700;
  margin-bottom: 20px;
  letter-spacing: 1px;
`;
export const ShowcaseContent = styled.p`
  line-height: 150%;
  font-size: 14pt;
  margin-bottom: 20px;
`;
export const ShowcaseBtn = styled.a`
  font-size: 15pt;
  text-decoration: none;
  padding: 8px 20px;
  border-radius: 50px;
  background: Var(--Color-1);
  color: Var(--White);
`;

export const ShowcaseImg = styled.div`
  @media (max-width: 900px) {
    display: none;
  }
`;
export const ShowcaseSlide = styled.div`
  position: relative;
`;
export const Img = styled.img`
  width: 70%;
`;

// export const HowItWorks = styled.div`
//    background: var(--Color-1);
//    padding: 5%;
//    width: 80%;
//    border-bottom-right-radius: 20px;
//    border-top-right-radius: 20px;
//    position: relative;
// `;

export const Steps = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
`;
export const About = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 5%;
  flex-direction: row-reverse;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;
export const AboutText = styled.div`
  width: 100%;
`;
export const AboutCards = styled.div`
  width: 100%;
`;

export const Card = styled.div`
  width: 180px;
  box-shadow: 0 1px 2px 1px rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  padding: 15px 10px;
  margin: 20px;
  transition: all 0.5s linear;
  position: relative;

  &:hover {
    /* background: var(--Color-1); */
    /* color: #fff; */
    transform: translateY(25px);
  }
`;
export const Title = styled.h4`
  font-size: var(--h3);
  margin-bottom: 20px;

  &.title {
    font-size: var(--h1);
  }

  &.colored {
    font-size: var(--h1);
    color: var(--Color-1);
  }

  @media (max-width: 689px) {
    &.title {
      font-size: var(--h3);
    }

    &.colored {
      font-size: var(--h3);
      color: var(--Color-1);
    }
  }
`;
export const Step = styled.span`
  position: absolute;
  top: -15px;
  font-size: 10pt;
  background: var(--Color-1);
  padding: 5px 10px;
  border-radius: 8px;
  color: #fff;
`;
export const Desc = styled.p`
  font-size: 13px;
  &.desc {
    line-height: 150%;
    font-size: 16px;
  }
`;
export const Focus = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5%;
  flex-direction: row-reverse;

  @media (max-width: 900px) {
    flex-direction: column-reverse;
  }
`;
export const FocusImg = styled.div`
  flex: 1;
  text-align: center;
  width: 50%;

  img {
    width: 50%;
    @media (max-width: 900px) {
      width: 100%;
    }
  }
`;
export const FocusText = styled.div`
  flex: 1;

  .desc {
    line-height: 150%;
  }
`;

export const WhoWeAre = styled.div`
  text-align: center;
  width: 70%;
  margin: 5vh auto;
  line-height: 150%;
  padding: 2% 5%;

  @media (max-width: 900px) {
    width: 90%;
    padding: 0 5%;
  }
`;

export const WhatWeDo = styled.div`
  padding: 5%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  z-index: 2;
  margin: 5vh 0;

  &::before {
    content: "";
    width: 85%;
    height: 60%;
    border: 10px solid rgba(0, 0, 0, 0.201);
    position: absolute;
    bottom: -2vh;
    z-index: -1;
  }

  @media (max-width: 900px) {
    flex-direction: column-reverse;
    padding: 2% 5%;

    &::before {
      bottom: 0;
      height: 70%;
    }
  }
`;

export const WhatWeDoText = styled.div`
  width: 40%;

  @media (max-width: 900px) {
    width: 90%;
  }
`;
export const SubTitle = styled.h6`
  font-size: 16px;
  font-weight: 500;
  margin: 0;
  margin-bottom: 30px;
`;

export const WhatWeDoImg = styled.div`
  text-align: center;

  img {
    width: 400px;

    @media (max-width: 689px) {
      width: 80%;
    }
  }
`;

export const WorkWith = styled.div`
  padding: 5%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  z-index: 2;

  &::before {
    content: "";
    width: 90%;
    height: 60%;
    background: var(--Color-5);
    position: absolute;
    bottom: 4vh;
    z-index: -1;
  }

  @media (max-width: 900px) {
    flex-direction: column-reverse;
    padding: 2% 5%;

    &::before {
      bottom: 0;
      height: 70%;
    }
  }
`;
export const WorkWithText = styled.div`
  width: 40%;

  @media (max-width: 900px) {
    width: 90%;
  }
`;
export const WorkWithImg = styled.div`
  text-align: center;

  img {
    width: 400px;

    @media (max-width: 689px) {
      width: 80%;
    }
  }
`;

export const YourInput = styled.div`
  padding: 5%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  z-index: 2;
  margin: 5vh 0;

  &::before {
    content: "";
    width: 85%;
    height: 60%;
    border: 10px solid rgba(0, 0, 0, 0.201);
    position: absolute;
    bottom: -2vh;
    z-index: -1;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    padding: 2% 5%;

    &::before {
      bottom: 0;
      height: 70%;
    }
  }
`;
export const YourInputText = styled.div`
  width: 40%;

  @media (max-width: 900px) {
    width: 90%;
  }
`;
export const YourInputImg = styled.div`
  text-align: center;

  img {
    width: 400px;

    @media (max-width: 689px) {
      width: 80%;
    }
  }
`;

export const Banner = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 50px;
  padding: 5%;
  background: var(--Color-5);
  align-items: center;
  margin-top: 5%;

  @media (max-width: 689px) {
    grid-template-columns: 1fr;
  }
`;
export const BannerText = styled.div`
  .btn {
    text-decoration: none;
    background: #000;
    padding: 10px 25px;
    margin-top: 30px;
    border-radius: 50px;
    color: #fff;
  }
`;
export const BannerImg = styled.div`
  text-align: center;

  img {
    width: 400px;

    @media (max-width: 689px) {
      display: none;
    }
  }
`;

// Dashboard

export const DashboardCont = styled.div`
  padding: 7% 5%;
  display: grid;
  grid-template-columns: 65% auto;
  grid-gap: 20px;
  position: relative;
`;

export const Cp = styled.div`
  border: 5px solid var(--Color-3);
  padding: 5%;
  border-radius: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  height: 40vh;
  position: relative;
`;

export const Modal = styled.div`
  display: none;
  position: fixed;
  top: 10%;
  left: 10%;
  right: 10%;
  bottom: 10%;
  z-index: 5;
  width: 500px;
  height: 500px;
  background: #fff;
  padding: 5%;

  .close {
    float: right;
  }

  &::before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  &.active {
    display: block;
  }
`;
