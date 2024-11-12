import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./index.css";
import pizzaData from "./data.js";
import { FaPizzaSlice, FaHome } from 'react-icons/fa';
import { IoMdMenu, IoMdContact, IoIosInformationCircle } from "react-icons/io";


// Main App Component
function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Menu />
      <Footer />
    </div>
  );
}

// Header Component
function Header() {
  return (
    <div className="header">
      <FaPizzaSlice style={{ color: 'orange', fontSize: '50px', marginBottom: '10px' }} />
      <h1>Annabelle's Pizza Co.</h1>
    </div>
  );
}

// PizzaCard Component
function PizzaCard({ name, ingredients, price, photoName, soldOut }) {
  return (
    <Card className="pizza-card">
      <Card.Img variant="top" src={photoName} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>Ingredients: {ingredients}</Card.Text>
        <Card.Text>Price: ${price}</Card.Text>
        {soldOut ? (
          <Button variant="secondary" disabled>Sold Out</Button>
        ) : (
          <Button variant="primary">Order Now</Button>
        )}
      </Card.Body>
    </Card>
  );
}

// Navbar Component
function Navbar() {
  return (
    <div className="navbar">
      <h1><FaHome /> Home</h1>
      <h1><IoMdMenu /> Menu</h1>
      <h1><IoIosInformationCircle /> About Us</h1>
      <h1><IoMdContact /> Contact</h1>
    </div>
  );
}

// Menu Component
function Menu() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPizzas = pizzaData.filter((pizza) =>
    pizza.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="menu">
      <input
        type="text"
        placeholder="Search for a pizza..."
        className="search-bar"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <em>Authentic Italian cuisine, all from our stone oven</em>
      <h2>Our Menu</h2>
      <div className="pizza-cards-container">
        {filteredPizzas.map((pizza, index) => (
          <PizzaCard
            key={index}
            name={pizza.name}
            ingredients={pizza.ingredients}
            price={pizza.price}
            photoName={pizza.photoName}
            soldOut={pizza.soldOut}
          />
        ))}
      </div>
    </div>
  );
}


// Footer Component
function Footer() {
  const now = new Date();
  const currentHour = now.getHours();
  const isOpen = currentHour >= 10 && currentHour < 22;

  return (
    <footer className="footer">
      {isOpen ? "We're currently open" : "Sorry, we're closed"}
    </footer>
  );
}

// Render the App
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
