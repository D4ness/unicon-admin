import React, {useEffect} from 'react';
import './index.css';
import {withProviders} from "./providers";
import {Routing} from "../pages";
import {authGetMe as authGetMeAction} from "./model/auth/authActionCreators";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {makeSelectAuth} from "./model/auth/authSelectors";

function App({auth, authGetMe}:{auth:object; authGetMe: () => void}) {
    useEffect( () => {
        authGetMe()
    }, []);
    // console.log(auth)
    return (
    <div className="App">
        Smth...

        <Routing/>
    </div>
  );
}
const mapDispatchToProps = {
    authGetMe: authGetMeAction,
};

const mapStateToProps = createStructuredSelector({
    auth: makeSelectAuth(),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
