import React from "react";
import "./../scss/working_timings.scss";
import PhotoTime from "../images/time.jpg";

function WorkingTimings() {
  return (
    <div className="working_timings">
      <div className="table_timings">
        <table>
          <tr>
            <th>Days</th>
            <th>From</th>
            <th className="arrow_right">
              <i class="material-symbols-outlined">arrow_right_alt</i>
            </th>
            <th>To</th>
          </tr>
          <tr>
            <td>Monday</td>
            <th>08:30</th>
            <th className="arrow_right">
              <i class="material-symbols-outlined">arrow_right_alt</i>
            </th>
            <th>22:30</th>
          </tr>
          <tr>
            <td>Tuesday</td>
            <th>08:30</th>
            <th className="arrow_right">
              <i class="material-symbols-outlined">arrow_right_alt</i>
            </th>
            <th>22:30</th>
          </tr>
          <tr>
            <td>Wednesday</td>
            <th>08:30</th>
            <th className="arrow_right">
              <i class="material-symbols-outlined">arrow_right_alt</i>
            </th>
            <th>22:30</th>
          </tr>
          <tr>
            <td>Thursday</td>
            <th>08:30</th>
            <th className="arrow_right">
              <i class="material-symbols-outlined">arrow_right_alt</i>
            </th>
            <th>22:30</th>
          </tr>
          <tr>
            <td>Friday</td>
            <th>08:30</th>
            <th className="arrow_right">
              <i class="material-symbols-outlined">arrow_right_alt</i>
            </th>
            <th>22:30</th>
          </tr>
          <tr>
            <td>Saturday </td>
            <th>08:30</th>
            <th className="arrow_right">
              <i class="material-symbols-outlined">arrow_right_alt</i>
            </th>
            <th>22:30</th>
          </tr>
          <tr>
            <td>Sunday</td>
            <th>08:30</th>
            <th className="arrow_right">
              <i class="material-symbols-outlined">arrow_right_alt</i>
            </th>
            <th>22:30</th>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default WorkingTimings;
