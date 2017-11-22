import React, {Component} from 'react';
import {connect} from 'react-redux';
import {checkAnswer} from '../actions/index'
import {bindActionCreators} from 'redux';
/*
 * We need "if(!this.props.user)" because we set state to null by default
 * */

class UserDetail extends Component {

    render() {
        console.log("  render: ", this.props)
        if (!this.props.user) {
            return (<div>Select a user...</div>);
        }
        return (
            <div>
                <img src={this.props.user.thumbnail} />
                <h2>{this.props.user.first} {this.props.user.last}</h2>
                <h3>Age: {this.props.user.age}</h3>
                <h3>Description: {this.props.user.description}</h3>
                <h1> <button onClick={()=>this.props.checkAnswer(this.props.alluser)}></button>   </h1>


                <h1>CHECK HERE:{JSON.stringify(this.props.status)}</h1>
            </div>
        );
    }
}

// "state.activeUser" is set in reducers/index.js
function mapStateToProps(state) {
    console.log(" >>>>state in detail: ", state)
    return {
        user: state.activeUser,
        alluser:state.users,
        status:state.checkAnswerData.status
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators(
        // {selectUser: selectUser},

        Object.assign({}, {checkAnswer: checkAnswer}),

        dispatch);
}
export default connect(mapStateToProps,matchDispatchToProps)(UserDetail);
