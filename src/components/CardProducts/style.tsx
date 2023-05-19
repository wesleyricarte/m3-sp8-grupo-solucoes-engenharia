import styled from "styled-components";

export const CardStyles = styled.li`
    width: 340px;
    
    height: 100px;
    border: 1px solid var(--color-grey-100);
    border-radius: 8px;
    div{
        display: flex;
    }
    img{
        height: 80px;
    width: 80px;
    margin: 10px;
    }
    display: flex;
`
export const InfoDiv = styled.div`
    height: 100%;
    width: 100%;
    padding: 15px 0px;
    display: flex;
    flex-direction: column;
    div > div{
        height: 10px;
        width: 100%;
        margin: 5px;
        display: flex;
        flex-direction: column;
    }
`

export const IconDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 25%;
    width: 50px;
    *{
        cursor: pointer;
    }
`