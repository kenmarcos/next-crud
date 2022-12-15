import moment from "moment";

const useValidator = () => {
  const validateBirthDate = (inputValue: string | undefined) => {
    if (!inputValue) {
      return false;
    }

    if (moment(inputValue) >= moment().startOf("d")) {
      return false;
    }

    return moment(inputValue).isValid();
  };

  return {
    validateBirthDate,
  };
};

export default useValidator;
