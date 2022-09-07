import React from "react";
import Header from "../../Objects/Header/Header";
import "./OfficerPage.css";
import Officer from "../../Objects/Officer/Officer";
import useFetch from "use-http";
import { useEffect, useState } from "react";
import { Select, MenuItem, FormControl, InputLabel } from "@material-ui/core";

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
  function handleClick(e: Event){
    e.preventDefault()
    console.log(currentYear)
  }
  const years: number[] = [];
  const officers: officerType[] = [];
  data.map((value: officerType) => {
    if (!years.includes(value.year)) {
      years.push(value.year);
    }
    officers.push(value);
  });
  const [currentYear, setCurrentYear] = useState(2022);
  return (
    <div className="main">
      <Header />
      <div className="officer-group">
        <h1 className="officer-title">Officers</h1>
        <form className="officer-subtitle" onSubmit={() => handleClick}>
          {years.map((value) => {
            return (
              <input
                type="button"
                key={`button-${value}`}
                value={value}
                onClick={() => setCurrentYear(value)}
                className="year-button"
                name={`${value}-${value+1}`}
              />
            );
          })}
        </form>
        {officers.map((value) => {
          if (value.year == currentYear) {
            return (
              <Officer
                key={`${value.year}-${value.position}`}
                firstName={value.firstName}
                lastName={value.lastName}
                position={value.position}
                image={value.image}
              />
            );
          }
        })}
      </div>
    </div>
  );
}
export default OfficerPage;

{
  /*

    .filter((value) =>
      value.key?.toString().includes(currentYear.toString())
    )
 */
}
