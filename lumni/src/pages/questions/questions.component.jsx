import { useEffect } from "react";

/*Components*/
import Header from "../../components/header/header.component";
import QuestionsData from "../../components/Questions/questions.component";

export function Questions() {
    useEffect(() => {
        document.body.style.background = "#fafafa";
    }, []);
    return (
        <>
            <Header />
            <QuestionsData />
        </>
    );
}
