import React from 'react';
import ContactForm from '../ContactForm';

const data = {
  // used to populate "account" reducer when "Load" is clicked
  firstName: 'Jane',
  lastName: 'Doe',
  age: '42',
  sex: 'female',
  email: 'bacujlui@gmail.com',
  employed: true,
  favoriteColor: 'Blue',
  bio: 'Born to write amazing Redux code.'
};
const colors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet'];

class WrappComponent extends React.Component {
  render() {
    return (
      <ContactForm
        // onSubmit={this.submitForm}
        colors={colors}
        data={data}
      />
    );
  }
}

export default WrappComponent;
