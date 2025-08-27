import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteBooking as deleteBookingApi } from "../../services/apiBookings";
import { useNavigate, useParams } from "react-router-dom";

export function useDeleteBooking() {
  const { bookingId } = useParams();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { isPending: isDeleting, mutate: deleteBooking } = useMutation({
    mutationFn: deleteBookingApi,
    onSuccess: (data) => {
      toast.success("Booking deleted successfully");
      //invalidate all the queries that is currently active on the page
      queryClient.invalidateQueries({ active: true });

      //Now, it only navigate from the `BookingDetails` page. Or page related to "/bookings/:bookingId"
      if (bookingId) navigate(-1);
    },
    onError: (error) => {
      toast.error(`${error.message}`);
    },
  });

  return { isDeleting, deleteBooking };
}
