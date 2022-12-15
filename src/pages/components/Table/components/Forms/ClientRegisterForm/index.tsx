import { Dispatch, SetStateAction } from "react";

import { yupResolver } from "@hookform/resolvers/yup";
import * as Dialog from "@radix-ui/react-dialog";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import moment from "moment";
import * as yup from "yup";

import { BirthDateIcon, PersonIcon } from "components/Icons";
import ClientCollection from "backend/db/ClientCollection";
import ClientRepository from "core/ClientRepository";
import useValidator from "hooks/useValidator";
import useLoading from "hooks/useLoading";
import Loading from "components/Loading";
import Button from "components/Button";
import Input from "components/Input";
import useMask from "hooks/useMask";
import Client from "core/Client";

interface ClientRegisterFormProps {
  getClients: () => Promise<void>;
  setIsClientRegisterModalOpen: Dispatch<SetStateAction<boolean>>;
}
interface ClientRegisterFormData {
  name: string;
  birthDate: string;
}

const ClientRegisterForm = (props: ClientRegisterFormProps) => {
  const repo: ClientRepository = new ClientCollection();

  const { isLoading, showLoading, closeLoading } = useLoading();
  const { dateInput } = useMask();
  const { validateBirthDate } = useValidator();

  const schema = yup.object().shape({
    name: yup.string().required("*Campo obrigatório").trim(),
    birthDate: yup
      .string()
      .transform((value) => moment(value, "DD/MM/YYYY").toISOString(true))
      .test("birthDateValidator", "*Data inválida", validateBirthDate)
      .nullable()
      .required("*Campo obrigatório"),
  });

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<ClientRegisterFormData>({ resolver: yupResolver(schema) });

  const onSubmitFunction = async (data: ClientRegisterFormData) => {
    showLoading();

    const client = new Client(data.name, data.birthDate);

    try {
      await repo.save(client);

      await props.getClients();

      closeLoading();

      toast.success("Cadastro realizado com sucesso!");
      props.setIsClientRegisterModalOpen(false);
    } catch (error) {
      closeLoading();
      console.log(error);
      toast.error("Ocorreu um erro! Por favor, tente novamente.");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <div className="flex flex-col gap-1 mb-4">
          <Input
            labeltext="Nome:"
            placeholder="Nome Completo"
            icon={<PersonIcon />}
            {...register("name")}
            error={errors.name?.message}
          />
        </div>

        <div className="flex flex-col gap-1">
          <Input
            labeltext="Data de Nascimento:"
            type="text"
            placeholder="dd/mm/aaaa"
            icon={<BirthDateIcon />}
            {...register("birthDate")}
            error={errors.birthDate?.message}
            onChange={(event) => dateInput(event, setValue, "birthDate")}
          />
        </div>

        <div className="flex gap-4 mt-8 justify-end">
          <Button
            type="button"
            onClick={() => props.setIsClientRegisterModalOpen(false)}
            className="bg-gradient-to-r from-gray-400 to-gray-700"
          >
            Cancelar
          </Button>

          <Button
            type="submit"
            className="bg-gradient-to-r from-purple-500 to-purple-800"
          >
            Cadastrar
          </Button>
        </div>
      </form>

      {!!isLoading && <Loading />}
    </>
  );
};

export default ClientRegisterForm;
