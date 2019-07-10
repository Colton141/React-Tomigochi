import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';

function Tomigochi(props) {
  return (
    <div>
      <style jsx>{`
        .color-toggle {
          background-color: grey;
          padding-left: 10%;
          padding-right: 10%;
          padding-top: 1%;
        }
        .color-toggle:hover {
          background-color: lightgrey;
        }
      `}</style>
      <div className="color-toggle">
        <h3>{ {props.names}</h3>
        
        <br/>
      </div>
      <hr/>
    </div>
  );
}

Tomigochi.propTypes = {
  names: PropTypes.string.isRequired,
 

export default Tomigochi;