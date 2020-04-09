import React from 'react'

const Component = (props) => {
    const { props1, props2, etc } = props;
    // functional here

    return (
        <div>
            html here
        </div>
    );
};

const ComponentBis = ({ props1, props2, etc }) => {
    // functional here

    return (
        <div>
            html here
        </div>
    );
};

export default Component;