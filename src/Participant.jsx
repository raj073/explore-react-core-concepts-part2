import React, { useState } from "react";

export default function Participant() {
  const [participant, setParticipant] = useState(20);

  const participantStyle = {
    border: "2px solid crimson",
    margin: "15px",
    padding: "15px",
    borderRadius: "8px",
  };

  const handleAddParticipant = () => {
    const newAdd = participant + 1;
    setParticipant(newAdd);
  };
  const handleReduceParticipant = () => {
    setParticipant(participant - 1);
  };
  return (
    <div style={participantStyle}>
      <h2>Participant: {participant}</h2>
      &nbsp;
      <button onClick={handleAddParticipant}>Add Participant</button>
      &nbsp;
      <button onClick={handleReduceParticipant}>Reduce Participant</button>
    </div>
  );
}
