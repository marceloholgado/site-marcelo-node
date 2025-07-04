import React from "react";
import "./style.css";

function Home() {
  const projects = [
    {
      title: "Code Forge",
      description:
        "A Tool that generates the intial of a project currently supports C++. Made with Node.js in the backend and the frontend is React",
      image: "codeforge.png",
      url: "https://github.com/marceloholgado/CodeForge", // link do GitHub
    },
    {
      title: "Find Courses Web Page ",
      description:
        "This was a full Web App that I build using Java Spring Boot and MySQL. This web page support to view and manage courses",
      image: "global-nobg.png",
      url: "https://github.com/marceloholgado/encontre-cursos-webpage",
    },
    {
      title: "App for book BarberShop",
      description:
        "This an app for mobile to schedule an appointment in the barbershop. Made with flutter for mobile and backend in Node.js",
      image: "/images/projeto3.jpg",
      url: "https://github.com/seuusuario/projeto3",
    },
  ];

  return (
    <div className="home-container pt-96">
      <h1 className="section-title neon">Some of my latest work</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            className="project-card-link"
          >
            <div className="project-card">
              <img
                src={project.image}
                alt={project.title}
                className="project-image object-contain"
              />
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Home;
