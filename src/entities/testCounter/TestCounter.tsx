import React from "react";
import { connect } from "react-redux";
import {decrement as decrementAction, increment as incrementAction} from "../../shared/lib/actions";

interface CounterProps {
    count: number;
    increment: () => void;
    decrement: () => void;
}

const Counter: React.FC<CounterProps> = ({ count, increment, decrement }) => {
    return (
        <div>
            <h2>Counter: {count}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
};

const mapStateToProps = (state: any) => ({
    count: state.counter.count,
});

const mapDispatchToProps = {
    increment: incrementAction,
    decrement: decrementAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
