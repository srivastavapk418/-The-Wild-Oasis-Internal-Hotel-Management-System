import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useCreateCabin() {
  const queryClient = useQueryClient();

  const { mutate: createCabin, isPending: isCreating } = useMutation({
    mutationFn: createEditCabin,
    onSuccess: () => {
      toast.success("Cabin created successfully");
      // this will refetch the cabins list
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
      // reset the form
      // reset();
    },
    onError: (err) => toast.error(err.message),
  });

  return { createCabin, isCreating };
}
