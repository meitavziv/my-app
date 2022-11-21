import './App.css';
import { Navbar, NutritionCalcPage, Schedule } from './components/index'
import { HomePage, NutritionHomePage, TrainingHomePage} from './Pages/index'
import Avatar from 'antd/lib/avatar/avatar';
import { logo } from './image/index';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";



export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a href='/'><Avatar src={logo} className="App-logo" shape="square" size="large" /></a>
        <Navbar />
      </header>
      <Router>
        <Routes>
          <Route exact path={'/'} element={<HomePage />} />
          <Route path={'/nutritions'} element={<NutritionHomePage />} />
          <Route path={'/nutritions/calc'} element={<NutritionCalcPage />} />
          <Route path={'/training'} element={<TrainingHomePage />} />
          <Route path={'/training/schedule'} element={<Schedule />} />
        </Routes>
      </Router>
    </div>
  );
}
