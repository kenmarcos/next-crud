import { useState } from "react";

const useLoading = () => {
  const [isLoading, setIsLoading] = useState(false);

  const showLoading = () => setIsLoading(true);
  const closeLoading = () => setIsLoading(false);

  return {
    isLoading,
    showLoading,
    closeLoading,
  };
};

export default useLoading;
