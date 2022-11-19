import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import project1 from "../../assets/img/ss-project.jpeg"

export default function Content3() {
  return (
    <div className="content-3" id="exp">
      <br/>
      <h2 className="text-center text-dark py-5">My Experience</h2>
      <div className="card-project justify-content-center text-center">
      <Card style={{ width: "18rem" }} data-aos="zoom-in" data-aos-delay="400"
    data-aos-duration="1000">
        <Card.Img variant="top" src={project1} />
        <Card.Body>
          <Card.Title>SineasMov</Card.Title>
          <Card.Text className="text-card">
            This is a project to build a website for streaming film and i was a front end at this project. 
          </Card.Text>
          <Button variant="outline-dark" href="https://sineas-next-js.vercel.app/">
          <span className="text-button">Check it Out!</span>
          </Button>
        </Card.Body>
      </Card>
      </div>
    </div>
  )
}
