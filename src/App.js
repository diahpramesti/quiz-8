import './App.css';
import React from 'react';
import "bootstrap"; //import JS
import "bootstrap/dist/css/bootstrap.min.css" // import css
import Content from './component/content';
import Header from './component/header';
import Footer from './component/footer';

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Content />
      </div>
      <Footer />
    </>
  );
}

export default App;
