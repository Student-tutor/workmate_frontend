import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import {
  Img,
  Showcase,
  ShowcaseBtn,
  ShowcaseContainer,
  ShowcaseContent,
  ShowcaseImg,
  ShowcaseText,
  ShowcaseTitle,
  WhoWeAre,
  Title,
  Desc,
  WhatWeDo,
  WhatWeDoText,
  WhatWeDoImg,
  SubTitle,
  WorkWith,
  WorkWithText,
  WorkWithImg,
  YourInput,
  YourInputImg,
  YourInputText,
  Banner,
  BannerText,
  BannerImg,
} from "../../../Styled";
import showcase2 from "../../../assets/images/showcase2.svg";
import wedo from "../../../assets/images/we_do.jpg";
import DoImage from "../../../assets/images/what-we-do.jpg";
import Choose from "../../../assets/images/chose.jpg";
import JoinUs from "../../../assets/images/joinUs.jpg";

import { Link } from "react-router-dom";

const About = () => {
  const { loginWithRedirect, isAuthenticated  } = useAuth0();


  return (
    <div>
      <ShowcaseContainer>
        <Showcase>
          <ShowcaseText>
            <ShowcaseTitle>WorkMate is for Students and Researchers</ShowcaseTitle>
            <ShowcaseContent>
              Workmate connects you to the top 1% academic research experts. We helps you by taken care of all hassles that is attached to academic and professional related works; 
              from <b>Research</b> to <b>Technical writing</b> to <b>Programming</b>.
            </ShowcaseContent>
            <ShowcaseContent>
              Allowing you to focus on what really matters!
            </ShowcaseContent>
            {!isAuthenticated &&
            <ShowcaseBtn className="btn"
            onClick={() =>
              loginWithRedirect({
                screen_hint: "signup",
              })
             } >
              Join Us Today!
            </ShowcaseBtn>
            }
          </ShowcaseText>
          <ShowcaseImg>
            <Img src={showcase2} alt="" />
          </ShowcaseImg>
        </Showcase>
        {/* <ShowcaseSlide>
                            <SubjectSlider/>
                        </ShowcaseSlide> */}
      </ShowcaseContainer>

      <WhoWeAre className="who">
        <Title className="title">Who we are</Title>
        <Desc className="desc">
          WorkMate is group of exparts that is ever ready to help you get passed all troubles attached to academic and professional life.
        </Desc>
      </WhoWeAre>
      <WhatWeDo>
        <WhatWeDoText>
          <Title className="title">WHAT WE DO</Title>
          <SubTitle>We conduct research, we write and we help.</SubTitle>
          <Desc className="desc">
            We allow you to focus on the main work. 
            We would go through all the stress and get you best quality results 
            while carrying you along through all the processes.

            <p>
              What matter to us is that unique result that will make your work
              the best of its kind. This is what we are here for! 
            </p>
          </Desc>
        </WhatWeDoText>
        <WhatWeDoImg>
          <img src={DoImage} alt="" />
        </WhatWeDoImg>
      </WhatWeDo>

      <WorkWith>
        <WorkWithText>
          <Title className="title">WE WORK WITH STUDENTS AND RESEARCHERS</Title>
          <Desc className="desc">
            From your research to writings to technical assignments to resume to career advices, 
            Workmate works with you to get the best result possible. 
            <p>
              Workmate allow you to focus on the main work while we save you from all the stress that comes with academic and professional works. 
            </p>
          </Desc>
        </WorkWithText>
        <WorkWithImg>
          <img src={wedo} alt="" />
        </WorkWithImg>
      </WorkWith>

      <YourInput>
        <YourInputImg>
          <img src={Choose} alt="" />
        </YourInputImg>
        <YourInputText>
          <Title className="title">WHY CHOOSE US</Title>
          <Desc className="desc">
             We understand your pain because we have been there before. 
            We will give you the best result possible within a twinkle of an eye. 
            <p>
              Our services are so fast and affordable. 
            </p>
          </Desc>
        </YourInputText>
      </YourInput>
      {!isAuthenticated &&
      <Banner>
        <BannerText>
          <Title className="title">JOIN US TODAY</Title>
          <Desc className="desc">
                  
          </Desc>
         
          <Link to="" className="btn"
           onClick={() =>
            loginWithRedirect({
              screen_hint: "signup",
            })
           }
          >
            Get your account
          </Link>
         
        </BannerText>

        <BannerImg>
          <img src={JoinUs} alt="" />
        </BannerImg>
      </Banner>
       }
    </div>
  );
};

export default About;
