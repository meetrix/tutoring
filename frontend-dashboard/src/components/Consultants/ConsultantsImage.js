/**
 * Created by supun on 15/02/18.
 */
import React, { Component } from 'react';
import { Row } from 'reactstrap';
import PropTypes from 'prop-types';
import { BaseBox, BaseShowRow } from '../BaseBox';
import ConsultantImage from './ConsultantImage';


class ConsultantsImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      consultantAvailabelImages: [],
      num: 2,
    };
  }
  componentDidMount() {
    this.getConsultantsImages();
  }
  getConsultantsImages() {
    const consultantAvailabelImages = [];
    if (this.props.consultantsImages !== undefined) {
      this.props.consultantsImages.map((consultantImage, index) =>
      /* eslint react/no-array-index-key:0 */
        consultantAvailabelImages.push(<ConsultantImage key={index} image={consultantImage} />));
      this.setState({ consultantAvailabelImages });
    }
  }


  render() {
    return (

      <BaseBox>
        <Row>
          <BaseShowRow
            numComponentView={this.state.num}
            availabelComponent={this.state.consultantAvailabelImages}
          />
        </Row>

      </BaseBox>
    );
  }
}
ConsultantsImage.propTypes = {
  consultantsImages: PropTypes.shape.isRequired,
};
export default ConsultantsImage;
