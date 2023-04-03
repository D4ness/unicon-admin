import { Route, Routes } from "react-router-dom";
import TestPage from "./test/test";
import TestPage2 from "./test2/test2";

export const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<TestPage/>} />
            <Route path="testdva" element={<TestPage2/>} />
        </Routes>
    );
};