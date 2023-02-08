import React from "react";
import "../styles/projects.css";

export const Projects = () => {
  const repos = [
    { title: "animeLog", img: "src" },
    { title: "heroFinder", img: "src" },
    { title: "starShip", img: "src" },
  ];

  const mappedRepos = repos.map((repo) => {
    return (
      <div key={repo.title} className="project-preview">
        <span>
          <p>{`${repo.title}`}</p>
        </span>
      </div>
    );
  });

  return (
    <div className="projects-container">
      <h1 className="h1-section">Featured</h1>
      <div className="mapped-repos-container">{mappedRepos}</div>
    </div>
  );
};
