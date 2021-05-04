import { Component } from 'react';
import EmailInputType from './EmailInputType';
import '../../../styles/components/EmailInput.scss';

export class EmailInputComponent extends Component<EmailInputType, {}> {
    render() {
        return <div className="Container" {...this.props}>
            <label htmlFor={this.props.idInput || "email"}>{this.props.labelInput || ""}</label>
            <input
                className="TextInput"
                type={this.props.typeInput || "text"}
                id={this.props.idInput || "email"}
                name={this.props.nameInput || "email"}
                placeholder={this.props.textInput || "Email"}
            />
            <span className="Rect2" />
        </div>
    }
}
export default EmailInputComponent;
