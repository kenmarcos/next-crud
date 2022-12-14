import * as Dialog from "@radix-ui/react-dialog";
import Button from "../../Button";
import { BirthDateIcon, PersonIcon } from "../../Icons";
import Input from "../../Input";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Client from "../../../core/Client";
import ClientRepository from "../../../core/ClientRepository";
import ClientCollection from "../../../backend/db/ClientCollection";
import moment from "moment";

interface ClientRegisterFormProps {
  getClients: () => Promise<void>;
}
interface ClientRegisterFormData {
  name: string;
  birthDate: string;
}

const ClientRegisterForm = (props: ClientRegisterFormProps) => {
  const repo: ClientRepository = new ClientCollection();

  const schema = yup.object().shape({
    name: yup.string(),
    birthDate: yup
      .string()
      .transform((value) => moment(value, "DD/MM/YYYY").toISOString(true)),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ClientRegisterFormData>({ resolver: yupResolver(schema) });

  const onSubmitFunction = async (data: ClientRegisterFormData) => {
    const client = new Client(data.name, data.birthDate);
    await repo.save(client);
    props.getClients();
  };

  return (
    <form onSubmit={handleSubmit(onSubmitFunction)}>
      <div className="flex flex-col gap-1 mb-4">
        <Input
          labeltext="Nome:"
          placeholder="Nome Completo"
          icon={<PersonIcon />}
          {...register("name")}
        />
      </div>

      <div className="flex flex-col gap-1">
        <Input
          labeltext="Data de Nascimento:"
          type="text"
          placeholder="dd/mm/aaaa"
          icon={<BirthDateIcon />}
          {...register("birthDate")}
        />
      </div>

      <div className="flex gap-4 mt-8 justify-end">
        <Dialog.Close asChild>
          <Button className="bg-gradient-to-r from-gray-400 to-gray-700">
            Cancelar
          </Button>
        </Dialog.Close>

        <Button
          type="submit"
          className="bg-gradient-to-r from-purple-500 to-purple-800"
        >
          Cadastrar
        </Button>
      </div>
    </form>
  );
};

export default ClientRegisterForm;
