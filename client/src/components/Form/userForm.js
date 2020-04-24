import React from 'react';

export function Input(props) {
  return (
    <div className="form-group">
      <select className="form-control" {...props}>
              <option value="">Select option</option>
      <option value="headache">Headache</option>
      <option value="backpain">Backpain</option>
      </select>
    </div>
  );
}

export function Input1(props) {
  return (
    <div className="form-group">
      <select className="form-control" {...props}>
              <option value="">Select option</option>
      <option value="non-pharmaceutical">non-pharmaceutical</option>
      <option value="pharmaceutical">pharmaceutical</option>
      </select>
    </div>
  );
}

export function Input2(props) {
  return (
    <div className="form-group">
      <select className="form-control" {...props}>
              <option value="">Select option</option>
      <option value="tablet">Tablet</option>
      <option value="no-tablet">No Tablet</option>
      </select>
    </div>
  );
}


export function TextArea(props) {
  return (
    <div className="form-group">
      <select  className="form-control" rows="20" {...props}>
      <option value="">Select option</option>
      <option value="non-pharmaceutical">non-pharmaceutical</option>
      <option value="pharmaceutical">pharmaceutical</option>
      </select>
     
      
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
      {props.children}
    </button>
  );
}


