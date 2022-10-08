import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UseState from "./components/UseState/1-UseState";
import UseState2 from "./components/UseState/1-UseState2";
import UseState3 from "./components/UseState/StateTutorial";
import UseCallBack from "./components/useCallBack/CallbackTutorial";
import UseContext from "./components/UseContext/ContextTutorial";
import UseContext2 from "./components/UseContext/useContext2";
import UseEffect from "./components/UseEffect/EffectTutorial";
import UseEffect2 from "./components/UseEffect/useEffect";
import UseImperativeHanlder from "./components/UseImperativeHandle/ImperativeHandle";
import UseLayOutEffect from "./components/UseLayoutEffect/useLayoutEffect";
import UseMemo from "./components/UseMemo/useMemo";
import UseReducer from "./components/UseReducer/ReducerTutorial";
import UseReducerForm from "./components/useReducer-form/useReducerForm";
import UseRef from "./components/UseRef/useRef";


function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<p>Hola</p>} />
          <Route exact path="/usestate" element={<UseState />} />
          <Route exact path="/usestate2" element={<UseState2 />} />
          <Route exact path="/usestate3" element={<UseState3 />} />
          <Route exact path="/usecallback" element={<UseCallBack />} />
          <Route exact path="/usecontext" element={<UseContext />} />
          <Route exact path="/usecontext2" element={<UseContext2 />} />
          <Route exact path="/useeffect" element={<UseEffect />} />
          <Route exact path="/useeffect2" element={<UseEffect2 />} />
          <Route exact path="/useimperativehandler" element={<UseImperativeHanlder />} />
          <Route exact path="/uselayout" element={<UseLayOutEffect />} />
          <Route exact path="/usememo" element={<UseMemo />} />
          <Route exact path="/usereducer" element={<UseReducer />} />
          <Route exact path="/usereducerform" element={<UseReducerForm />} />
          <Route exact path="/useref" element={<UseRef />} />
        </Routes>

    </Router>
  );
}

export default App;
