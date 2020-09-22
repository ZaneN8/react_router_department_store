import React, { useEffect, useState } from "react";
import axios from "axios";

const SamplesDemo = () => {
  const [samples, setSamples] = useState([]);

  useEffect(() => {
    console.log("in useEffect");

    axios
      .get("/api/samples")
      .then((response) => {
        setSamples(response.data);
      })
      .catch((error) => {
        alert("error in retrieving samples");
      });
  }, []);
  return (
    <>
      <div>
        {samples.map((t) => (
          <p key={t.id}>{t.name}</p>
        ))}
      </div>
    </>
  );
};

export default SamplesDemo;
