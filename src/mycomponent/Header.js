import React from 'react'

export default function Header(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" link="#">{props.title}</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {props.listOptions ? <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" link="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" link="#">Features</a>
            </li>
           <li className="nav-item">
              <a className="nav-link" link="#">Pricing</a>
            </li>
          </ul>
        </div>: "no options"}
      </div>
    </nav>
    </div>
  )
}

Header.defaultProps ={
  title: "Enter your title here"
}; 
