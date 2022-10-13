import styled from "styled-components/macro";

export const Container = styled.div`
    margin: 20px auto;
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-radius: 20px;
    border: 1px solid rgba(209, 213, 219, 0);
    box-shadow: 4px 2px 50px rgba(0, 0, 0, 0.2);
    max-width: 85%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media screen and (max-width: 700px) {
        margin: 100px auto;
    }
`;
