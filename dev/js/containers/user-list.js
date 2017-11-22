import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectUser,checkUser} from '../actions/index'
import * as allActions from '../actions/index'

class UserList extends Component {
    constructor(props){
        super(props)
        console.log(" ---users : ", props.users)
    }

    renderList() {
        let {selectUser,checkUser}=this.props.allActions;
        return this.props.users.map((user) => {
            return (
                <li
                    key={user.id}
                    onClick={() => {selectUser(user);checkUser(user)}}
                >
                    {user.first} {user.last}
                </li>
            );
        });
    }

    render() {
        return (
            <ul>
                {this.renderList()}
            </ul>
        );
    }

}

// Get apps state and pass it as props to UserList
//      > whenever state changes, the UserList will automatically re-render
function mapStateToProps(state) {
    return {
        users: state.users
    };
}

// Get actions and pass them as props to to UserList
//      > now UserList has this.props.selectUser
function matchDispatchToProps(dispatch){
    // return bindActionCreators(
    //     // {selectUser: selectUser},
    //
    //     Object.assign({}, {selectUser: selectUser}, {checkUser:checkUser}),
    //
    //     dispatch);


    return {
        allActions:bindActionCreators( allActions,  dispatch)
        // checkUser:bindActionCreators(  {checkUser: checkUser},  dispatch),

    }





}
function matchDispatchToProps2(dispatch) {
    return {
        selectUser: (user) => dispatch(selectUser),
        checkUser:(user)=>dispatch(checkUser)

        // sectionOnClick: tag => dispatch(sectionOnClick(tag)),
        // setSectionId: id => dispatch(setSectionId(id))
    };
}
// bindActionCreators(Object.assign({}, SomeActions, OtherActions), dispatch)
// function bindActionCreator(actionCreator, dispatch) {
//     return (...args) => dispatch(actionCreator(...args))
// }

// function mapStateToProps(state) {
//     return {
//         fullpage: state.fullpage,
//         appConfig: state.app.appConfig,
//         currentSection: state.dashboard.currentSection,
//         sectionId: state.dashboard.sectionId
//     };
// }





// We don't want to return the plain UserList (component) anymore, we want to return the smart Container
//      > UserList is now aware of state and actions
export default connect(mapStateToProps, matchDispatchToProps)(UserList);
