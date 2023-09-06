import { Outlet } from "react-router-dom";
import Container from "../component/Container";


const Register = () => {
    return (
        <Container>
            <Outlet></Outlet>
        </Container>
    );
};

export default Register;