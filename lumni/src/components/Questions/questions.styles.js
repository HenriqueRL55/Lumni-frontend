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
  height: 450px;

  @media screen and (max-width: 800px) {
    margin: 100px auto;
    overflow-x: scroll;
  }
`;

export const ContainerTitle = styled.div`
  display: grid;
  grid-template-areas: "title question";
  border-bottom: 1px solid #e0e0e0;
  padding: 20px 0;
  @media screen and (max-width: 800px) {
    grid-template-areas:
      "title"
      " question";
    margin: auto;
  }
`;

export const Title = styled.div`
  display: grid;
  grid-area: title;

  font-size: 22px;
  text-align: left;
  padding: 10px 10px 10px 18px;
  font-weight: 500;
  color: #2b2b2b;
  font-family: "Roboto";
  @media screen and (max-width: 700px) {
    text-align: center;
  }
`;

export const ADDQuestion = styled.div`
  display: grid;
  grid-area: question;
  width: 100%;
  justify-content: end;
  transform: translateX(-80px);
`;

export const Row1Modal = styled.div`
  display: grid;
  grid-area: Title;
  justify-content: center;
  margin: 20px;
`;

export const Row2Modal = styled.div`
  display: grid;
  grid-area: Filters;
  justify-content: center;
  margin: 20px;
`;

export const ContainerAddModalQuestion = styled.div`
  display: grid;
  justify-content: center;
  grid-template-areas:
    "question question"
    "answers answers"
    "level addIcon";
`;

export const Question = styled.div`
  display: grid;
  grid-area: question;
`;

export const Level = styled.div`
  display: grid;
  grid-area: level;
`;

export const Answers = styled.div`
  display: grid;
  width: 100%;
  grid-area: answers;
`;

export const AddIconModal = styled.div`
  display: grid;
  grid-area: addIcon;
  margin: 20px;
`;
