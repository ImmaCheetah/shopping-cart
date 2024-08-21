import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import PropTypes from "prop-types";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
const App = () => {
  const [storeData, setStoreData] = useState();
  const [error, setError] = useState(null);
  const [cart, setCart] = useState([]);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!localStorage.getItem("storageData")) {
      fetch("https://fakestoreapi.com/products")
        .then((response) => {
          if (response.status >= 400) {
            throw new Error("server error");
          }
          return response.json();
        })
        .then((data) => {
          setStoreData(data);
          localStorage.setItem("storageData", JSON.stringify(data));
        })
        .catch((error) => setError(error));
    }

    // .finally(() => setLoading(false));
  }, []);

  // if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered</p>;

  return (
    <div className="mainDiv">
      <header>
        <Navbar cartQuantity={cart.length} />
      </header>
      <main>
        <Outlet context={{ storeData, setStoreData, cart, setCart }} />
      </main>
      <Footer />
    </div>
  );
};

const RenderName = (props) => {
  return <div>{props.name}</div>;
};

RenderName.propTypes = {
  name: PropTypes.string.isRequired,
};

export default App;
