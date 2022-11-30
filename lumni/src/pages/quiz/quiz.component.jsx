import { useEffect } from "react";

/*Components*/
import Header from "../../components/header/header.component";
import QuizData from "../../components/Quiz/quiz.component";

export function Quiz() {
    useEffect(() => {
        document.body.style.background = "#fafafa";
    }, []);
    return (
        <>
            <Header />
            <QuizData />
        </>
    );
}
