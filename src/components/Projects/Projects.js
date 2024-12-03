import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import crowdrunner from "../../Assets/Projects/crowdrunner.png";
import platformer from "../../Assets/Projects/platformer.png";
import monstershooter from "../../Assets/Projects/monstershooter.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent<strong className="purple"> Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Đây là một vài dự án mà tôi đang thực hiện gần đây
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crowdrunner}
              isBlog={false}
              title="Crowd Runner 3D"
              description="Đây là dự án tôi vừa làm vừa học thêm kiến thức về làm Game 3D."
              ghLink="https://github.com/duytan12a7/CrowdRunner"
            // demoLink=""
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={platformer}
              isBlog={false}
              title="Platformer 2D"
              description="Đây là dự án tôi vừa làm vừa học thêm kiến thức về làm Game 2D."
              ghLink="https://github.com/duytan12a7/Platformer_Demo"
            // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={monstershooter}
              isBlog={false}
              title="Monster Shooter 3D"
              description="Đây là dự án tôi vừa làm vừa học thêm kiến thức về làm Game bắn súng 3D."
              ghLink="https://github.com/duytan12a7/monster_shooter"
            // demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
