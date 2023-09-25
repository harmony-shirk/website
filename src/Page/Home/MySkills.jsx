import data from "../../data/index.json";

export default function MySkills() {
  return(
    <section className="skills-section" id="mySkills">
    <div className="portfolio-container">
      <h2 className="skills-section-heading">Experience</h2>

    </div>
    <div className="skills-section-container">
      {data?.skills?.map((item, index) => (
        <div key={index}
        className="skills-section-card">
          <div className="skills-section-img-container">
            <div className="skills-section-img">
              <a href={item.link}>
              <img src={item.src} alt="Product Chain" className="exp-img"/></a>
            </div>
          </div>
        <div className="skills-section-card-content">
          <h3 className="skills-section-title">
            {item.title}
            <p className="skills-section-description">
              {item.description}
            </p>
          </h3>
          </div>
        </div>
      ))}
    </div>
    </section>
  )
}