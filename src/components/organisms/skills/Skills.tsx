import React from "react";
import ProgressBar from "../../atoms/progressBar/ProgressBar";
import { Title } from "../../atoms/text/Text";
import Writing from "../../../copywriting/Writing";
import { ColumnLeft, ColumnRight } from "../../templates/Layouts.style";
import { ContainerSkills, RowSkills } from "./skills.style";

const Skills: React.FC = ({}) => {
  const texts = Writing();

  return (
    <ContainerSkills data-aos="fade-up">
      <Title>{texts.skills.title}</Title>
      <RowSkills>
        <ColumnLeft
          style={{
            justifyContent: "space-between",
          }}
        >
          <ProgressBar title="GOOGLE CLOUD PLATAFORM" status="EXPERT" />
          <ProgressBar title="FASTIFAY" status="EXPERT" />
          <ProgressBar title="JAVASCRIPT" status="EXPERT" />
          <ProgressBar title="NODE JS" status="EXPERT" />
        </ColumnLeft>
        <ColumnRight style={{ justifyContent: "space-between" }}>
          <ProgressBar title="GO" status="ALTO" />
          <ProgressBar title="TYPESCRIPT" status="ALTO" />
          <ProgressBar title="EXPRESS JS" status="ALTO" />
          <ProgressBar title="DOCKER" status="ALTO" />
        </ColumnRight>
      </RowSkills>
    </ContainerSkills>
  );
};

export default Skills;
