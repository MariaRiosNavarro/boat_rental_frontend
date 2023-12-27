export const formatReservationDates = (reservation) => {
  if (!reservation) {
    // Return empty strings for start and end if no reservation is provided
    return { start: "", end: "" };
  }

  const startDate = new Date(reservation.daystart);
  const endDate = new Date(reservation.dayend);

  // Format dates
  const formattedStart = `${startDate.getDate().toString().padStart(2, "0")}-${(
    startDate.getMonth() + 1
  )
    .toString()
    .padStart(2, "0")}-${startDate.getFullYear()}`;

  const formattedEnd = `${endDate.getDate().toString().padStart(2, "0")}-${(
    endDate.getMonth() + 1
  )
    .toString()
    .padStart(2, "0")}-${endDate.getFullYear()}`;

  // Return formatted start and end dates
  return { start: formattedStart, end: formattedEnd };
};
