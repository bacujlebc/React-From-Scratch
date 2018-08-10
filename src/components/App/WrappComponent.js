import React from "react";
import { connect } from "react-redux";
import ContactForm from "../common/ContactForm";
import { loadData } from "../../actions/formData";

const data = {
    // used to populate "account" reducer when "Load" is clicked
    firstName: "Jane",
    lastName: "Doe",
    age: "42",
    sex: "female",
    email: "bacujlui@gmail.com",
    employed: true,
    favoriteColor: "Blue",
    bio: "Born to write amazing Redux code."
};
const colors = ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet"];

class WrappComponent extends React.Component {
    render = () => {
        return (
            <React.Fragment>
                <ContactForm
                    onSubmit={_ => console.log("asdsa")}
                    colors={colors}
                    data={data}
                />
            </React.Fragment>
        );
    };
}

const mapStateToProps = state => {
    debugger;
    return {
        state
    };
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WrappComponent);
