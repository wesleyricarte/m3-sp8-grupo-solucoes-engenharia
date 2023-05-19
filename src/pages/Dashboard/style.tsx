import styled from "styled-components";
export const StyledDashboard = styled.main`
  display: flex;
  justify-content: space-between;
  main {
    padding: 40px;
    width: 1145px;
    height: 100%;
  }
  .controlStock {
    display: flex;
    gap: 10px;
    h1 {
      font-size: 30px;
    }
    .iconStock {
      font-size: 50px;
      margin-top: 10px;
    }
  }
  .addProducts {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;
    .iconAdd {
      font-size: 60px;
    }
    p {
      font-size: 22px;
      color: var(--color-primary);
      font-weight: 700;
    }
  }
  ul {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
  .imgLayout {
    height: 100vh;
  }
`;
