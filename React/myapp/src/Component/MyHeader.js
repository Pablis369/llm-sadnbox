import React from "react";

/**
 * TODO 2020: Cambiar el contenido
 * La opcion "TODO" sirve para ver comentarios
 * y tener acceso directos a tu trabajo desde TODO
 */

class MyHeader extends React.Component {
    componentDidMount() {
        console.log("Hola Mundo");
    }

    render() {
        return <header className="App-header">
            <h1>Hola Papes</h1>
        </header>;
    }
}

export default MyHeader;