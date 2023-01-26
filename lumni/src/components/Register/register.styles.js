import styled from "styled-components/macro";

export const AllPage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: #03a9f4;
    transition: 0.5s;
`;

export const BlueBackground = styled.div`
    position: absolute;
    justify-content: center;
    align-items: center;
    display: flex;
    top: 40px;
    width: 100%;
    height: 420px;
    background: #fff;
    box-shadow: 0 5px 45px rgba(0, 0, 0, 0.15);
`;

export const BoxSignIn = styled.div`
    position: relative;
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const BoxSignUp = styled.div`
    position: relative;
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const FormBox = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background: #fff;
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 5px 45px rgba(0, 0, 0, 0.25);
    transition: 0.5s ease-in-out;
`;

export const Container = styled.div`
    position: relative;
    width: 800px;
    height: 500px;
    margin: 20px;
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
    margin: 20px 0;
`;
