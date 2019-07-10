import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import Moment from 'moment';

function NewTomigochiForm(props){
  let _names = null;


  function handleNewTomigochiFormSubmission(event) {
    event.preventDefault();
    props.onNewTomigochiCreation({names: _names.value, id: v4(), timeOpen: new Moment()});
    _names.value = '';

  }

  return (
    <div>
      <form onSubmit={handleNewTomigochiFormSubmission}>
        <input
          type='text'
          id='name'
          placeholder='Gochi Name'
          ref={(input) => {_names = input;}}/>

        <button type='submit'>Go!</button>
      </form>
    </div>
  );
}

NewTomigochiForm.propTypes = {
  onNewTomigochiCreation: PropTypes.func
};

export default NewTomigochiForm;