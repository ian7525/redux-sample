import React from 'react';

export default class Header extends React.Component {
    handleChange() {
        let name = document.getElementById('input_name').value;
        this.props.onChangeName(name);
    }

    render() {
        return (
            <div>
                <h1>Hello {this.props.name}</h1>
                <input id="input_name" />
                <button onClick={this.handleChange.bind(this)}>
                    Change name
                </button>
            </div>
        );
    }
}
