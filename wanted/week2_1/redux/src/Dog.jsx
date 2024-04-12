import { UseSelector, useSelector } from "react-redux";

const Dog = () => {

    const dog_arr = useSelector((state) => state.dog.dog_arr);
    return (
        <div>
            <h1>DOG</h1>
        </div>
    )
};


export default Dog;