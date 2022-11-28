import styled from "styled-components";

// Form
export const Background = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const FormBackground = styled.div`
  width: 100%;
  height: 100vh;
  margin-top: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 8;

`;

export const Box = styled.div`
  width: 100%;
  height: auto;
  padding: 2%;
  border-radius: 10px;
  background: #ffffff;
  z-index: 999;
  position: relative;
  box-shadow: 0 2px 3px 2px rgba(0, 0, 0, 0.3);


  .close {
    z-index: 999;
    color: #000;
  }

  @media (max-width: 900px) {
    width: 90%;
  }
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 30px;
  margin-top: 15vh;
  @media (max-width: 900px) {
    grid-gap: 10px;
    margin-top: 8vh;
    padding: 10px;
  }
`;

export const FormOption = styled.div`
  .select {
    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }
    
    /* appearance: none; */
    border: none;
    padding: 0 1em 0 0;
    margin: 0;
    width: 100%;
    font-family: inherit;
    font-size: inherit;
    cursor: inherit;
    line-height: inherit;
    width: 90%;
    height: 60px;
    box-sizing: border-box;
    margin-bottom: 3vh;
    outline: none;
    border-radius: 6px;
    font-size: 15px;
    /* border: none; */
    /* background-color: white;  */
  }
`;

export const FormControl = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 30px;
  align-items: center;
  &.btn {
    margin-top: 5vh;
    font-size: 14px;
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 20px;
  }
`;

export const InputField = styled.div`
  width: 100%;

  .input {
    min-width: 100%;
  }

  .select {
    border-bottom: 1px solid #616161;
    border-radius: 0;
    padding: 20px 0;
    min-width: 100%;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 15px 20px;
  outline: none;
  border-radius: 6px;
  border: none;
  background: #fff;
  &.btn {
    font-size: 18px;
    &:hover {
      background-color: var(--Color-2);
    }
  }
`;

export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 15vh;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 5%;
  transition: all 0.5s linear;
  z-index: 999;

  &.active {
    background: var(--Color-1);
    height: 15vh;

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
height: 100%;

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
  margin-left: 40px;
  margin-bottom: 0px;
  list-style-type: none;
  font-size: 14pt;
  img {
    border-radius: 50%;
    height: 50px;
    width: 50px;
    transform: translateY(20px);
  }

  .prof_image {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 50px;
    object-fit: cover;

    img {
      width: 100%;
      height: 100%;
    }
  }

  a {
    text-decoration: none;
    position: relative;

    /* &:hover {
      font-size: 15pt;
      box-shadow: 0 2px 3px 2px rgba(0, 0, 0, 0.3);
    } */

    &.btn {
      background-color: var(--Color-2);
      border-radius: 50px;
      padding: 8px 25px;
      cursor: pointer;
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
  display: flex;
  grid-template-columns: auto 40%;
  grid-gap: 5%;
  align-items: center;
  justify-content: center;
  height: 90vh;
  background: var(--Color-5);
  padding: 15vh  8%  5vh;
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
  font-size: 3.1875rem;
  font-weight: 700;
  margin-bottom: 20px;
  letter-spacing: 1px;
  margin-top: 10px; 
  width: 46rem;
  color: offwhite;
  @media (max-width: 900px) {
    width: 100%;
    font-size: 1.70rem;
    // width: 24rem;
  }

  span{
    color: var(--Color-2);
  }
`;

export const ShowcasePrice = styled.p`
 font-size: 1.825rem;
 line-height: 24px;
 font-weight: 600;
 margin-top: 30px;
 /* margin-bottom: 30px; */
 color: #616161;

   @media (max-width: 900px) {
    width: 100%;
    margin-bottom: 30px;
    font-size: 24px;
    // width: 24rem;
  }
 
`


export const ShowcaseContent = styled.p`
  line-height: 150%;
  font-size: 17pt;
  margin-bottom: 50px;
   margin-top: 30px;
  width: 40rem;
  @media (max-width: 900px) {
    width: 100%;
    margin-bottom: 40px;
     font-size: 13pt;
    // width: 24rem;
  }
`;
export const ShowcaseButtons = styled.div`
  @media (max-width: 900px) {
    display: grid;
    justify-content: start;
    align-items: flex-start;
    margin-top: -15px;
   }
`
export const ShowcaseBtn = styled.a`
  font-size: 16pt;
  text-decoration: none;
  padding: 14px 35px;
  border-radius: 50px;
  background: Var(--Color-1);
  color: Var(--White);
  margin-right: 2rem;
  text-align: center;
  cursor: pointer;
  :hover{
      background-color: var(--White);
      color: Var(--Color-1);
      border: 1px solid var(--Color-1);
    } 
    @media (max-width: 900px) {
      padding: 8px 16px;
      font-size: 14pt;
      margin-bottom: 20px;
      
   }    
`;

export const ShowcaseBtnResearcher = styled.a`
  font-size: 16pt;
  text-decoration: none;
  padding: 14px 35px;
  border-radius: 50px;
  background: Var(--White);
  color: Var(--Color-1);
  margin-right: 2rem;
  border: 1px solid var(--Color-1);
  cursor: pointer;
  text-align: center;
  :hover{
      background-color: var(--Color-1);
      color: Var(--White);
    }  
    
    @media (max-width: 900px) {
      padding: 8px 16px;
      font-size: 14pt;
     
      
   } 
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
  width: 36.75rem;
  height: 36.75rem;
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
  padding: 5%  8%;
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
  width: 260px;
  height: 200px;
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

  @media (max-width: 900px) {
  width: 220px;
  height: 170px;
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
  margin-bottom: 3rem;
  .focus-title{
    font-size: 25px;
  }
  
  .focus{
    display: flex;
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 20px;
    font-weight: 500;
  }

  svg{
    color: var(--Color-2);
    margin-right: 1rem;
  }

  &.desc {
    line-height: 150%;
    font-size: 16px;
  }
`;
export const Focus = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5% 8%;
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
    width: 60%;
    @media (max-width: 900px) {
      display: none;
    }
  }

  @media (max-width: 900px) {
      margin-top: 40px;           
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
  padding: 5%  8%;
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
  padding: 5% 8%;
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
  padding: 5% 8%;
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
  padding: 5% 8%;
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
  padding: 15vh  8%  3vh;
  margin-top: 13vh;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 30px;

  @media (max-width: 900px) {
  }
`;

export const Cp = styled.div`
  border: 5px solid var(--Color-3);
  padding: 30px;
  border-radius: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  height: 100%;
  position: relative;

  .btn {
    outline: none;
    border: none;
    background: var(--Color-1);
    color: #fff;
    padding: 10px 25px;
    border-radius: 50px;
  }

  @media (max-width: 900px) {
    .title {
      font-size: 20px;
    }
  }
`;

export const Modal = styled.div`
  display: none;
  position: fixed;
  top: 10%;
  left: 10%;

  right: 10%;
  bottom: 10%;
  margin: auto;
  z-index: 999;
  width: 70%;
  height: 50%;
  @media (max-width: 600px) {
    top: 1%;
    left: 1%;

    right: 1%;
    bottom: 1%;
    width: 100%;
  }

  .close {
    position: absolute;
    top: 3%;
    right: 3%;
    font-size: 20px;
    z-index: 999;
    outline: none;
    background: none;
    border: none;
    @media (max-width: 900px) {
top: 3%;
right: 3%;
    }
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

// user projects
export const GetUserProjects = styled.div`
  /* border: 5px solid var(--Color-3);
  padding: 5%;
  border-radius: 20px;

  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  height: auto;
  position: relative;

  .user-project-title {
    font-size: var(--h1);
    margin-bottom: 10px;
  }
  .empty-state {
    text-align: center;
    margin: auto;

    img {
      opacity: 0.2;
    }
  }

  .project-header {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 50px;
    @media (max-width: 900px) {
      grid-template-columns: repeat(1, 1fr);
    }
    p {
      font-weight: 900;
      color: var(--Color-3);
    }
  } */

  border: 5px solid var(--Color-3);
  padding: 10px;
  border-radius: 20px !important;
  overflow: auto;

  .table {
    width: 100%;
    width: 100%;
  }

  button {
    background: var(--Color-1);
    color: #fff;
    padding: 6px 14px;
    font-size: 10px;
    text-decoration: none;
    border-radius: 50px;
    outline: none;
    border: none;
  }

  .paid-button{
    background: green;
    margin-left: 15px !important;
  }

  .pay-button{
    margin-left: 15px !important;
  }

  .empty-state {
    text-align: center;
    margin: auto;

    img {
      opacity: 0.2;
    }
  }

  @media (max-width: 900px) {
  }
`;
export const ProjectCont = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-evenly;

  p {
    margin-left: 42px;
  }
`;

export const AfterSignIn = styled.div`
  a {
    text-decoration: none;
    position: relative;
    color: var(--c);
  }

  &.btn {
    background-color: var(--Color-2);
    border-radius: 50px;
    padding: 8px 25px;
    cursor: pointer;
  }
`;
export const ProfileStyle = styled.div`
  border: 5px solid var(--Color-3);
  padding: 30px;
  border-radius: 20px;
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  img {
    border-radius: 50%;
    height: 70px;
    width: 70px;
  }

  p {
    position: relative;
    font-size: 14pt;
    font-weight: 600;
    margin-bottom: 30px;
  }
  .cta {
    background: var(--Color-1);
    color: #fff;
    padding: 10px 20px;
    font-size: 16px;
    text-decoration: none;
    border-radius: 50px;
  }

  @media (max-width: 900px) {
    font-size: 20px;
    display: none;

    img {
      border-radius: 50%;
      height: 40px;
      width: 40px;
    }

    p {
      position: relative;
      font-size: 14px;
      font-weight: 600;
      margin-bottom: 30px;
    }
    .cta {
      background: var(--Color-1);
      color: #fff;
      padding: 6px 12px;
      font-size: 10px;
      text-decoration: none;
      border-radius: 50px;
    }
  }
`;

// Admin

export const AdminStyle = styled.div`
  border: 5px solid var(--Color-3);
  margin-top: 8%;
  margin-left: 3%;
  padding: 3%;
  border-radius: 20px;
  width: 85%;
  height: 80vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  .project-header {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-around;
    margin-left: 25px;
    font-weight: 900;
    color: var(--Color-3);
  }
  h4 {
    margin-left: 20px;
    font-weight: 900;
  }
`;


// PrivacyCont
export const PrivacyCont = styled.div`
margin: 12%;
@media (max-width: 900px) {
  margin-top: 25%;
  }

`
// Footer
export const FooterCont = styled.div`
.footer-color{
  background-color: var(--Color-1) !important;
}
.adress-text{
  font-size: 15px;
}
`
export const ContactCont = styled.div`
margin: 20%; 

@media (max-width: 900px) {
  margin: 5%;
}
`