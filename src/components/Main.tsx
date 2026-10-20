import type { ReactNode } from "react";
import styled from "styled-components";

const StyledMain = styled.main`
    width: 70%;
    min-height: 100vh;
    background-color: #f0f4f8;
    padding: 3%;
    line-height: 1.6;

    h2 {
        margin-top: 20px;
        margin-bottom: 10px;
    }

    h3, p { margin-bottom: 10px; }

    ul {
        padding-left: 24px;
        margin-bottom: 16px;
    }

    li { margin-bottom: 6px; }

    @media (max-width: 1000px) {
        width: 100%;
    }
`;

interface MainProps {
    children: ReactNode;
}

export default function Main({ children }: MainProps) {
    return <StyledMain>{children}</StyledMain>;
}
