import { useState } from "react";
import Analysis from "./Analysis";
import Complaint from "./Complaint";

function Report() {
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState(null);
  const [showAnalysis, setShowAnalysis] = useState(false);
  const [showComplaint, setShowComplaint] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setShowAnalysis(true);
  }

  if (showComplaint) {
  return (
    <Complaint
      description={description}
      location={location}
      onBack={() => setShowComplaint(false)}
    />
  );
}

if (showAnalysis) {
  return (
    <Analysis
      description={description}
      location={location}
      onBack={() => setShowAnalysis(false)}
      onGenerateComplaint={() => setShowComplaint(true)}
    />
  );
}

  return (
    <div className="report-page">
      <div className="report-header">
        <p className="section-label">REPORT A CIVIC ISSUE</p>

        <h1>Tell us what you found.</h1>

        <p>
          Provide a description, location, and optional photo. Nagrika AI will
          analyze the report and help create a structured complaint.
        </p>
      </div>

      <form
        className="report-form"
        onSubmit={handleSubmit}
      >
        <div className="form-group">
          <label htmlFor="description">
            What is the problem?
          </label>

          <textarea
            id="description"
            placeholder="Example: There is a large pothole near the main road..."
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="location">
            Where is the problem?
          </label>

          <input
            id="location"
            type="text"
            placeholder="Enter area, street, landmark, etc."
            value={location}
            onChange={(event) => setLocation(event.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="image">
            Upload a photo <span>(optional)</span>
          </label>

          <input
            id="image"
            type="file"
            accept="image/*"
            onChange={(event) => setImage(event.target.files[0])}
          />

          {image && (
            <p className="file-name">
              Selected: {image.name}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="primary-button"
        >
          Analyze with AI →
        </button>
      </form>
    </div>
  );
}

export default Report;