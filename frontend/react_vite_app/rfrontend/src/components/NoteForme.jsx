// components/NoteForm.jsx
import { useState } from 'react';

const NoteForme = ({ onAddNote }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;
    
    setIsLoading(true);
    await onAddNote({ title, description });
    setIsLoading(false);
    setTitle('');
    setDescription('');
  };

  return (
    <div className="note-form-container">
      <form onSubmit={handleSubmit} className="note-form">
        <h2>Create New Note</h2>
        
        <div className="form-group">
          <input
            type="text"
            placeholder="Note Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="note-input"
          />
        </div>
        
        <div className="form-group">
          <textarea
            placeholder="Note Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="note-textarea"
            rows="4"
          ></textarea>
        </div>
        
        <button 
          type="submit" 
          className="submit-button"
          disabled={isLoading}
        >
          {isLoading ? 'Saving...' : 'Save Note'}
        </button>
      </form>
    </div>
  );
};

export default NoteForme;