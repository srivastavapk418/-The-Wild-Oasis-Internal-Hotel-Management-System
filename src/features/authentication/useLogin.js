import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: login, isPending: isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (userData) => {
      queryClient.setQueryData(["user"], userData.user);
      // replace: true, ensures to replace the history for browser `back` button.
      navigate("/dashboard", { replace: true });
    },
    onError: (error) => {
      toast.error("Provided email or password is incorrect");
    },
  });

  return { login, isLoading };
}
