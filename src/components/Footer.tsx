import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledFooter = styled.footer`
    background-color: #243b53;
    color: white;
    padding: 2%;

    a { color: white; }
`;

export default function Footer() {
    return (
        <StyledFooter>
            <p>All rights reserved by Zaki Araujo &copy; <Link to="/">Credits</Link></p>
        </StyledFooter>
    );
}
