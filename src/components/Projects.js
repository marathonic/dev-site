import React from "react";
import "../styles/projects.css";

export const Projects = () => {
  const repos = [
    { title: "animeLog", img: "src", description: "A free anime tracker" },
    {
      title: "heroFinder",
      img: "src",
      description: "Where's Waldo, but with superheroes",
    },
    {
      title: "starShip",
      img: "src",
      description: "Battleship, but trekkie",
    },
  ];

  const mappedRepos = repos.map((repo) => {
    return (
      <a
        href="https://www.google.com"
        key={repo.title}
        className="single-project-container"
      >
        <div className="project-preview">
          <span>
            <h3 className="project-title">{`${repo.title}`}</h3>
            <p className="project-description">{repo.description}</p>
          </span>
        </div>
      </a>
    );
  });

  return (
    <div className="projects-container">
      <h1 className="h1-section h1-projects alt-h1-shadow">Featured</h1>
      <div className="mapped-repos-container">{mappedRepos}</div>
    </div>
  );
};
