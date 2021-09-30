import React from 'react'
import { NavLink } from 'react-router-dom'
import showcaseImg from '../../../assets/images/heroImage.png'
import { Home, Img, Showcase, ShowcaseBtn, ShowcaseContainer, ShowcaseContent, ShowcaseImg, ShowcaseText, ShowcaseTitle, Step, Title, Desc, Card, Focus, FocusImg, FocusText, Steps, About, AboutText, AboutCards } from '../../../Styled'
import focus from '../../../assets/images/focus.png'
import Accordion from '../../blocks/Accordion'
import { FaArrowCircleRight, FaAward, FaMarker } from 'react-icons/fa'
import '../../blocks/Accordion.css'
// import SubjectSlider from '../../blocks/SubjectSlider'


const HomePage = () => {
    return (
      <Home>
        <ShowcaseContainer>
          <Showcase>
            <ShowcaseText>
              <ShowcaseTitle>Your 24/7 Academic Work Helper</ShowcaseTitle>
              <ShowcaseContent>
                <p className="icon"> <FaArrowCircleRight/> Let millions of your freinds help you with any academic works</p>
                <p className="icon"> <FaMarker/> Get expert-verified assistance on your work very fast </p>
                <p className="icon"> <FaAward/> We are trusted by 10 million students across the world </p>
              </ShowcaseContent>
              <NavLink to="/">
                <ShowcaseBtn className="btn">
                  Click here
                </ShowcaseBtn>
              </NavLink>
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem incidunt a quae doloremque nam, quidem ullam minus
              vero, animi qui exercitationem et fuga consequuntur! Suscipit
              reiciendis exercitationem quae ducimus nostrum provident numquam
              pariatur. Reiciendis odio placeat magnam dolorum rem. Mollitia?
            </Desc>
          </AboutText>
          <AboutCards>
            <Steps>
              <Card>
                <Step>1</Step>
                <Title>Ask Questions</Title>
                <Desc>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Blanditiis, sed.
                </Desc>
              </Card>
              <Card>
                <Step>2</Step>
                <Title>Get Help</Title>
                <Desc>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Blanditiis, sed.
                </Desc>
              </Card>
              <Card>
                <Step>3</Step>
                <Title>Go Beyond</Title>
                <Desc>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Blanditiis, sed.
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              optio exercitationem cum illo dolorem, distinctio odit culpa
              magnam similique numquam iure illum quod aliquid quo reiciendis
              maxime esse rem possimus fuga provident odio et fugit voluptate
              animi! Impedit neque, quos provident non vitae quo vel voluptatum
              rerum sed ut alias commodi, amet blanditiis sunt quod facilis
              reiciendis magnam odit accusantium.
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
