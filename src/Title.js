import React from "react";  

class Title extends React.Component {
    render() {
        const props = this.props.name;
        return <h1 > {props.name} </h1>
    }
}

export default Title;