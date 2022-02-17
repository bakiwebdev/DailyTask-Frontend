import React from "react";
import ReactMarkdown from "react-markdown";

const md = `
Lorem **ipsum** dolor sit amet, consectetur adipiscing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
minim veniam, quis nostrud exercitation ullamco laboris
\n\n
nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
reprehenderit in voluptate velit esse cillum dolore eu fugiat
\n
\n
## Test
`;

const taskDescription = () => {
  return (
    <div className="w-full h-full bg-gray-50 overflow-y-scroll no-scrollbar p-3 space-y-7 pb-48">
      {/* title and created date */}
      <div className="">
        <h1 className="text-gray-600 text-lg flex-auto">
          Do some exercise with database osdjfaldhf ahdsfoahidsf{" "}
        </h1>
        <h1 className="text-gray-400 text-sm flex-auto">
          task created : Today
        </h1>
      </div>
      {/* description */}
      <div className="space-y-4 border-b-[1px] border-gray-400 pb-5">
        <p className="text-gray-800 text-lg pr-3 pb-2 border-b-2 border-blue-500 w-min">
          Description
        </p>

        <ReactMarkdown className="text-gray-600">{md}</ReactMarkdown>

        {/* task type */}
        <div>
          <h1 className="text-gray-800 text-lg pr-3">Type</h1>
          <p className="text-gray-600 text-sm">important</p>
        </div>
        {/* task status */}
        <div>
          <h1 className="text-gray-800 text-lg pr-3">Status</h1>
          <p className="text-gray-600 text-sm">Not Started</p>
        </div>
      </div>
    </div>
  );
};

export default taskDescription;
