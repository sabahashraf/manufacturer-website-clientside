import React, { useEffect, useState } from "react";
import Tool from "./Tool";

const Tools = () => {
  const [tools, setTools] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/tool")
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, []);

  return (
    <section>
      <h2 className="text-4xl text-center font-bold  my-12">Our Tools</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {tools.slice(0, 6).map((tool) => (
          <Tool key={tool._id} tool={tool}></Tool>
        ))}
      </div>
    </section>
  );
};

export default Tools;
