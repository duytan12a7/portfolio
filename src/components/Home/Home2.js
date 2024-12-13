import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import myImg from "../../Assets/avatar.svg";
import myImg from "../../Assets/avatar.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import Techstack from "../About/Techstack";
import Toolstack from "../About/Toolstack";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              ĐỂ TÔI <span className="purple"> GIỚI THIỆU </span> VỀ BẢN THÂN
            </h1>
            <p className="home-about-body">
              Tôi thích lập trình và ít nhất tôi cũng đã học được
              một vài thứ, tôi nghĩ vậy… 🤷‍♂️
              <br />
              <br />Tôi đã từng học một số ngôn ngữ như 
              <i>
                <b className="purple">  Javascript, TypeScript  </b>và gần đây là <b className="purple">C#</b>.
              </i>
              <br />
              {/* <br/>Tôi đang bổ sung thêm những kiến thức cần thiết như
              <b className="purple">  SOLID, Design Pattern,... </b>
              <br /> */}
              <br />
              Lĩnh vực mà tôi quan tâm là &nbsp;
              <i>
                <b className="purple">Lập trình Game với Unity Engine</b> 
                {/* and */}
                {/* also in areas related to{" "}
                <b className="purple">
                  Blockchain.
                </b> */}
              </i>
              <br />
              {/* <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i> */}
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid avatar-circle" alt="avatar" />
            </Tilt>
          </Col>
        </Row>

        <h1 className="project-heading">
          <strong className="purple">Skillset </strong>
        </h1>
        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools and Engine</strong> I use
        </h1>
        <Toolstack />

        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/duytan12a7"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li> */}
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/tannguyendev/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://www.instagram.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li> */}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
