// components/NoteList.jsx
import NoteCard from './NoteCard';

const NoteList = ({ notes }) => {
  if (notes.length === 0) {
    return (
      <div className="empty-notes">
        <div className="empty-illustration">📝</div>
        <p>No notes yet. Start creating!</p>
      </div>
    );
  }

  return (
    <div className="notes-list">
      <h2>Your Notes</h2>
      <div className="notes-grid">
        {notes.map((note, index) => (
          <NoteCard key={note.id || index} note={note} />
        ))}
      </div>
    </div>
  );
};

export default NoteList;
