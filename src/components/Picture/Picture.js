import React from 'react';
import "./Picture.css";

const Picture = props => (
	<div className="card" onClick={props.imageClick}>
	  <div className="img-container">
		<img alt={props.image.replace(".png", "")} src={require("../../images/" + props.image)} />
	  </div>
	</div>
  );


export default Picture;