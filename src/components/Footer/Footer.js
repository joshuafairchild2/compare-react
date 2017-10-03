import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer is-primary">
        <div className="container">
            <div className="columns">
                <div className="column">
                    <p>Hello, I am a footer! Nice to meet you.</p>
                </div>
                <div className="column has-text-right">
                    <a className="icon" href="#"><i className="fa fa-facebook"></i></a>
                    <a className="icon" href="#"><i className="fa fa-twitter"></i></a>
                </div>
            </div>
        </div>
    </footer>
  );
}

export default Footer;