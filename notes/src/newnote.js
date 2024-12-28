import './App.css';

function App() {
  return (
   <>
   <nav>
        <ul class="navbarlinks">
             <a href="homepage.html" class="name">Notes</a>
           <a href="addnewnote.html"> <button>Add New</button></a>
        </ul>
    </nav>
    <div class="newnt">
         <h5 class="tit">Title:</h5>
        <textarea name="" id="" class="titbox" wrap="soft"></textarea>
        
        <h5 class="tit">Enter the text:</h5>
        <textarea name="" id="notbox" wrap="soft"></textarea>
    </div>
   </>
  );
}

export default App;
