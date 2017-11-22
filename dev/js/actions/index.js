export const selectUser = (user) => {
    console.log("You clicked on user: ", user.first);
    return {
        type: 'USER_SELECTED',
        payload: user
    }
};

export const checkUser = (user) => {
    console.log("You checkUser on user: ", user.first);
    return {
        type: 'USER_CHECKED',
        payload: user
    }
};


export const checkAnswer = (allusers) => {
    console.log("You checkAnswer on all user: ", allusers);

    //sebmit check answer event
    return {
        type: 'USER_CHECKANSWER',
        payload: allusers
    }
};
// export const doubleAsync = () => {
//     return (dispatch, getState) => {
//         return new Promise((resolve) => {
//             setTimeout(() => {
//                 dispatch({
//                     type    : COUNTER_DOUBLE_ASYNC,
//                     payload : getState().counter
//                 })
//                 resolve()
//             }, 200)
//         })
//     }
// }