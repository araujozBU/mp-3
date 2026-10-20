import { useEffect } from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
    background-color: #243b53;
    color: white;
    padding: 2%;
    text-align: left;

    @media (max-width: 750px) {
        text-align: center;
    }
`;

interface HeaderProps {
    title: string;
    description: string;
}

export default function Header({ title, description }: HeaderProps) {
    useEffect(() => {
        document.title = `${title} | Zaki Araujo`;
    }, [title]);

    return (
        <StyledHeader>
            <h1>{title}</h1>
            <p>{description}</p>
        </StyledHeader>
    );
}
