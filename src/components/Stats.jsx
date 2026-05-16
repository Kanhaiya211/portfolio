import { useNavigate } from "react-router-dom";
function Stats() {
  const navigate = useNavigate();
  return (
    <section className="stats">

      <div className="stat-box">
        <h2>Fresher</h2>
        <p>Experience</p>
      </div>

      <div className="stat-box">
        <h2>5+</h2>
        <p>Project Done</p>
      </div>

      <button
        className="project-btn"
        onClick={() => navigate("/projects")}
      >
        View Projects
      </button>
      {/* <div className="stat-box">
        <h2>80+</h2>
        <p>Happy Clients</p>
      </div> */}

    </section>
  );
}

export default Stats;