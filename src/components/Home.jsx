import '../styles/Home.css'
import {Link} from "react-router-dom";
const Home = () => {
  return (
    <div className="home">
      <div>
        <h1>Freshly Pressed, strait to your door</h1>
        <p>
          At Pure Flave, we're dedicated to goodness in every sip. Delicious,
          fresh juice, just as nature intended.
        </p>
        <Link to="/shop">
        <button>Shop</button>
                    </Link>
        
      </div>
      <img src="./images/Background.jpg" />
    </div>
  );
};

export default Home;
