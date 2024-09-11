

import { MysKILL } from "../../route";
export default function  SkillCard ({ skill, level }:MysKILL) {
    return (
      <div className="p-6 bg-white dark:bg-gray-700 shadow-lg rounded-lg">
        <h3 className="text-2xl font-semibold mb-2">{skill}</h3>
        <div className="relative pt-1">
          <div className="overflow-hidden h-3 mb-4 text-xs flex rounded bg-gray-300 dark:bg-gray-600">
            <div
              style={{ width: level }}
              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600 dark:bg-blue-400"
            ></div>
          </div>
        </div>
      </div>
    );
  };
