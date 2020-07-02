import React from 'react';

function FormatDate(props) {
  return (
    <h3>
      It is {props.date.toLocaleTimeString()} {props.test}.
    </h3>
  );
}  

export default FormatDate;