import React from "react";
import Select from "react-select";

const ReactSelect = ({ filter, options, selectedOption }) => {
  return (
    <>
      <Select
        placeholder="React"
        defaultValue={selectedOption}
        onChange={(value) => filter(value)}
        options={options}
        value={selectedOption}
      />
    </>
  );
};

export default ReactSelect;
