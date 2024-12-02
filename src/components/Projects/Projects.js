import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import crowdrunner from "../../Assets/Projects/crowdrunner.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent<strong className="purple"> Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Đây là một vài dự án mà tôi đã thực hiện gần đây
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crowdrunner}
              isBlog={false}
              title="Crowd Runner"
              description="Đây là dự án tôi vừa làm vừa học thêm kiến thức về làm Game 3D cơ bản."
              ghLink="https://github.com/duytan12a7/CrowdRunner"
            // demoLink=""
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crowdrunner}
              isBlog={false}
              title="Platformer 2D"
              description="Đây là dự án tôi vừa làm vừa học thêm kiến thức về làm Game 2D cơ bản."
              ghLink="https://github.com/duytan12a7/Platformer_Demo"
            // demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
