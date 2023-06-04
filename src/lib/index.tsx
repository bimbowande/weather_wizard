export const getTime = (dataTime: any, type = "date") => {
  const time = new Date(dataTime * 1000);
  if (type === "day") {
    return time.toLocaleTimeString([], {
      month: "2-digit",
      day: "2-digit",
      minute: "2-digit",
    });
  }

  return time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
};

// convery fahrenit to celsius

export const fahrenheitToC = (kelvinValue: number) => {
  const fahValue = ((kelvinValue - 273.15) * 9) / 5 + 32;
  const celsius = ((fahValue - 32) * 5) / 9;
  return Math.floor(celsius);
};

export const convertUnixToDate = (unixTimestamp: number, year = false) => {
  const milliseconds = unixTimestamp * 1000; // Convert to milliseconds
  const dateObject = new Date(milliseconds);

  // Get day, month, and date
  const day = dateObject.toLocaleDateString("en-US", { weekday: "long" });
  const month = dateObject.toLocaleDateString("en-US", { month: "long" });
  const date = dateObject.getDate();
  const yearValue = dateObject.getFullYear();
  const hour = dateObject.getHours();
  const minutes = dateObject.getMinutes();

  if (year) {
    return `${day}, ${month} ${date} ${yearValue} |   ${hour} : ${minutes}`;
  }

  return `${day} , ${month} ${date} `;
};
