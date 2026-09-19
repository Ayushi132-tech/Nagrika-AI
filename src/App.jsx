import { useState } from "react";
import "./App.css";
import Report from "./Report";
import Dashboard from "./Dashboard";

function App() {
  const [showReport, setShowReport] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);

  if (showDashboard) {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">Nagrika AI</div>

        <button
          className="back-button"
          onClick={() => setShowDashboard(false)}
        >
          ← Back to Home
        </button>
      </nav>

      <Dashboard />
    </div>
  );
}

  if (showReport) {
    return (
      <div>
        <nav className="navbar">
          <div className="logo">Nagrika AI</div>

          <button
            className="back-button"
            onClick={() => setShowReport(false)}
          >
            ← Back to Home
          </button>
        </nav>

        <Report />
      </div>
    );
  }

  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo">Nagrika AI</div>

        <div className="nav-links">
          <a href="#home">Home</a>

          <button
            className="nav-button"
            onClick={() => setShowReport(true)}
          >
            Report Issue
          </button>

          <button
            className="nav-button"
            onClick={() => setShowDashboard(true)}
         >
            Dashboard
         </button>
        </div>
      </nav>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="badge">AI-POWERED CIVIC INTELLIGENCE</p>

            <h1>
              Report civic problems.
              <br />
              <span>Let AI help.</span>
            </h1>

            <p className="hero-text">
              Nagrika AI helps citizens report civic problems, understand
              their issue, generate a structured complaint, and find the
              appropriate grievance route.
            </p>

            <div className="hero-buttons">
              <button
                className="primary-button"
                onClick={() => setShowReport(true)}
              >
                Report an Issue
              </button>

              <button
  className="secondary-button"
  onClick={() => setShowDashboard(true)}
>
  View Dashboard
</button>
            </div>
          </div>

          <div className="hero-card">
            <div className="card-icon">🏙️</div>

            <h3>Civic Problem Intelligence</h3>

            <p>
              Upload a photo and describe the problem. AI analyzes the issue
              and helps turn it into an actionable report.
            </p>

            <div className="mini-stats">
              <div>
                <strong>AI</strong>
                <span>Analysis</span>
              </div>

              <div>
                <strong>📍</strong>
                <span>Location</span>
              </div>

              <div>
                <strong>✓</strong>
                <span>Tracking</span>
              </div>
            </div>
          </div>
        </section>

        <section className="features">
          <div className="section-heading">
            <p className="section-label">HOW IT WORKS</p>

            <h2>From problem to structured complaint</h2>
          </div>

          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-number">01</div>
              <h3>Describe the problem</h3>
              <p>
                Tell Nagrika AI what you found and provide the location.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-number">02</div>
              <h3>AI analyzes it</h3>
              <p>
                AI identifies the issue category, severity, and useful
                information from your report.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-number">03</div>
              <h3>Generate a complaint</h3>
              <p>
                Get a clear, structured complaint that you can review and
                edit before submitting.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-number">04</div>
              <h3>Track community issues</h3>
              <p>
                Similar reports can be grouped to highlight recurring civic
                problems.
              </p>
            </div>
          </div>
        </section>

        <section className="dashboard-preview" id="dashboard">
          <div>
            <p className="section-label">COMMUNITY DASHBOARD</p>

            <h2>See what your community is reporting.</h2>

            <p>
              Nagrika AI can organize civic reports into categories and
              identify recurring issues across locations.
            </p>
          </div>

          <div className="stats-grid">
            <div className="stat-card">
              <strong>128</strong>
              <span>Reports</span>
            </div>

            <div className="stat-card">
              <strong>42</strong>
              <span>Issues resolved</span>
            </div>

            <div className="stat-card">
              <strong>18</strong>
              <span>Community clusters</span>
            </div>

            <div className="stat-card">
              <strong>6</strong>
              <span>Issue categories</span>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <strong>Nagrika AI</strong>
        <span>AI-powered Civic Problem Intelligence Platform</span>
      </footer>
    </div>
  );
}

export default App;