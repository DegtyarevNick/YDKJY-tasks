//scheduleMeeting(..) should take a start time (in 24-hour format as a string "hh:mm") and a meeting duration (number of minutes).
//It should return true if the meeting falls entirely within the work day (according to the times specified in dayStart and dayEnd); return false if the meeting violates the work day bounds.

const dayStart = "07:30";
const dayEnd = "17:45";

function scheduleMeeting(startTime, durationMinutes) {
  let time = String(startTime)
    .split(":")
    .map((item) => {
      if (item.length < 3) {
        return Number(item);
      }
      return NaN;
    });
  if (
    !time.includes(NaN) &&
    time.length === 2 &&
    typeof durationMinutes === "number" &&
    durationMinutes > 0 &&
    Number(startTime.replace(":", "")) >= Number(dayStart.replace(":", "")) &&
    Number(startTime.replace(":", "")) <= Number(dayEnd.replace(":", ""))
  ) {
    if (time[1] + durationMinutes >= 60) {
      time[0] += Math.floor((time[1] + durationMinutes) / 60);
      time[1] = String(time[1] + durationMinutes - 60 * Math.floor((time[1] + durationMinutes) / 60)).length === 1
          ? "0"+ String(time[1] + durationMinutes - 60 * Math.floor((time[1] + durationMinutes) / 60))
          : time[1] + durationMinutes - 60 * Math.floor((time[1] + durationMinutes) / 60); // converting minutes for comparison(0 => 00) etc
    } else {
      time[1] += durationMinutes;
    }
    return (
      Number(time.join("")) >= Number(dayStart.replace(":", "")) &&
      Number(time.join("")) <= Number(dayEnd.replace(":", ""))
    );
  }
  return false;
}

console.log(scheduleMeeting("7:00", 15));
console.log(scheduleMeeting("07:15", 30));
console.log(scheduleMeeting("7:30", 30));
console.log(scheduleMeeting("11:30", 36));
console.log(scheduleMeeting("17:00", 45));
console.log(scheduleMeeting("17:30", 30));
console.log(scheduleMeeting("18:00", 15));


