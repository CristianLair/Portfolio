import React from "react";
import "./home.css";
import { HeroTitle, SubTitleHero } from "../../atoms/text/Text";
import TypeWriter from "../../molecules/typeWriter/TypeWriter";
import Writing from "../../../copywriting/Writing";
import { ContainerHome } from "./home.style";
import DownloadCV from "../../molecules/downloadCV/DownloadCV";

const Home: React.FC = () => {
  const texts = Writing();

  return (
    <>
      <DownloadCV />
      <ContainerHome id="home">
        <div className="contText" data-aos="zoom-in" data-aos-delay="100">
          <HeroTitle>Cristian Lair</HeroTitle>
          <div className="heroSubtitle">
            <SubTitleHero>{texts.hero.my}</SubTitleHero>

            <TypeWriter strings={[texts.hero.title1, texts.hero.title2]} />
          </div>
        </div>
      </ContainerHome>
    </>
  );
};

export default Home;
