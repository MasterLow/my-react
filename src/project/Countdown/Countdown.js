import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import './Countdown.css';
class Countdown extends Component {
    componentWillMount() {
        const {interval} = this.props;
        this.timer = setInterval(this.onEvent, interval);
    }
    componentWillReceiveProps(newProps) {
        if (newProps.interval !== this.props.interval) {
            clearInterval(this.timer);
            this.timer = setInterval(this.onEvent, newProps.interval);
        }
    }
    componentWillUnmount() {
        clearInterval(this.timer);
    }
    onEvent = ev => {
        const { onTimer } = this.props;
        onTimer(ev);
    };
    render(){
        return this.props.children || null;
    }
}

function mapStateToProps(state) {
  return {
  }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Countdown));