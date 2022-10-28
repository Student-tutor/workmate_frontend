import React from 'react'
import { Link } from 'react-router-dom'
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
import { FaArrowCircleRight, FaAward, FaMarker, FaCheckCircle, } from 'react-icons/fa'
import '../../blocks/Accordion.css'
import { useAuth0 } from "@auth0/auth0-react";
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import CreateIcon from '@mui/icons-material/Create';
import PieChartIcon from '@mui/icons-material/PieChart';

// import SubjectSlider from '../../blocks/SubjectSlider'


const HomePage = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

    return (
      <Home>
        <ShowcaseContainer>
          <Showcase>
            <ShowcaseText>
              {/* <ShowcaseTitle>Your 24/7 Academic and Professional Work Helper</ShowcaseTitle> */}
              <ShowcaseTitle>Connecting you to the <span>top 1%</span>  Academic Research Experts </ShowcaseTitle>
              <ShowcaseContent>
                {/* <p className="icon"> <FaArrowCircleRight/> Let your friend help you with any academic and professional works</p> */}
                <p className="icon"> Join Workmate today and get expert-verified assistance on your research, so fast... </p>
                {/* <p className="icon"> <FaAward/> We are trusted by thousands of students and professionals across the world </p> */}
                  </ShowcaseContent>
                  {!isAuthenticated ?
                    <ShowcaseBtn className="btn"
                        onClick={() =>
                          loginWithRedirect({
                            screen_hint: "signup",
                          })
                        } >
                          Hire Researchers
                </ShowcaseBtn>
                   :
                   <Link to="/dashboard" style={{ textDecoration: 'none' }}>
                   <ShowcaseBtn className="btn">
                        Go to Dashboard
                </ShowcaseBtn>
                </Link>
                   }
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
                <Title>Talk to us</Title>
                <Desc>
                 We are availabe 24/7 to work with you. 
                 Is it research or writing. Talk to us!
                </Desc>
              </Card>
              <Card>
                <Step>2</Step>
                <Title>Get Connected to Researchers</Title>
                <Desc>
                 We are much glad to help you as fast as possible. 
                 Give us a try!
                </Desc>
              </Card>
              <Card>
                <Step>3</Step>
                <Title>Go Beyond</Title>
                <Desc>
                  Get expert-verified research help and Focus on what matters!
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
            <Title className="colored">Why Working with Workmate</Title>
            <Desc className="desc">
             {/* <p className='focus-title'> Workmate focuses on three main areas; </p> */}
             <p className='focus'> <FaCheckCircle /> Expert-verified research</p>
             <p className='focus'><FaCheckCircle /> Top-notch non-plagiarised writing </p> 
             <p className='focus'><FaCheckCircle /> Accurate data Analyses </p> 
             {/* <p> 
                We have experts that focus on each area 
                to help you get the best results within the shortest period possible. 
             </p>   */}
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
