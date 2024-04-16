import React, { useEffect, useRef } from "react";
import "./../scss/working_timings.scss";
import { dayOfWeek } from "./../helpers";
import Config from "./../config";

function WorkingTimings() {
  const days = useRef();

  const { daysGym } = Config;

  useEffect(() => {
    days.current.querySelectorAll("tr").forEach((element) => {
      element.dataset.day.toLowerCase() === dayOfWeek() &&
        element.classList.add("active");
    });

    console.log(daysGym);
  }, []);

  const DaysHtml = daysGym.map((day, i) => {
    return (
      day.entryTime !== "" && (
        <tr data-day={day.name} key={i}>
          <td>{day.frenchName}</td>
          <td>{day.entryTime}</td>
          <td className="arrow_right">
            <i className="material-symbols-outlined">arrow_right_alt</i>
          </td>
          <td>{day.exitTime}</td>
        </tr>
      )
    );
  });

  return (
    <div className="working_timings">
      <div className="table_timings">
        <table>
          <thead>
            <tr>
              <th>Days</th>
              <th>From</th>
              <th className="arrow_right">
                <i className="material-symbols-outlined">arrow_right_alt</i>
              </th>
              <th>To</th>
            </tr>
          </thead>

          <tbody ref={days}>{DaysHtml}</tbody>
        </table>
      </div>
    </div>
  );
}

export default WorkingTimings;
