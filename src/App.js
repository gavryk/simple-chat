import React, { useReducer } from 'react';
import { Join } from './components';
import reducer from './reducer';

const App = () => {
  const [state, dispatch] = useReducer(reducer, {
    isAuth: false
  });

  const onLogin = () => {
    dispatch({
      type: "IS_AUTH",
      payload: true
    })
  }

  return (
    <div className="AppWrapper">
      {!state.isAuth && <Join onLogin={onLogin} />}
    </div>
  );
}

export default App;
