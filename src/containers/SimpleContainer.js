import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actionCreators from '../actions/simpleAction';

class SimpleContainer extends React.PureComponent {
    componentDidMount() {
        const { actions } = this.props;

        actions.SIMPLE_ACTION();
    }

    render() {

        const { simple } = this.props;

        return (
            <div>{simple}</div>
        );
    }
};

const mapStateToProps = state => ({
    simple: state.simple,
});

const mapDispatchToProps = dispatch => {
    return { 
        actions: bindActionCreators(actionCreators, dispatch)
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(SimpleContainer);
