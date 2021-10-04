import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Menu from "./Components/Menu";
import Routes from "./Routes/Routes";

function App() {
    return (
        <Router>
            <div className="App">
                {/* menu */}
                <Menu/>
                {/* content */}
                <Routes/>
            </div>
        </Router>
    );
}

export default App;
