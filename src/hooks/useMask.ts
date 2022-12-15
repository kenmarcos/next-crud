import { UseFormSetValue } from "react-hook-form";

const useMask = () => {
  const dateMask = (inputValue: string) => {
    inputValue = inputValue.replace(/\D/g, "");

    const inputValueSubstrings = inputValue.split("");
    const formattedDate = inputValueSubstrings.slice(0, 8);
    const size = formattedDate.length;

    if (size > 4) {
      return formattedDate
        .join("")
        .replace(/^(\d{2})(\d{2})(\d{1,})$/g, "$1/$2/$3");
    } else if (size > 2) {
      return formattedDate.join("").replace(/^(\d{2})(\d{1,})$/g, "$1/$2");
    } else {
      return formattedDate.join("");
    }
  };

  const dateInput = (
    event: React.ChangeEvent<HTMLInputElement>,
    setValue: UseFormSetValue<any>,
    field: string
  ) => {
    const inputValue = event.target.value;
    setValue(field, dateMask(inputValue));
  };

  return {
    dateInput,
  };
};

export default useMask;
