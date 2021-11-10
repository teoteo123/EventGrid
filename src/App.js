import './App.css';

import Navbar from './components/Navbar';
import Settings from './pages/Settings';
import { db } from './components/fire';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={CardPage} />
        <Route path="/settings" component={Settings} />
        <Route path="/events" component={CardPage} />
        <Route path="/annual" component={CardPage} />
        <Route path="/team" component={CardPage} />
        <Route path="/blogs" component={CardPage} />
        <Route path="/sign-up" component={CardPage} />
      </Switch>
    </Router>
  );
};

const CardPage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    db.collection('events')
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          setEvents([...events, doc.data])
        });
      });
  });

  return (
    <div>
      <div className="main">
        <h1 className="title">Events</h1>
        <ul className="cards">
          {events.map((e) => {
              return <Card event={e} />;
          })}
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
          <img src={props.event.imgLink || 'https://picsum.photos/500/300/'} />
        </div>
        <div className="card_content">
          <h2 className="card_title">{props.event.title || 'Event Title'}</h2>
          <p className="card_text">{props.event.description || 'Event Description'}</p>
          <p className="card-text">
            Going: {props.event.attendees || parseInt(Math.random() * 2000)}
          </p>
          <button className="btn card_btn">
            {props.event.attendees >= props.event.maxAttendees ? 'SOLD OUT' : 'See Tickets'}
          </button>
        </div>
      </div>
    </li>
  );
};

export default App;
