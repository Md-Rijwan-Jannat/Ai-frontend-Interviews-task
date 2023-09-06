import { Outlet } from "react-router-dom";
import Container from "../component/Container";
import Header from "../component/Header";


const Main = () => {
    return (
        <Container>
            <Header></Header>
            <Outlet></Outlet>
        </Container>
    );
};

export default Main;