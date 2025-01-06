import React from "react";

function DisplayTalks({ talksList }) {
  return (
    <div>
      {talksList.length > 0 ? (
        talksList.map((talk) => (
          <div key={talk.id} className="talk-card">
            <h4>{talk.name}</h4>
            <p>{talk.description}</p>
            <p><strong>Session:</strong> {talk.session}</p>
          </div>
        ))
      ) : (
        <p>No talks found for the selected session or search query.</p>
      )}
    </div>
  );
}

export default DisplayTalks;
