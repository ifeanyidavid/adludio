import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const InputGroup = styled.div`
  .form-group {
    position: relative;
    margin-bottom: 1.5rem;

    label {
      position: absolute;
      font-size: 12px;
      color: rgba(0, 0, 0, 0.5);
      margin: 0;
      top: -8px;
      background: #fff;
      padding: 0px 4px;
      left: 8px;
    }

    input {
      border-radius: 0px !important;
      box-shadow: none !important;
      outline: none !important;
      border-color: rgba(0, 0, 0, 0.12);

      &:hover,
      &:focus,
      &:active {
        box-shadow: none !important;
        outline: none !important;
        border-color: rgba(0, 0, 0, 0.12);
      }
    }
  }
`;

function FormGroup({ type, id, label }) {
  return (
    <InputGroup>
      <div className="form-group">
        <label htmlFor={id}>{label}</label>
        <input type={type} className="form-control" id={id} />
      </div>
    </InputGroup>
  );
}

export default FormGroup;

FormGroup.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};
