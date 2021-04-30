/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const Toolbar: React.FC = () => (
  <form className="row mb-3">
    <div className="col-12 col-md-4">
      <label
        className="visually-hidden"
        htmlFor="titleInput"
      >
        Title
      </label>

      <div className="input-group">
        <input
          type="text"
          className="form-control"
          id="titleInput"
          placeholder="Title"
        />
      </div>
    </div>

    <div className="col-12 col-md-3">
      <label
        className="visually-hidden"
        htmlFor="yearInput"
      >
        Year
      </label>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          id="yearInput"
          placeholder="Year"
        />
      </div>
    </div>

    <div className="col-12 col-md-3">
      <label
        className="visually-hidden"
        htmlFor="plotInput"
      >
        Plot
      </label>
      <select className="form-select" id="plotInput">
        <option value="short">Short</option>
        <option value="full">Full</option>
      </select>
    </div>
    <div className="col-12 col-md-2">
      <button
        type="button"
        className="btn btn-primary col-12"
      >
        Search
      </button>
    </div>
  </form>
);

export default Toolbar;
