import * as React from "react";
import {withValidation} from "./TrueHoc";
import {ValidateTestForm} from "./ValidateTestForm";

export class TestForm extends React.Component{
    constructor(props){
        super(props);
        //init state
        this.state={
            name: "",
            surname: ""
        }
    }

    setValueChangeHandler = (propname, value) => {
        this.setState({[propname]:value});
    };

    buttonOnClick = () => {
        console.log("CLICK!");
    }

    showErrors = () => {
        if(this.props.errors){
            return(
                this.props.errors.map((error) => {
                    return(
                        <div>
                            {error.field + " " + error.message}
                        </div>
                    );
                })

            );
        } else return null;
    };

    render(){
        return(
            <div>
                {this.showErrors()}
                <h2>Test form</h2>
                <input type={"text"} value={this.state.name} onChange={(e) => this.setValueChangeHandler("name", e.target.value)}/>
                <br/>
                <input type={"text"} value={this.state.surname} onChange={(e) => this.setValueChangeHandler("surname", e.target.value)}/>
                <br/>
                <button onClick={() => this.props.performWithValidate(this.props, this.state, this.buttonOnClick) || this.buttonOnClick}>Push</button>
            </div>
        );
    }
}

export default withValidation(TestForm, ValidateTestForm);