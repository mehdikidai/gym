
export function dayOfWeek() {

  const date = new Date();
  const dayOfWeek = date.getDay(); 
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return days[dayOfWeek];

}
