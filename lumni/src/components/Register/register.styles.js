import styled from "styled-components/macro";

export const Container = styled.div`
    margin: 10% auto;
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-radius: 20px;
    border: 1px solid rgba(209, 213, 219, 0);
    box-shadow: 4px 2px 50px rgba(0, 0, 0, 0.2);
    max-width: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media screen and (max-width: 700px) {
        margin: 100px auto;
    }
`;

export const FieldsContainer = styled.div`
    width: 370px;
    margin-top: 20px;
    @media screen and (max-width: 700px) {
        width: 250px;
    }
`;

export const MainTitle = styled.h1`
    color: blue;
    padding-top: 30px;
    font-family: "Roboto", "sans-serif";
    font-size: 2.5rem;
    letter-spacing: 0.2px;
    text-align: center;
    @media screen and (max-width: 700px) {
        font-size: 2.1rem;
    }
`;

export const PasswordContainer = styled.div`
    display: flex;
`;
