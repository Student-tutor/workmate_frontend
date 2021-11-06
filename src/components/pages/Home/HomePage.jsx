import React from 'react'
import { NavLink } from 'react-router-dom'
import showcaseImg from '../../../assets/images/heroImage.png'
import { 
  Home, 
  Img, 
  Showcase, 
  ShowcaseBtn, ShowcaseContainer, 
  ShowcaseContent, ShowcaseImg, ShowcaseText, 
  ShowcaseTitle, Step, Title, Desc, Card, Focus, 
  FocusImg, FocusText, Steps, About, AboutText, 
  AboutCards } from '../../../Styled'

import focus from '../../../assets/images/focus.png'
import Accordion from '../../blocks/Accordion'
import { FaArrowCircleRight, FaAward, FaMarker } from 'react-icons/fa'
import '../../blocks/Accordion.css'
import { useAuth0 } from "@auth0/auth0-react";
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import CreateIcon from '@mui/icons-material/Create';
import PieChartIcon from '@mui/icons-material/PieChart';

// import SubjectSlider from '../../blocks/SubjectSlider'


const HomePage = () => {
  const { loginWithRedirect } = useAuth0();

    return (
      <Home>
        <ShowcaseContainer>
          <Showcase>
            <ShowcaseText>
              <ShowcaseTitle>Your 24/7 Academic and Professional Work Helper</ShowcaseTitle>
              <ShowcaseContent>
                <p className="icon"> <FaArrowCircleRight/> Let your friend help you with any academic and professional works</p>
                <p className="icon"> <FaMarker/> Get expert-verified assistance on your work very fast </p>
                <p className="icon"> <FaAward/> We are trusted by thousands of students and professionals across the world </p>
              </ShowcaseContent>
                <ShowcaseBtn className="btn"
                    onClick={() =>
                      loginWithRedirect({
                        screen_hint: "signup",
                      })
                    } >
                      Click here
            </ShowcaseBtn>
            </ShowcaseText>
            <ShowcaseImg>
              <Img src={showcaseImg} alt="" />
            </ShowcaseImg>
          </Showcase>
          {/* <ShowcaseSlide>
                            <SubjectSlider/>
                        </ShowcaseSlide> */}
        </ShowcaseContainer>

        <About>
          <AboutText>
            <Title className="colored">What we do</Title>
            <Desc className="desc">
            We allow you to focus on the main work. 
            We would go through all the stress and get you best quality results 
            while carrying you along through all the processes.
            <p>
              What matter to us is that unique result that will make your work
              the best of its kind. This is what we are here for! 
            </p>
            </Desc>
          </AboutText>
          <AboutCards>
            <Steps>
              <Card>
                <Step>1</Step>
                <Title>Ask Questions</Title>
                <Desc>
                 We are availabe 24/7 to work with you. 
                 Is it research or writing. Talk to us!
                </Desc>
              </Card>
              <Card>
                <Step>2</Step>
                <Title>Get Help</Title>
                <Desc>
                 We are much glad to help you as fast as possible. 
                 Give us a try!
                </Desc>
              </Card>
              <Card>
                <Step>3</Step>
                <Title>Go Beyond</Title>
                <Desc>
                  This is Computer age. Focus on what matters and go beyond!
                </Desc>
              </Card>
            </Steps>
          </AboutCards>
        </About>

        

        <Focus>
          <FocusImg>
            <img src={focus} alt="" />
          </FocusImg>
          <FocusText>
            <Title className="colored">Our Focus</Title>
            <Desc className="desc">
             Workmate focuses on three main areas; 
             <p> <LibraryBooksIcon /> Research</p>
             <p> <CreateIcon /> Writing </p> 
             <p> <PieChartIcon /> Data Analyses </p> 
             <p> 
                We have experts that focus on each area 
                to help you get the best results within the shortest period possible. 
             </p>  
            </Desc>
          </FocusText>
        </Focus>

        <div className="accordion">
          <Accordion/>
        </div>
      </Home>
    );
}


export default HomePage
