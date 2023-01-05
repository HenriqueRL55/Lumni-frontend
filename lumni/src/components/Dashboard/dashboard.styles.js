import styled from "styled-components/macro";

export const Container = styled.div`
    margin: 30px auto;
    background-color: #fff;
    border: 1px solid #e0e0e0;
    border-radius: 2px;
    max-width: 80vw;
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-radius: 10px;

    @media screen and (max-width: 700px) {
        margin-top: 100px;
        margin-bottom: 50px;
        max-width: 94vw;
        padding-left: 0px;
    }
`;

export const ContainerRow = styled.div`
    display: grid;
    grid-template-areas: "column1 column2";
    grid-auto-columns: 1fr;
    border-top: 1px solid #e0e0e0;

    @media screen and (max-width: 970px) {
        grid-template-areas:
            "column1"
            "column2";
    }
`;

export const Column1 = styled.div`
    grid-area: column1;
    padding-left: 20px;
    padding-bottom: 20px;
`;

export const Column2 = styled.div`
    grid-area: column2;
    border-left: 1px solid #e0e0e0;
    padding: 10px 50px;
    @media screen and (max-width: 970px) {
        border-top: 1px solid #e0e0e0;
        border-left: 0px solid #e0e0e0;
        padding: 12px;
    }
`;

export const InsideColumn2 = styled.div`
    display: grid;
    grid-template-areas:
        "chart info info"
        "chart info info"
        "chart date date";
    @media screen and (max-width: 970px) {
        grid-template-areas:
            "info info chart"
            "info info chart"
            "date date chart";
    }
    @media screen and (max-width: 450px) {
        grid-template-areas:
            "date date date"
            "info info info"
            "chart chart chart";
    }
`;

export const Info = styled.div`
    grid-area: info;
    @media screen and (max-width: 970px) {
        margin-left: 10px;
    }
    @media screen and (max-width: 450px) {
        margin-top: 20px;
    }
`;

export const Chart = styled.div`
    grid-area: chart;
    @media screen and (max-width: 450px) {
        padding: 1.8rem;
        margin: 0px auto;
    }
`;

export const Date = styled.div`
    grid-area: date;
    @media screen and (max-width: 450px) {
        margin-top: 20px;
    }
`;

export const Title = styled.div`
    grid-area: title;
    border-bottom: 1px solid #e0e0e0;
    font-size: 22px;
    padding: 10px 10px 10px 18px;
    font-weight: 500;
    font-family: "Roboto";
    color: #444446;
`;

export const FilterRow = styled.div`
    display: grid;
    padding: 10px;
    grid-template-columns: 1fr 1fr 1fr 1fr;

    grid-template-rows: 3rem 5rem;

    @media screen and (max-width: 1358px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
    @media screen and (max-width: 746px) {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: repeat(2, 3rem 1fr);
    }
    @media screen and (max-width: 444px) {
        grid-template-columns: repeat(1, 1fr);
        grid-template-rows: repeat(3, 3rem 1fr);
    }
`;
export const FilterHeader0 = styled.div`
    text-align: left;
    margin: 20px 0px -20px 20px;
    font-size: 16px;
    font-weight: 300;
    font-family: "Roboto";
    border-bottom: none;
    color: #444446;
    @media screen and (max-width: 746px) {
        grid-column: 1/2;
        grid-row: 1/2;
    }
    @media screen and (max-width: 444px) {
        text-align: center;
        margin-left: 0;
        grid-row: 1;
    }
`;
export const FilterHeader1 = styled.div`
    text-align: left;
    margin: 20px 0px -20px 20px;
    font-size: 16px;
    font-weight: 300;
    font-family: "Roboto";
    border-bottom: none;
    color: #444446;
    @media screen and (max-width: 746px) {
        grid-column: 2/3;
        grid-row: 1/2;
    }
    @media screen and (max-width: 444px) {
        text-align: center;
        grid-column: 1;
        margin-left: 0;
        grid-row: 3;
    }
`;
export const FilterHeader2 = styled.div`
    text-align: left;
    margin: 20px 0px -20px 20px;
    font-size: 16px;
    font-weight: 300;
    font-family: "Roboto";
    border-bottom: none;
    color: #444446;
    @media screen and (max-width: 444px) {
        grid-row: 5;
        text-align: center;
        margin-left: 0;
    }
`;
export const FilterColumn0 = styled.div`
    grid-column: 1 / 2;
    padding-left: 20px;
    padding-bottom: 20px;
    grid-row: 2;
    @media screen and (max-width: 746px) {
        grid-column: 1/2;
        grid-row: 2/3;
    }
    @media screen and (max-width: 444px) {
        grid-row: 2;
        padding: 10px;
        margin-top: -10px;
    }
`;
export const FilterColumn1 = styled.div`
    grid-column: 2 / 3;
    padding-left: 20px;
    padding-bottom: 20px;
    grid-row: 2;
    @media screen and (max-width: 746px) {
        grid-column: 2/3;
        grid-row: 2/3;
    }
    @media screen and (max-width: 444px) {
        grid-row: 4;
        grid-column: 1;
        padding: 10px;
        margin-top: -10px;
    }
`;
export const FilterColumn2 = styled.div`
    grid-column: 3 / 4;
    grid-row: 2;
    padding-left: 20px;
    padding-bottom: 20px;
    @media screen and (max-width: 746px) {
        grid-column: 1/2;
        grid-row: 4/5;
    }
    @media screen and (max-width: 444px) {
        grid-row: 6;
        padding: 10px;
        margin-top: -10px;
    }
`;
