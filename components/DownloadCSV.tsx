import React from "react";
import exportFromJSON from "export-from-json";

export default function CSVDownloader() {
  const handleExport = () => {
    const data = [
      { name: "Ahmed", age: 26, company: "Alex" },
      { name: "Mohamed", age: 30, company: "Cairoooo" },
    ];
    const fileName = "download";
    const exportType = exportFromJSON.types.csv;
    exportFromJSON({ data, fileName, exportType });
  };

  return (
    <div>
      <button onClick={handleExport}>Export CSV</button>
    </div>
  );
}
