import React from "react";
import "./ProjectCard.css"

export default function Card(props) {
  return (
    <div className="card mb-3">
      <div className="row no-gutters">
        <div className="col-md-4">
          <img src={props.image} className="card-img" alt={props.name} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">{props.description}</p>
          </div>
          <a
          type="button"
          class="btn btn-outline-dark"
          href={props.repolink}
          target="_blank"
        >
          GitHub Repository
        </a>
        <a
          type="button"
          class="btn btn-outline-dark"
          href={props.livelink}
          target="_blank"
        >
          Live Site
        </a>
        </div>
        
      </div>
    </div>
  );
}
