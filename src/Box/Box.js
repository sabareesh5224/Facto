import React from 'react';
import './Box.css'; // Import CSS file for styling

function Box({data}) {
  return (
    <div className="box">
       <p className="fnt">
       &ldquo;{data}&rdquo;</p>
    </div>
    
  );
}

export default Box;