function Analysis({ description, location, onBack, onGenerateComplaint }) {
  const text = description.toLowerCase();

  let issue = "Civic Infrastructure Issue";
  let category = "Public Infrastructure";
  let severity = "Medium";
  let authority = "Relevant local civic authority";
  let summary = description;

  if (
    text.includes("pothole") ||
    text.includes("road") ||
    text.includes("street")
  ) {
    issue = "Road Damage / Pothole";
    category = "Road Infrastructure";
    severity = "High";
    authority = "Relevant local road/civic authority";

    summary = `A road-related issue has been reported near ${location}. The reported condition may affect pedestrians and vehicles.`;
  } else if (
    text.includes("garbage") ||
    text.includes("waste") ||
    text.includes("trash")
  ) {
    issue = "Garbage / Waste Accumulation";
    category = "Sanitation";
    severity = "Medium";
    authority = "Relevant local sanitation authority";

    summary = `Waste accumulation has been reported near ${location}. The issue may require attention from the local sanitation authority.`;
  } else if (
    text.includes("light") ||
    text.includes("streetlight") ||
    text.includes("lamp")
  ) {
    issue = "Non-functional Streetlight";
    category = "Public Infrastructure";
    severity = "Medium";
    authority = "Relevant local civic/infrastructure authority";

    summary = `A possible streetlight issue has been reported near ${location}.`;
  } else if (
    text.includes("water") ||
    text.includes("leak") ||
    text.includes("pipe")
  ) {
    issue = "Water Supply / Leakage Issue";
    category = "Water Infrastructure";
    severity = "High";
    authority = "Relevant local water-supply authority";

    summary = `A possible water-related issue has been reported near ${location}.`;
  }

  return (
    <div className="analysis-page">
      <div className="analysis-header">
        <p className="section-label">AI ANALYSIS</p>

        <h1>Here's what Nagrika AI found.</h1>

        <p>
          The information below is an initial AI-assisted classification.
          Please review it before creating a complaint.
        </p>
      </div>

      <div className="analysis-card">
        <div className="analysis-row">
          <span>Issue</span>
          <strong>{issue}</strong>
        </div>

        <div className="analysis-row">
          <span>Category</span>
          <strong>{category}</strong>
        </div>

        <div className="analysis-row">
          <span>Severity</span>
          <strong className={`severity ${severity.toLowerCase()}`}>
            {severity}
          </strong>
        </div>

        <div className="analysis-row">
          <span>Suggested grievance route</span>
          <strong>{authority}</strong>
        </div>

        <div className="analysis-summary">
          <span>Summary</span>
          <p>{summary}</p>
        </div>

        <div className="analysis-location">
          <span>📍 Reported location</span>
          <strong>{location}</strong>
        </div>

        <div className="analysis-actions">
          <button className="secondary-button" onClick={onBack}>
            ← Edit Report
          </button>

          <button
  className="primary-button"
  onClick={onGenerateComplaint}
>
  Generate Complaint →
</button>
        </div>
      </div>
    </div>
  );
}

export default Analysis;