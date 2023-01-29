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

    @media screen and (max-width: 860px) {
        grid-template-areas:
            "column2 "
            "column1";
    }
`;

export const Column1 = styled.div`
    display: grid;
    grid-area: column1;
    border-right: 1px solid #e0e0e0;
    grid-template-areas:
        "filters"
        "piechart";
`;

export const Column2 = styled.div`
    display: grid;
    grid-area: column2;
    grid-template-areas:
        "characterlevel"
        "chart2";
`;

export const Character = styled.div`
    display: grid;
    grid-area: characterlevel;
    border-bottom: 1px solid #e0e0e0;
    align-items: center;
    justify-items: center;
    @media screen and (max-width: 860px) {
        height: 120px;
    }
`;

export const Chart2 = styled.div`
    display: grid;
    grid-area: chart2;
    align-items: center;
    justify-items: center;
    padding-top: 14px;
    @media screen and (max-width: 860px) {
        height: 80px;
        border-bottom: 1px solid #e0e0e0;
    }
`;

export const InsideColumnFilter = styled.div`
    display: grid;
    grid-area: filters;
    padding-top: 12px;
    grid-template-areas:
        "levelfilter"
        "userfilter";
`;

export const LevelFilter = styled.div`
    display: grid;
    grid-area: levelfilter;
`;

export const UserFilter = styled.div`
    display: grid;
    grid-area: userfilter;
`;

export const InsideColumnChart = styled.div`
    display: grid;
    border-top: 1px solid #e0e0e0;
    grid-area: piechart;
    grid-template-areas:
        "filter filter"
        "chart info";
`;

export const Info = styled.div`
    display: grid;
    grid-area: info;
`;

export const Chart = styled.div`
    display: grid;
    grid-area: chart;
    justify-content: center;
`;

export const Date = styled.div`
    grid-area: date;
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
