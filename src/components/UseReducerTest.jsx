import { useReducer } from 'react';

//The reducer function is passed two arguments: the current state and an action object. 
//The state is an object that contains the current state of the application. 
//The action object contains a type property that is used to determine how to update the state. 
//The reducer function returns a new state object based on the action type. 
//In the first case the action type is INCREMENT, so the reducer function returns a new state 
//object with the count property incremented by one. In the second case the action type is DECREMENT, 
//so the reducer function returns a new state object with the count property decremented by one. 
//In the default case the reducer function returns the current state object.
const reducer = (state, action) => {
    console.log("The count is", state, "and the action was", action);
    console.log("The count is", state.count, "and the action was", action.type);
    switch (action.type) {
        case "INCREMENT":
            return { 
                count: state.count + 1 
            };
        case "DECREMENT":
            return { 
                count: state.count - 1
            };
        default:
            return state;
    }
}

export const UseReducerTest = () => {
    // useReducer is destructured to get the state and dispatch function. 
    //The state is an object that contains the current state of the application. 
    //The dispatch function is used to dispatch actions to the reducer function. 
    //The dispatch function takes an action object as an argument. 
    //The action object contains a type property that is used to determine how to update the state.
    const [state, dispatch] = useReducer(reducer, { count: 0 })

    //The onclick event handlers are used to dispatch actions to the reducer function. 
    //The dispatch function takes an action object as an argument. 
    //The action object contains a type property that is used to determine how to update the state.
    return (
        <div>
            <p>The current count is: {state.count}</p>
            <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment count</button>
            <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement count</button>
        </div>)
}
