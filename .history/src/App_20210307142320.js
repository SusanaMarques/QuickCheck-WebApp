import './CSS/App.css';
import { Link } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Navbar">

          <ul class="nav justify-content-end">
  <li class="nav-item">
    <a class="nav-link active" href="diseases">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#">Disabled</a>
  </li>
</ul>
          
          
        </div>

      </header>
      <div className="Name">
        <p>QuickCheck</p>
      </div>
      <div className="underName">
        <p>We recommend medical exams based on your symptoms</p>
      </div>


    </div>
  );
}

export default App;
