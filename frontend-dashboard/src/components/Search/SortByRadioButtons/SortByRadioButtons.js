import React, { Component } from 'react';
import { FormGroup } from 'reactstrap';
import PropTypes from 'prop-types';
import RadioButton from './RadioButton';

class SortByRadioButtons extends Component {
  render() {
    const radioButtons = this.props.radioButtons.map(radioButton =>
      <RadioButton key={radioButton.label} label={radioButton.label} name={this.props.name} />);

    return (
      <div>
        <FormGroup tag="fieldset" className="sort-by-radio-buttons-container">
          {/* <Label>Sort By</Label> */}
          <FormGroup className="form-inline sort-by-radio-buttons-set">
            {radioButtons}
          </FormGroup>
        </FormGroup>
      </div>
    );
  }
}

SortByRadioButtons.propTypes = {
  name: PropTypes.string.isRequired,
  radioButtons: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
  })).isRequired,
};

export default SortByRadioButtons;
