import React from 'react';

export default function Header(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">{props.title}</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {props.listOptions ? (
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link active" href="/home">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/features">Features</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/pricing">Pricing</a>
                </li>
              </ul>
            </div>
          ) : (
            "no options"
          )}
        </div>
      </nav>
    </div>
  );
}

Header.defaultProps = {
  title: "Enter your title here"
};
