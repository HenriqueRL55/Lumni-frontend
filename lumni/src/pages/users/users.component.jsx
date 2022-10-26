import { useEffect } from "react";

/*Components*/
import Header from "../../components/header/header.component";
import UsersData from "../../components/Users/users.component";

export function Users() {
    useEffect(() => {
        document.body.style.background = "#fafafa";
    }, []);
    return (
        <>
            <Header />
            <UsersData />
        </>
    );
}
