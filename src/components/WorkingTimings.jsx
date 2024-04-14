import React, { useEffect, useRef } from "react";
import "./../scss/working_timings.scss";
import { dayOfWeek } from "./../helpers";

function WorkingTimings() {

 const days = useRef()

  useEffect(()=>{
    
    days.current.querySelectorAll('tr').forEach(element => {

        element.dataset.day === dayOfWeek() && element.classList.add('active') 
        
    });

  },[])
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

          <tbody ref={days}>
            <tr data-day="Monday">
              <td>Monday</td>
              <th>08:30</th>
              <th className="arrow_right">
                <i className="material-symbols-outlined">arrow_right_alt</i>
              </th>
              <th>22:30</th>
            </tr>
            <tr data-day="Tuesday">
              <td>Tuesday</td>
              <th>08:30</th>
              <th className="arrow_right">
                <i className="material-symbols-outlined">arrow_right_alt</i>
              </th>
              <th>22:30</th>
            </tr>
            <tr data-day="Wednesday">
              <td>Wednesday</td>
              <th>08:30</th>
              <th className="arrow_right">
                <i className="material-symbols-outlined">arrow_right_alt</i>
              </th>
              <th>22:30</th>
            </tr>
            <tr data-day="Thursday">
              <td>Thursday</td>
              <th>08:30</th>
              <th className="arrow_right">
                <i className="material-symbols-outlined">arrow_right_alt</i>
              </th>
              <th>22:30</th>
            </tr>
            <tr data-day="Friday"> 
              <td>Friday</td>
              <th>08:30</th>
              <th className="arrow_right">
                <i className="material-symbols-outlined">arrow_right_alt</i>
              </th>
              <th>22:30</th>
            </tr>
            <tr data-day="Saturday">
              <td>Saturday </td>
              <th>08:30</th>
              <th className="arrow_right">
                <i className="material-symbols-outlined">arrow_right_alt</i>
              </th>
              <th>22:30</th>
            </tr>
            <tr data-day="Sunday">
              <td>Sunday</td>
              <th>08:30</th>
              <th className="arrow_right">
                <i className="material-symbols-outlined">arrow_right_alt</i>
              </th>
              <th>22:30</th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default WorkingTimings;
