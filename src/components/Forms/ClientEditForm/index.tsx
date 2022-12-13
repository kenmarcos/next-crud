import * as Dialog from "@radix-ui/react-dialog";
import moment from "moment";
import Client from "../../../core/Client/client";
import Button from "../../Button";
import Input from "../../Input";

interface ClientEditFormProps {
  client: Client;
}

const ClientEditForm = (props: ClientEditFormProps) => {
  return (
    <form>
      <div className="flex flex-col gap-1 mb-4">
        <Input
          labeltext="Código:"
          placeholder="Código de Identificação"
          readOnly
          defaultValue={props.client.id as string}
        />
      </div>

      <div className="flex flex-col gap-1 mb-4">
        <Input
          labeltext="Nome:"
          placeholder="Nome Completo"
          defaultValue={props.client.name}
        />
      </div>

      <div className="flex flex-col gap-1">
        <Input
          labeltext="Data de Nascimento:"
          type="date"
          defaultValue={moment(props.client.birthDate).format("YYYY-MM-DD")}
        />
      </div>

      <div className="flex gap-4 mt-8 justify-end">
        <Dialog.Close asChild>
          <Button className="bg-gradient-to-r from-gray-400 to-gray-700">
            Cancelar
          </Button>
        </Dialog.Close>

        <Button className="bg-gradient-to-r from-purple-500 to-purple-800">
          Salvar
        </Button>
      </div>
    </form>
  );
};

export default ClientEditForm;
