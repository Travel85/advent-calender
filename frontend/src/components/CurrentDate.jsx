import { useState, useEffect } from "react";
import { DateTime } from "luxon";

function CurrentDate() {
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    function updateDate() {
      const currentDate = DateTime.now();
      setFormattedDate(currentDate);
    }

    updateDate();
    const intervalId = setInterval(updateDate, 3600000); // Update every hour

    return () => clearInterval(intervalId);
  }, []);

  return <div>{formattedDate}</div>;

  //const futureDate = DateTime.fromISO("2025-01-01");
  // if (currentDate.startOf('day') < futureDate.startOf('day')) {
  //   console.log("The future date is later than the current date");
  // }
}

export default CurrentDate;
