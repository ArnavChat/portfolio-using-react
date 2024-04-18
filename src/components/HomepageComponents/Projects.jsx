import "../../css/Projects.css";

function Projects() {
  return (
    <>
      <section id="projects">
        <div className="left-container">
          <img
            src="/AppVITITE.png"
            alt="project-logo"
            className="APPVITITE-img"
          />
        </div>
        <div className="project-right-container">
          <h1>My Projects</h1>
          <p>Web Development Project: AppVITite Restaurant Website</p>
          <ul>
            <li>
              Designed and developed a captivating and visually appealing
              restaurant website from scratch.
            </li>
            <li>
              Revamped the user interface by seamlessly integrating HTML, CSS,
              and Bootstrap, resulting in a 40% increase in user engagement and
              a 25% decrease in bounce rate.
            </li>
            <li>
              <a
                href="https://arnavchat.github.io/AppVITite/"
                className="project-link" target="_blank"
              >
                Project Link
              </a>
            </li>
          </ul>
          <p>Web Development Project: IRCTC Homepage Clone</p>
          <ul>
            <li>
              Developed a responsive and visually appealing clone of the IRCTC
              website homepage using Bootstrap, HTML, and CSS.
            </li>
            <li>
              Elevated user engagement and reduced bounce rate by 40% through
              meticulous front-end development, skillfully implementing HTML and
              CSS to recreate design elements.
            </li>
            <li>
              <a
                href="https://arnavchat.github.io/IRCTC-homepage-CSS-Bootstrap/"
                className="project-link" target="_blank"
              >
                Project Link
              </a>
            </li>
          </ul>
        </div>
      </section>

      <hr style={{ width: "10%", borderTop: "dotted 5px", color: "#504d4d" }} />
    </>
  );
}

export default Projects;
