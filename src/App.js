import './App.css';

const App = () => {
  return (
    <div>
      <CardPage />
    </div>
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
          <h2 className="card_title">{props.title || "Card Grid Layout"}</h2>
          <p className="card_text">
            {props.description || "Demo of pixel perfect pure CSS simple responsive card grid layout"}
          </p>
          <button className="btn card_btn">Check it out</button>
        </div>
      </div>
    </li>
  );
};

export default App;
