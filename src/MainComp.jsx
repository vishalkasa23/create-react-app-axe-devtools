import React from 'react';
import propTypes from 'prop-types';

export class MainComp extends React.Component{
    render(){
        return <div>
            <h1>Hello Date is {this.props.now} </h1>
            <h1>Id {this.props.id} </h1>
            <h1>Age {this.props.age} </h1>
        </div>
    }
}

// Validating now, id, age using prop types

MainComp.propTypes = {
    now : propTypes.string.isRequired,
    id : propTypes.number.isRequired,
    age : propTypes.number
}