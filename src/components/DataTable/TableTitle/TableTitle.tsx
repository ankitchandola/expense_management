import React from "react";

const TableTitle: React.FC<{ heading: string }> = ({ heading }) => {
  return (
    <div className="py-5 px-6">
      <h3 className="font-medium text-lg">{heading}</h3>
    </div>
  );
};

export default TableTitle;
