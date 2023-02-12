import React, { useEffect } from "react";
import "../styles/projects.css";
import { useInView } from "react-intersection-observer";
import {
  GiBroadsword,
  GiSpellBook,
  GiMagnifyingGlass,
  GiShoppingCart,
} from "react-icons/gi";

export const Projects = ({
  isTablet,
  isDesktop,
  setCurrentScroll,
  currentScroll,
}) => {
  // ++++++++++++ EXCELLENT!!! This works, now just implement the same logic for the other sections

  const [projectsRef, projectsInView] = useInView({
    triggerOnce: false,
    threshold: 0.9,
  });

  useEffect(() => {
    if (currentScroll === "proj") return;
    if (projectsInView) {
      setCurrentScroll("proj");
    }
  }, [projectsInView]);

  const repos = [
    {
      title: "myAnimeLog",
      // img: "/myAnimeLogScreenshot.png",
      type: "anime",
      description: "I made this to keep track of my anime",
      link: "https://myanimelog.vercel.app/",
    },
    {
      title: "SuperFinder",
      type: "game",
      img: "src",
      description: "Where's Waldo, but with superheroes",
      link: "https://marathonic.github.io/photo-tagging-app/",
    },
    {
      title: "Hollywander's",
      type: "ecommerce",
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
          <div className="project-thumbnail-div">
            {/* <img src={repo.img} alt="logo"></img> */}
            {repo.type === "anime" ? (
              <GiSpellBook size={isTablet || isDesktop ? 100 : 50} />
            ) : (
              ""
            )}
            {repo.type === "game" && (
              <GiMagnifyingGlass size={isTablet || isDesktop ? 100 : 50} />
            )}
            {repo.type === "ecommerce" && (
              <GiShoppingCart size={isTablet || isDesktop ? 100 : 50} />
            )}
          </div>
        </div>
      </a>
    );
  });

  return (
    <div className="projects-container" ref={projectsRef} id="projects-id">
      <h1 className="h1-section h1-projects alt-h1-shadow">Featured</h1>
      <div className="mapped-repos-container">{mappedRepos}</div>
    </div>
  );
};
