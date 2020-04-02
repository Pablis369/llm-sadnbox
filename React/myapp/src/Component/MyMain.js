import React from "react";

class MyMain extends React.Component {
    componentDidMount() {
        console.log("Hola Mundo");
    }

    render() {
        return <main>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis explicabo illum magnam possimus rem.
                Beatae
                culpa earum, eos eum ex fugiat iure minima minus nemo odio, officia quia rem vel!
            </p>
        </main>;
    }
}

export default MyMain;