import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as logoutApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";

export function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: logout, isPending: isLoading } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      // to clear all react query cache
      queryClient.removeQueries();
      // replace: true, ensures to replace the history for browser `back` button.
      navigate("/login", { replace: true });
    },
  });

  return { logout, isLoading };
}
