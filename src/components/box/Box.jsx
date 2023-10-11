import React from "react";
import './box.scss'

export default function Box(props){

  const className = {
    box: "box",
    purple: props.purple && "box-purple",
    fullheight: props.fullheight && "box-fullheight",
  };

  return( 
    <div className={Object.values(className).join(' ')}>
        {
            props.children
        }
    </div>
  );
};
