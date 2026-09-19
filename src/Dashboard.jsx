function Dashboard() {
  const savedComplaint = JSON.parse(
    localStorage.getItem("nagrikaComplaint")
  );

  const issues = [
    {
      id: "CIV-001",
      title: "Pothole cluster",
      category: "Road Infrastructure",
      reports: 12,
      location: "Main Market Road",
      status: "Reported",
    },
    {
      id: "CIV-002",
      title: "Garbage accumulation",
      category: "Sanitation",
      reports: 8,
      location: "Central Park Area",
      status: "Under review",
    },
    {
      id: "CIV-003",
      title: "Broken streetlights",
      category: "Public Infrastructure",
      reports: 6,
      location: "Station Road",
      status: "Reported",
    },
  ];

  return (
    <div className="dashboard-page">
      <div className="dashboard-header">
        <p className="section-label">COMMUNITY DASHBOARD</p>

        <h1>Civic issues, together.</h1>

        <p>
          Nagrika AI groups similar reports to help communities identify
          recurring civic problems.
        </p>
      </div>

      <div className="dashboard-stats">
        <div className="dashboard-stat">
          <strong>128</strong>
          <span>Total reports</span>
        </div>

        <div className="dashboard-stat">
          <strong>42</strong>
          <span>Resolved issues</span>
        </div>

        <div className="dashboard-stat">
          <strong>18</strong>
          <span>Community clusters</span>
        </div>

        <div className="dashboard-stat">
          <strong>6</strong>
          <span>Issue categories</span>
        </div>
      </div>

      <div className="issues-section">
        <div className="issues-heading">
          <div>
            <p className="section-label">COMMUNITY ISSUES</p>
            <h2>Recurring problems</h2>
          </div>

          <span className="cluster-badge">
            AI clustering enabled
          </span>
        </div>

        <div className="issue-grid">
          {issues.map((issue) => (
            <div className="issue-card" key={issue.id}>
              <div className="issue-top">
                <span className="issue-id">{issue.id}</span>

                <span className="issue-status">
                  {issue.status}
                </span>
              </div>

              <h3>{issue.title}</h3>

              <p>{issue.category}</p>

              <div className="issue-location">
                📍 {issue.location}
              </div>

              <div className="issue-bottom">
                <strong>{issue.reports}</strong>
                <span>similar reports</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {savedComplaint && (
        <div className="your-report">
          <p className="section-label">YOUR LATEST REPORT</p>

          <h2>{savedComplaint.title}</h2>

          <p>{savedComplaint.description}</p>

          <div className="your-report-info">
            <span>📍 {savedComplaint.location}</span>

            <span>
              ✓ {savedComplaint.status}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;