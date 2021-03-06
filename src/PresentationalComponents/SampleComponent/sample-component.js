import React from 'react';
import './sample-component.scss';

/**
 * This is a dumb component that only recieves properties from a smart component.
 * Dumb components are usually functions and not classes.
 *
 * @param props the props given by the smart component.
 */
export default class SampleComponent extends React.Component {
    render () {
        return (
            <span className='sample-component'> {this.props.children} </span>
        );
    }
}
