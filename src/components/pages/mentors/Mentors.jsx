import React from "react";
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
import { Link } from "react-router-dom";

const Mentors = () => {
  return (
    <div>
      <ShowcaseContainer>
        <Showcase>
          <ShowcaseText>
            <ShowcaseTitle>WorkMate for Schools and Teachers</ShowcaseTitle>
            <ShowcaseContent>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia
              expedita optio odio. Molestiae reiciendis et neque doloremque quis
              iure minus?
            </ShowcaseContent>
            <ShowcaseBtn href="" className="btn">
              Get Your Teacher Account
            </ShowcaseBtn>
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
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio
          aperiam, amet vitae ducimus ullam aut modi commodi totam illum
          pariatur nesciunt magni ut quibusdam, possimus accusamus non sint
          corrupti minima doloribus odio facili.
        </Desc>
      </WhoWeAre>
      <WhatWeDo>
        <WhatWeDoText>
          <Title className="title">WHAT WE DO</Title>
          <SubTitle>We answer questions.</SubTitle>
          <Desc className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
            perferendis maxime culpa delectus debitis voluptatibus sapiente,
            iste mollitia placeat, saepe quidem a accusamus, corporis ipsum.
            Culpa repellendus eligendi ut animi?
          </Desc>
        </WhatWeDoText>
        <WhatWeDoImg>
          <img src={wedo} alt="" />
        </WhatWeDoImg>
      </WhatWeDo>

      <WorkWith>
        <WorkWithText>
          <Title className="title">WE WORK WITH SCHOOLS AND EDUCATORS</Title>
          <Desc className="desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam,
            officiis similique excepturi minus at eum commodi ipsa esse
            doloremque quos nobis soluta laboriosam illum consectetur
            repudiandae sint iusto beatae perspiciatis?
          </Desc>
        </WorkWithText>
        <WorkWithImg>
          <img src={wedo} alt="" />
        </WorkWithImg>
      </WorkWith>

      <YourInput>
        <YourInputImg>
          <img src={wedo} alt="" />
        </YourInputImg>
        <YourInputText>
          <Title className="title">WE WANT YOUR INPUT</Title>
          <Desc className="desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam,
            officiis similique excepturi minus at eum commodi ipsa esse
            doloremque quos nobis soluta laboriosam illum consectetur
            repudiandae sint iusto beatae perspiciatis?
          </Desc>
        </YourInputText>
      </YourInput>

      <Banner>
        <BannerText>
          <Title className="title">REQUEST A TEACHER ACCOUNT</Title>
          <Desc className="desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim
            itaque labore, tempore deleniti magni, suscipit consequatur dolorem
            adipisci at, architecto eos ipsum odio molestiae sint similique
            quia. Est, officia quam?
          </Desc>
          <Link to="/" className="btn">
            Get your teacher account
          </Link>
        </BannerText>

        <BannerImg>
          <img src={wedo} alt="" />
        </BannerImg>
      </Banner>
    </div>
  );
};

export default Mentors;
