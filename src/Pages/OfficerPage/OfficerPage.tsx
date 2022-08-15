import React from "react";
import Header from "../../Objects/Header/Header";
import "./OfficerPage.css";
import Officer from "../../Objects/Officer/Officer";
import useFetch from "use-http";
import { useEffect, useState } from "react";

export type officerType = {
  firstName: string;
  lastName: string;
  position: string;
  image?: string;
  year: number;
};
function OfficerPage() {
  const {
    loading,
    error,
    data = [],
  } = useFetch(
    "https://6w4o0fw74l.execute-api.us-east-2.amazonaws.com/officersget",
    {},
    []
  );
  const years: number[] = [];
  const officers = new Map<number, JSX.Element[]>();
  data.map((value: officerType) => {
    if (officers.get(value.year) === undefined) {
      officers.set(value.year, []);
      years.push(value.year);
    }
    officers
      .get(value.year)
      ?.push(
        <Officer
          firstName={value.firstName}
          lastName={value.lastName}
          position={value.position}
          image={value.image}
        />
      );
  });
  const [currentYear, setCurrentYear] = useState(2022);
  let selectedYear = officers.get(currentYear);

  const selection = (year: number) => {
    console.log("selected: " + year);
    setCurrentYear(year);
    console.log("processed:" + currentYear);
    selectedYear = officers.get(year);
  };

  return (
    <div className="main">
      <Header />
      <div className="officer-group">
        <h1 className="officer-title">Officers</h1>
        <div>
          <select className="officer-subtitle" id="yearSelect">
            <option
              value={2022}
              key={`${2022}-${2022 + 1}`}
              onClick={() => selection(2022)}
            >{`${2022}-${2022 + 1}`}</option>
            <option
              value={2021}
              key={`${2021}-${2021 + 1}`}
              onClick={() => selection(2021)}
            >{`${2021}-${2021 + 1}`}</option>
          </select>
        </div>
        {selectedYear}
      </div>
    </div>
  );
}
export default OfficerPage;
