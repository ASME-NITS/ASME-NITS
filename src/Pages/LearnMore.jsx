import "../Components/styles/LearnMore.css";
import globe from "../assets/globe.png";
import student from "../assets/student.png";
import technical from "../assets/technical.png";

const LearnMore = () => {
  return (
    <main className="learnmore-page">
      
      {/* PROFESSIONAL */}
      <section className="learn-section">
        <div className="learn-text">
          <h1>PROFESSIONAL SECTIONS</h1>
          <p>
            ASME Professional Sections provide local and geographic engagement.
            Members connect through professional development programs,
            networking opportunities, awards, recognitions, and outreach
            activities.
          </p>
          <a
            href="https://sections.asme.org/professional-sections?_gl=1*1aov6yl*_gcl_au*MTI1MjQ5ODM0Mi4xNzY4MTQ3MjY2*_ga*NDY3MzY4MjEzLjE3NjgxNDcyNjY.*_ga_3DH4W3W6HS*czE3NjgxNTU1OTUkbzIkZzAkdDE3NjgxNTU1OTUkajYwJGwwJGgxNTQ4NzUzNDk2"
            target="_blank"
            className="learn-link"
          >
            Learn More About Professional Sections →
          </a>
        </div>

        <div className="learn-image">
          <img src={globe} alt="Professional Sections" />
        </div>
      </section>

      {/* STUDENT */}
      <section className="learn-section reverse">
        <div className="learn-text">
          <h1>STUDENT SECTIONS</h1>
          <p>
            ASME Student Sections connect students at universities worldwide.
            They enhance learning through leadership, mentoring, volunteering,
            and technical activities while building professional networks.
          </p>
          <a
            href="https://sections.asme.org/student-sections?_gl=1*g20r7s*_gcl_au*MTI1MjQ5ODM0Mi4xNzY4MTQ3MjY2*_ga*NDY3MzY4MjEzLjE3NjgxNDcyNjY.*_ga_3DH4W3W6HS*czE3NjgxNTU1OTUkbzIkZzEkdDE3NjgxNTU2ODckajYwJGwwJGgxNTQ4NzUzNDk2"
            target="_blank"
            className="learn-link"
          >
            Learn More About Student Sections →
          </a>
        </div>

        <div className="learn-image">
          <img src={student} alt="Student Sections" />
        </div>
      </section>

      {/* TECHNICAL */}
      <section className="learn-section">
        <div className="learn-text">
          <h1>TECHNICAL DIVISIONS</h1>
          <p>
            ASME Technical Divisions allow members to collaborate based on
            professional interests. Benefits include conferences, journals,
            leadership roles, career growth, and research opportunities.
          </p>
          <a
            href="https://www.asme.org/get-involved/groups-sections-and-technical-divisions/technical-divisions"
            target="_blank"
            className="learn-link"
          >
            Learn More About Technical Divisions →
          </a>
        </div>

        <div className="learn-image">
          <img src={technical} alt="Technical Divisions" />
        </div>
      </section>

    </main>
  );
};

export default LearnMore;
