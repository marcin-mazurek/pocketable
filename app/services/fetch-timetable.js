export default async function fetchTimetable (stopId) {
  const response = await fetch(`https://api.tfl.gov.uk/StopPoint/${stopId}/Arrivals`);

  if (response.status !== 200) {
    throw new Error("TFL API request failed");
  }
  return response.json();
};
