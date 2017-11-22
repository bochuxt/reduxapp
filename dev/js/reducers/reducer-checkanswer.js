
let checkAnswerInit={
    status:false,
    index:-1
}
export default function CheckAnswerReducer(state = checkAnswerInit, action) {
    switch (action.type) {
        case 'USER_CHECKANSWER':
              console.log( " ====in checkanswer:",state, action);
             let {status,index}=state;
            // status=true
            let {allusers}=action
            if (status){
                status=false
            }
            else
            {
                status=true
            }

             //checkAnswerData

            //DO all check answer job here....
            return Object.assign({},state,{'status':status,'allusers':allusers});//action.payload;
            break;
    }
    return state;
}
//
//
// export const checkAnswer = (allusers) => {
//     console.log("You checkAnswer on all user: ", allusers);
//
//     //do anything here
//     return {
//         type: 'USER_CHECKANSWER',
//         payload: allusers
//     }
// };