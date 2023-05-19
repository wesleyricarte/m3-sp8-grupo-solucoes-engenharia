import styled from "styled-components";
export const StyledNotFound = styled.main`
background-color: #15161a;
width: 100vw;
height: 100vh;
.position{
    position: absolute;
    top: 25%;
    right: 33%;
    display: flex;
    margin:0 auto;
    justify-content: center;
    align-items: center;
    flex-direction:column;
    gap: 50px;
}
h1{
    color: #ff4d4d;
    font-size: 34px;
}
span{
    color: #ffffff;
    font-size: 34px;
    display: flex;
    gap: 20px;
}
.navigate{
    width: 100%;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
  border-radius: 4px;
  padding: 10px 0;
  background-color: var(--color-primary);
  color: var(--color-white);
  transition: 0.2s ease;
  margin-top: 10px;

  :hover {
    background-color: var(--color-secundary);
    transition: 0.2s ease;
  }
}

`