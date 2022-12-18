import './App.css';

function App() {
  return (
    <div className="App">
      <center>
         <h1>Registration From</h1>
         <form><label>
           Name: 
          <input text="name" id="fname"></input><br></br>
        <br></br>
          email:
          <input text="email" id="email"></input><br></br>
          <br></br>
          address:
          <input text="address" id="address"></input>
          <br></br> 
          <br></br> 
            
        <button>submit</button>      
          </label></form>
         
      </center>
    </div>
  );
}

export default App;
