import React from "react";
import AppBar from "../components/organisms/AppBar";
import AboutSection from "./AboutSection";
import HomeSection from "./HomeSection";

const MainPage = () => (
    <div>
        <AppBar />
        <HomeSection />
        <AboutSection />
    </div>
)

export default MainPage;