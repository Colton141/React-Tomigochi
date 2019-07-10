import React from 'react';
import ConfirmationQuestions from './ConfirmationQuestions';
import NewTomigochiForm from './NewTomigochiForm';
import PropTypes from 'prop-types';

class NewTomigochiControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    this.handleTroubleshootingConfirmation = this.handleTroubleshootingConfirmation.bind(this);
  }

  handleTroubleshootingConfirmation() {
    this.setState({ formVisibleOnPage: true });
  }

  render() {
    let currentlyVisibleContent = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleContent = <NewTomigochiForm onNewTomigochiCreation={this.props.onNewTomigochiCreation} />;
    } else {
      currentlyVisibleContent = <ConfirmationQuestions onTroubleshootingConfirmation={this.handleTroubleshootingConfirmation} />;
    }
    return (
      <div>
        {currentlyVisibleContent}
      </div>
    );
  }
}

NewTomigochiControl.propTypes = {
  onNewTomigochiCreation: PropTypes.func
};

export default NewTomigochiControl;