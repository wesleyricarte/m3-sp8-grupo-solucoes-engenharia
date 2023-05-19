import styled from "styled-components";

const Form = styled.form`
    max-width: 500px;
    min-width: 400px;
  width: 25%;
  border: 2px solid var(--color-grey-100);
  border-radius: 4px;
  margin: 0 auto;
  padding: 30px 20px;
button{
  padding: 20px;
  font-size: 1.25rem;
  
}
.positionButton{
  display: flex;
  justify-content: space-between;
}
.linkHome{
  font-weight:600;
  font-size:20px;
  padding: 3px;
  color: var(--color-primary);
}
.buttonGreyRegister{
  border: solid 1px var(--color-grey-100);
}
  @media (max-width: 800px) {
    width: 90%;
    height: fit-content;
    margin-top: 20px;
    padding-bottom: 20px;
  }
`;

const ImgLogo = styled.img`
  width: 77%;
  height: 104px;
  display: flex;
  margin: 0 auto;
  margin-top: 10px;
`;

const TitleRegister = styled.h2`
  color: var(--color-grey-600);
  font-size: 20px;
  font-weight: 500;
  margin-top: 5px;
`;

const ErrorMessage = styled.span`
  color: red;
  font-size: 12px;
  display: flex;
`;

export { Form, ImgLogo, TitleRegister, ErrorMessage };
