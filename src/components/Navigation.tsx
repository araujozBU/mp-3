import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNavigation = styled.nav`
    width: 30%;
    background-color: #d9e2ec;
    padding: 2%;

    ul {
        display: flex;
        flex-direction: column;
        list-style: none;
        gap: 16px;
    }

    a {
        display: block;
        padding: 8px;
        color: #243b53;
        font-size: calc(14px + 0.3vw);
    }

    @media (max-width: 1000px) {
        width: 100%;
    }

    @media (max-width: 750px) {
        ul {
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            gap: 4px;
        }
    }
`;

export default function Navigation() {
    return (
        <StyledNavigation>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/education">Education</Link></li>
                <li><Link to="/experience">Experience</Link></li>
                <li><Link to="/skills">Skills</Link></li>
                <li><Link to="/extracurriculars">Extracurriculars</Link></li>
                <li><Link to="/achievements">Achievements</Link></li>
                <li><Link to="/projects">Projects</Link></li>
            </ul>
        </StyledNavigation>
    );
}
