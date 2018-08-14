import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { loadData } from "../../actions/formData";

import "./styles.scss";
import validate from "./validate";
import asyncValidate from "./asyncValidate";

const renderField = ({
    input,
    label,
    type,
    meta: { asyncValidating, touched, error }
}) => (
    <div>
        <label>{label}</label>
        <div className={asyncValidating ? "async-validating" : ""}>
            <input {...input} placeholder={label} type={type} />
            {touched && error && <span>{error}</span>}
        </div>
    </div>
);

let ContactForm = props => {
    const { error, handleSubmit, submitting } = props;
    return (
        <div className="login-page">
            <div className="form">
                <form className="login-form" onSubmit={handleSubmit}>
                    <Field
                        name="username"
                        type="text"
                        component={renderField}
                        placeholder="username"
                        label="Username"
                    />

                    <Field
                        name="password"
                        type="password"
                        component={renderField}
                        placeholder="password"
                        label="Password"
                    />
                    {error && <strong>{error}</strong>}
                    <div>
                        <button type="submit" disabled={submitting}>
                            Sign in
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

ContactForm = reduxForm({
    form: "contactForm",
    // enableReinitialize: true
    validate,
    asyncValidate,
    asyncBlurFields: ["username"]
})(ContactForm);

// ContactForm = connect(
//     state => state,
//     { load: data => loadData(data) }
//     // dispatch => {
//     //     return {
//     //         load: data => dispatch(loadData(data))
//     //     };
//     // }
// )(ContactForm);

export default ContactForm;
