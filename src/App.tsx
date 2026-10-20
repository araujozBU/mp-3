import styled from "styled-components";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Calculator from "./components/Calculator";
import Home from "./pages/Home";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";
import Extracurriculars from "./pages/Extracurriculars";
import Achievements from "./pages/Achievements";
import Projects from "./pages/Projects";

const PageWrapper = styled.div`
    width: 90%;
    margin: 0 auto;
`;

const Container = styled.div`
    display: flex;

    @media (max-width: 1000px) {
        flex-direction: column;
    }
`;

const pages = [
    {
        path: "/",
        title: "Home",
        description: "An introduction to my online resume.",
        content: <Home />,
    },
    {
        path: "/education",
        title: "Education",
        description: "My academic background and coursework.",
        content: <Education />,
    },
    {
        path: "/experience",
        title: "Experience",
        description: "My internships and student leadership experience.",
        content: <Experience />,
    },
    {
        path: "/skills",
        title: "Skills",
        description: "My programming languages, development tools, and spoken languages.",
        content: <Skills />,
    },
    {
        path: "/extracurriculars",
        title: "Extracurriculars",
        description: "My involvement in student organizations, mentoring, and AI learning.",
        content: <Extracurriculars />,
    },
    {
        path: "/achievements",
        title: "Achievements",
        description: "My academic awards and accomplishments.",
        content: <Achievements />,
    },
    {
        path: "/projects",
        title: "Projects",
        description: "Software and AI projects from my experience.",
        content: <><Projects /><Calculator /></>,
    }
];

const router = createBrowserRouter(
    pages.map((page) => ({
        path: page.path,
        element: (
            <PageWrapper>
                <Header title={page.title} description={page.description} />
                <Container>
                    <Navigation />
                    <Main>{page.content}</Main>
                </Container>
                <Footer />
            </PageWrapper>
        ),
    }))
);

export default function App() {
    return (
        <>
            <GlobalStyles />
            <RouterProvider router={router} />
        </>
    );
}
