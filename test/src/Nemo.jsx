import React from "react";

const Nemo = (props) => {
    const [count, setCount] = React.useState(1);

    const nemo_count = Array.from({ length: count }, (v, i) => i);

    const addNemo = () => {
        setCount(count + 1);
    };

    const removeNemo = () => {
        setCount(count > 0 ? count - 1 : 0);
    };

    return (
        <div className="App">
            <div>
                <button onClick={addNemo}>하나 추가</button>
                <button onClick={removeNemo}>하나 빼기</button>
            </div>

            {nemo_count.map((num, idx) => {
                return (
                    <div key={idx} style={{ width: `${10*(idx+1)}px`, height: "150px", backgroundColor: '#8f8f8f', margin: "10px",}}>
                    {idx}
                    </div>
                );
            })}
        </div>
    );
};
export default Nemo;