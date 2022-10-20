import { useEffect } from "react";

/*Components*/
import Header from "../../components/header/header.component";
import DashboardData from "../../components/Dashboard/dashboard.component";
import { useContext } from "react";
import { AuthContext } from "../../context/auth";

export function Dashboard() {
    useEffect(() => {
        document.body.style.background = "#fafafa";
    }, []);
    const { authenticated, login, logout } = useContext(AuthContext);
    return (
        <>
            <Header />
            <DashboardData />
            <button onClick={() => logout()}>Logout</button>
        </>
    );
}
