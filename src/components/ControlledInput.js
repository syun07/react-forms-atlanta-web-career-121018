import React from 'react';

class ControlledInput extends React.Component {
    state = {
        value: '',
    }

    handleFirstNameChange = event => {
        this.setState({
            [event.target.firstName]: event.target.value
        });
    }

    handleLastNameChange = event => {
        this.setState({
            [event.target.lastName]: event.target.value
        })
    }

    render() {
        return (
            <form
                onSubmit={event => this.handleSubmit(event)}>
                <input
                    type='text'
                    name='firstName'
                    value={this.state.firstName}
                    onChange={this.handleFirstNameChange}
                />
                <input
                    type='text'
                    name='lastName'
                    value={this.state.lastName}
                    onChange={this.handleLastNameChange}
                />
            </form>
        );
    }
}

export default ControlledInput;
