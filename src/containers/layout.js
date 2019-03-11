import React from 'react';
import Header from '../components/header';
import { connect } from 'react-redux';
import { setName, setAge } from '../actions/userAction';
class Layout extends React.Component {
    render() {
        return (
            <Header
                name={this.props.user.name}
                onChangeName={name => this.props.setName(name)}
            />
        );
    }
}

const mapStateToProps = state => {
    return {
        math: state.math,
        user: state.user,
    };
};

const mapDispathToProps = dispatch => {
    return {
        setName: name => {
            dispatch(setName(name));
        },
        setAge: age => {
            dispatch(setAge(age));
        },
    };
};

export default connect(
    mapStateToProps,
    mapDispathToProps
)(Layout);
