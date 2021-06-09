import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={CardPage} />
        <Route path='/about' component={CardPage} />
        <Route path='/events' component={CardPage} />
        <Route path='/annual' component={CardPage} />
        <Route path='/team' component={CardPage} />
        <Route path='/blogs' component={CardPage} />
        <Route path='/sign-up' component={CardPage} />
      </Switch>
    </Router>
  );
};

const CardPage = (props) => {
	const images = [
		1,2,3,4,5,6,7,8,9,10,11
	]
  return (
    <div>
      <div className="main">
        <h1>Responsive Card Grid Layout</h1>
        <ul className="cards">
			{
				images.map((val, i) => {
					return <Card imgLink={'https://picsum.photos/500/300/?img=' + val} />
				})
			}
        </ul>
      </div>
    </div>
  );
};

const Card = (props) => {
  return (
    <li className="cards_item">
      <div className="card">
        <div className="card_image">
          <img src={props.imgLink || "https://picsum.photos/500/300/"} />
        </div>
        <div className="card_content">
          <h2 className="card_title">{props.title || "Event Title"}</h2>
          <p className="card_text">
            {props.description || "Event Description"}
          </p>
          <button className="btn card_btn">{props.customBtn || "Check out the event"}</button>
        </div>
      </div>
    </li>
  );
};

export default App;
