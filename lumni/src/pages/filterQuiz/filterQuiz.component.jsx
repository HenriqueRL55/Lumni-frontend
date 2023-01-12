import { useEffect } from "react";

/*Components*/
import Header from "../../components/header/header.component";
import FilterQuizData from "../../components/filterQuiz/filterQuiz.component";

export function Filter() {
    useEffect(() => {
        document.body.style.background = "#fafafa";
    }, []);
    return (
        <>
            <Header />
            <FilterQuizData />
        </>
    );
}
