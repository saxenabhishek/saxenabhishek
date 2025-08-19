import React from "react";
import educationData from "../data/education.json";

const Education = ({ expanded }) => (
  <div>
    <h2 className="text-2xl font-light uppercase mb-2">Education</h2>
    {educationData.education.map((edu) => (
      <div key={edu.institution} className=" mb-2">
        <p className="text-lg ">{edu.institution}</p>
        <p className="text-sm text-gray-400">{edu.degree}</p>
        <p className="text-xs mt-1 text-gray-400 font-light">{edu.period}</p>
      </div>
    ))}
  </div>
);

export default Education;
