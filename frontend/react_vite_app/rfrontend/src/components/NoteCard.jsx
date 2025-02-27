// components/NoteCard.jsx
const NoteCard = ({ note }) => {
  // Get a stable color based on the title string
  const getColor = (str) => {
    const colors = [
      '#03dac6', // teal
      '#bb86fc', // purple
      '#cf6679', // pink
      '#ffb74d', // orange
      '#64b5f6'  // blue
    ];
    
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    
    return colors[Math.abs(hash) % colors.length];
  };

  return (
    <div className="note-card" style={{ borderTopColor: getColor(note.title) }}>
      <h3 className="note-title">{note.title}</h3>
      <p className="note-description">{note.description}</p>
      <div className="note-footer">
        <span className="note-date">{new Date().toLocaleDateString()}</span>
      </div>
    </div>
  );
};

export default NoteCard;