import React from 'react';

// Props Object {
//     phrase: "Hello there"
//     name: "Justin"
// };

const Greeter = props => {
    return (
    <div>
        <h1>
            {props.phrase} {props.name}
        </h1>

    </div>
    )
}


export default Greeter;