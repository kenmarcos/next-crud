import * as Dialog from "@radix-ui/react-dialog";
import moment from "moment";
import Client from "../../../core/Client";
import Button from "../../Button";
import { BirthDateIcon, PersonIcon } from "../../Icons";
import Input from "../../Input";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import ClientRepository from "../../../core/ClientRepository";
import ClientCollection from "../../../backend/db/ClientCollection";

interface ClientEditFormProps {
  client: Client;
  getClients: () => Promise<void>;
}

interface ClientEditFormData {
  id: string;
  name: string;
  birthDate: string;
}

const ClientEditForm = (props: ClientEditFormProps) => {
  const repo: ClientRepository = new ClientCollection();

  const schema = yup.object().shape({
    id: yup.string(),
    name: yup.string(),
    birthDate: yup
      .string()
      .transform((value) => moment(value, "DD/MM/YYYY").toISOString(true)),
  });

  const {
    register,
    setFocus,
    handleSubmit,
    formState: { errors },
  } = useForm<ClientEditFormData>({ resolver: yupResolver(schema) });

  const onSubmitFunction = async (data: ClientEditFormData) => {
    const client = new Client(data.name, data.birthDate, data.id);
    await repo.save(client);
    props.getClients();
  };

  useEffect(() => {
    setFocus("name");
  }, [setFocus]);

  return (
    <form onSubmit={handleSubmit(onSubmitFunction)}>
      <div className="flex flex-col gap-1 mb-4">
        <Input
          labeltext="Código:"
          placeholder="Código de Identificação"
          readOnly
          defaultValue={props.client.id as string}
          {...register("id")}
        />
      </div>

      <div className="flex flex-col gap-1 mb-4">
        <Input
          labeltext="Nome:"
          placeholder="Nome Completo"
          icon={<PersonIcon />}
          defaultValue={props.client.name}
          {...register("name")}
        />
      </div>

      <div className="flex flex-col gap-1">
        <Input
          labeltext="Data de Nascimento:"
          type="text"
          placeholder="dd/mm/aaaa"
          icon={<BirthDateIcon />}
          defaultValue={moment(props.client.birthDate).format("DD/MM/YYYY")}
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
          Salvar
        </Button>
      </div>
    </form>
  );
};

export default ClientEditForm;
