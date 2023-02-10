import React from "react";
import "../styles/projects.css";

export const Projects = () => {
  const repos = [
    {
      title: "myAnimeLog",
      img: "src",
      description: "I made this to track my anime",
      link: "https://myanimelog.vercel.app/",
    },
    {
      title: "SuperFinder",
      img: "src",
      description: "Where's Waldo, but with superheroes",
      link: "https://marathonic.github.io/photo-tagging-app/",
    },
    {
      title: "Hollywander's",
      img: "src",
      description: "Mock online shop",
      link: "https://marathonic.github.io/online-shop/",
    },
  ];

  const mappedRepos = repos.map((repo) => {
    return (
      <a
        href={repo.link}
        key={repo.title}
        target="_blank"
        rel="noopener noreferrer"
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
