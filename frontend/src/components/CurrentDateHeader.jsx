import { useState, useEffect } from "react";
import { DateTime } from "luxon";

function CurrentDateHeader() {
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    function updateDate() {
      const currentDate = DateTime.now()
        .setLocale("de")
        .toFormat("cccc', der 'dd.MM.yy");
      setFormattedDate(currentDate);
    }

    // Update the date immediately
    updateDate();

    // Optionally, set up an interval to update the date regularly
    const intervalId = setInterval(updateDate, 3600000); // Update every minute

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array means this effect runs once on mount

  return <div>{formattedDate}</div>;
}

export default CurrentDateHeader;
