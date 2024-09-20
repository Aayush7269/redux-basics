import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increamentByAmount,
  increment,
} from "./store/reducer/counterSlice";

const App = () => {
  const { value } = useSelector((state) => state.counter);
  console.log(value);
  const dispatch = useDispatch();

  return (
    <div className="p-10  mx-auto w-full h-screen">
      <div className="mb-10 bg-zinc-400 w-[13%] mx-auto px-2 py-1">
        Counter:{value}
      </div>
      <div className="flex justify-center gap-10 ">
        <button
          className="bg-blue-200 px-2 py-1 rounded-md w-fit"
          onClick={() => {
            dispatch(increment());
          }}
        >
          increment
        </button>
        <button
          className="bg-red-300 px-2 py-1 rounded-md w-fit"
          onClick={() => {
            dispatch(decrement());
          }}
        >
          decrement
        </button>
        <button
          className="bg-blue-500 px-2 py-1 rounded-md w-fit"
          onClick={() => {
            dispatch(increamentByAmount(5));
          }}
        >
          increment by 5
        </button>
      </div>
    </div>
  );
};

export default App;
