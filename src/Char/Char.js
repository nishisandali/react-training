import React from 'react';

const char = (props) => {
    const Inlinestyle = {
        display: 'inline-block', 
        padding: '16px', 
        textAlign: 'center', 
        margin: '16px', 
        border: '1px solid black'
      };

      return (
          <div style={Inlinestyle} onClick={props.clicked}>
              {props.character}
          </div>
      )
}

export default char;