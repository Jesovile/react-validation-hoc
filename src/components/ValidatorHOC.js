import * as React from "react";

export default class ValidatorHOC extends React.Component{

    componentDidMoutn(){
        console.dir(this.props.children);
    }

    render(){
        return(
            <div style={{backgroundColor: 'red'}}>
            {this.props.children}
            </div>
        );
    }
}