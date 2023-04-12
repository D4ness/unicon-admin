import React, {useEffect} from 'react';
import './index.css';
import {withProviders} from "./providers";
import {Routing} from "../pages";
import {authGetMe as authGetMeAction} from "./model/auth/authActionCreators";
import {connect, useSelector} from "react-redux";
import {createStructuredSelector} from "reselect";
import {makeSelectAuth} from "./model/auth/authSelectors";
import {useTypedSelector} from "../shared/lib/hooks/useTypedSelector";

function App({authGetMe}:{auth:object; authGetMe: () => void}) {
    useEffect( () => {
        authGetMe()
    }, []);
    const {isAuth} = useTypedSelector( state => state.auth)
    // console.log(isAuth)
    return (
    <div className="App">
        {/*Smth...*/}
        {isAuth ? (<Routing/>): 'Не авторизирован'}
        {/*<Routing/>*/}
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
