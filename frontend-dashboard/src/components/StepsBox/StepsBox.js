import React, {Component, Fragment} from 'react';
import {Row, Col} from 'reactstrap';

class StepsBox extends Component{

    render(){

        return(
            <Fragment>
                <Col className='landing-page-signup-block' xs="12" sm="4" md="4" >
                    <Row>
                        <Col xs="6" sm="6" md="6">
                            <img className='landing-page-signup-block-image' width='75%' src="https://www.dinospizzabc.com/wp/wp-content/uploads/2015/03/signup.png"/>
                        </Col>
                        <Col className='landing-page-signup-block-text' xs="6" sm="6" md="6">
                            <h4>Sign up</h4>
                        </Col>
                    </Row>
                </Col>

                <Col className='landing-page-tutor-block' xs="12" sm="4" md="4" >
                    <Row>
                        <Col xs="6" sm="6" md="6">
                            <img className='landing-page-tutor-block-image' width='75%' src="https://www.ot.co.uk/file_source/OpenText/en_US/JPG/learning-688x240.jpg"/>
                        </Col>
                        <Col className='landing-page-tutor-block-text' xs="6" sm="6" md="6">
                            <h4>Select a Tutor</h4>
                        </Col>
                    </Row>
                </Col>

                <Col className='landing-page-schedule-class-block' xs="12" sm="4" md="4" >
                    <Row>
                        <Col xs="6" sm="6" md="6">
                            <img className='landing-page-schedule-class-block-image' width='75%' src="http://www.falconbookspublishing.com/wp-content/uploads/2017/11/learning.jpg"/>
                        </Col>
                        <Col className='landing-page-schedule-class-block-text' xs="6" sm="6" md="6">
                            <h4>Schedule a Class</h4>
                        </Col>
                    </Row>
                </Col>

            </Fragment>
        );
    }
}

export default StepsBox;