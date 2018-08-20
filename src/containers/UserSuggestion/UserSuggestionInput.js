import React from 'react';

const UserSuggestionInput = ({ originalText, handleChange }) => {
  return (
    <textarea
      className="form-control"
      value={originalText}
      onChange={e => handleChange(e.target.value)}
    />
  );
};

export default UserSuggestionInput;
