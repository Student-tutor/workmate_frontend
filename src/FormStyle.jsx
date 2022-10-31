import styled from "styled-components";

// Form


export const ApplyCont = styled.div`
padding: 20%; 
background-image: url("./assets/images/researcherBg.jpg");
background-repeat: no-repeat;

@media (max-width: 900px) {
  margin: 0 0;
  margin-left: -50px;  
  width: 100%;
  z-index: -1;
}


`

export const ContactCont = styled.div`
padding: 20%; 

@media (max-width: 900px) {
  margin: 0 0;
  margin-left: -50px;  
  width: 100%;
}
`

export const Background = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 900px) {   
  width: 145%;
  
}
`;
export const FormBackground = styled.div`
  width: 100%;
  height: 100vh;
  margin-top: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* z-index: 8; */

`;

export const Box = styled.div`
  width: 100%;
  height: auto;
  padding: 2%;
  border-radius: 10px;
  background: #ffffff;
  position: relative;
  box-shadow: 0 2px 3px 2px rgba(0, 0, 0, 0.3);


  .close {
    z-index: 999;
    color: #000;
  }

  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 30px;
  margin-top: 5vh;
  @media (max-width: 900px) {
    /* grid-gap: 10px; */
    /* margin-top: 8vh; */
    /* padding: 10px; */
    
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
    /* margin-bottom: 3vh; */
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
  grid-gap: 50px;
  align-items: center;

  .select{
    
        .msl {
      overflow: hidden;
      border: 1px solid #9c9c9c;
        border-top-color: rgb(156, 156, 156);
        border-right-color: rgb(156, 156, 156);
        border-bottom-color: rgb(156, 156, 156);
        border-left-color: rgb(156, 156, 156);
      border-radius: var(--border-radius);
      outline: none;
      cursor: text;
      transition: border-radius .2s;
      /* width: 32rem; */
      /* height: 50px; */
      margin-top: 10px;
    }

    .research-interest{
      margin-top: -10px;
    }
  }

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



export const Title = styled.h4`
  font-size: 3rem;
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

  @media (max-width: 900px) {
    font-size: 1.8rem;
  }
`;
