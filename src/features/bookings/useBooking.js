import { useQuery } from "@tanstack/react-query";
import { getBooking } from "../../services/apiBookings";
import { useParams } from "react-router-dom";

export function useBooking() {
  const { bookingId } = useParams(); // 👈 comes from the route like /bookings/:bookingId

  const {
    isLoading,
    data: booking,
    error,
  } = useQuery({
    queryKey: ["booking", bookingId],
    queryFn: () => getBooking(bookingId),
    retry: false, //React default try to fetch data 3 times if it fails. But here we off the retry.
  });

  return { isLoading, booking, error };
}
