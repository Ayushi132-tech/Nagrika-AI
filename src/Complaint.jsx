import { useState } from "react";

function Complaint({ description, location, onBack }) {
  const [title, setTitle] = useState("Civic Issue Report");

  const [complaint, setComplaint] = useState(
    `I would like to report a civic issue at ${location}.

The issue reported is: ${description}

This issue may require attention from the relevant civic authority. I request that the concerned authority inspect the location and take appropriate action.

Reported location: ${location}`
  );

  const [saved, setSaved] = useState(false);
  const [complaintId, setComplaintId] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const id = `NAG-${Date.now().toString().slice(-6)}`;

    const savedComplaint = {
      id,
      title,
      complaint,
      location,
      description,
      createdAt: new Date().toISOString(),
      status: "Ready for submission",
    };

    localStorage.setItem(
      "nagrikaComplaint",
      JSON.stringify(savedComplaint)
    );

    setComplaintId(id);
    setSaved(true);
  };

  if (saved) {
    return (
      <div className="complaint-page">
        <div className="saved-card">
          <div className="saved-icon">✓</div>

          <p className="section-label">COMPLAINT SAVED</p>

          <h1>Your complaint is ready.</h1>

          <p className="saved-message">
            Nagrika AI has saved your reviewed complaint locally in this
            browser. You can now use it for submission through the appropriate
            grievance channel.
          </p>

          <div className="saved-details">
            <div>
              <span>Complaint ID</span>
              <strong>{complaintId}</strong>
            </div>

            <div>
              <span>Issue</span>
              <strong>{title}</strong>
            </div>

            <div>
              <span>Location</span>
              <strong>{location}</strong>
            </div>

            <div>
              <span>Status</span>
              <strong className="status-badge">
                Ready for submission
              </strong>
            </div>
          </div>

          <div className="saved-actions">
            <button
              className="secondary-button"
              onClick={onBack}
            >
              ← Back to Analysis
            </button>

            <button
              className="primary-button"
              onClick={() => setSaved(false)}
            >
              Edit Complaint
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="complaint-page">
      <div className="complaint-header">
        <p className="section-label">GENERATED COMPLAINT</p>

        <h1>Review your complaint.</h1>

        <p>
          Nagrika AI has prepared a structured complaint. Review and edit it
          before saving.
        </p>
      </div>

      <form className="complaint-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="complaint-title">
            Complaint title
          </label>

          <input
            id="complaint-title"
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="complaint-text">
            Complaint
          </label>

          <textarea
            id="complaint-text"
            value={complaint}
            onChange={(event) => setComplaint(event.target.value)}
          />
        </div>

        <div className="complaint-location">
          <span>📍 Reported location</span>
          <strong>{location}</strong>
        </div>

        <div className="complaint-actions">
          <button
            type="button"
            className="secondary-button"
            onClick={onBack}
          >
            ← Back to Analysis
          </button>

          <button
            type="submit"
            className="primary-button"
          >
            Save Complaint ✓
          </button>
        </div>
      </form>
    </div>
  );
}

export default Complaint;