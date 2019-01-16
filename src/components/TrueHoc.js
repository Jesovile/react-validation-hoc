import * as React from "react";

//validation HOC
export function withValidation (ValidateComponent, validate){
    return class extends React.Component{
        constructor(props){
            super(props);
            //init state
            this.state = {validationErrors: null}
        }

        performMethodWithValidation = (props, state, performMethod) => {
            let errors = validate(props, state);
            if(!errors) {
                performMethod();
            } else {
                this.setState({validationErrors: errors});
            }
        };

        render() {
            return (
                <ValidateComponent
                    errors = {this.state.validationErrors ? this.state.validationErrors : null}
                    performWithValidate={this.performMethodWithValidation}
                />
            );
        }
    }
}