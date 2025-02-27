// App.jsx
import { useState, useEffect } from 'react';
import './App.css';
import NoteList from './components/NoteList';
import NoteForme from './components/NoteForme';

function App() {
  const [notes, setNotes] = useState([]);
  const [notification, setNotification] = useState(null);

  const addNote = async (note) => {
    try {
      const response_add = await fetch('http://127.0.0.1:8000/NT_App/addnote/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(note),
      });
      
      if (!response.ok) {
        throw new Error('Failed to save note');
      }
    

      const data = await response_add.json();
      setNotes([...notes, { ...note, id: data.id || Date.now() }]);
      showNotification('Note saved successfully!', 'success');
    } catch (error) {
      console.error('Error saving note:', error);
      showNotification('Failed to save note. Please try again.', 'error');
    }
  };

  const retrieve_notes = async () => {
    try {
      const response_ret = fetch ('http://127.0.0.1:8000/NT_App/getnotes/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      }
      catch (error) {
      console.error('Error retrieving notes:', error);
      showNotification('Failed to retrieve notes. Please try again.', 'error');
    }
    return response_ret;
  };

    
  

  const showNotification = (message, type) => {
    setNotification({ message, type });
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  return (
    <div className="app-container">
      <div className="note-app">
        <header>
          <h1>NoteVault</h1>
          <p className="tagline">Capture your thoughts in style</p>
        </header>
        
        <main>
          <NoteForme onAddNote={addNote} />
          <NoteList notes={retrieve_notes} />
        </main>
        
        {notification && (
          <div className={`notification ${notification.type}`}>
            {notification.message}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;