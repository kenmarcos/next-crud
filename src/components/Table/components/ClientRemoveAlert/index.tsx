import * as Dialog from "@radix-ui/react-dialog";
import ClientCollection from "../../../../backend/db/ClientCollection";
import Client from "../../../../core/Client";
import ClientRepository from "../../../../core/ClientRepository";
import Button from "../../../Button";

interface ClientRemoveAlert {
  client: Client;
  getClients: () => Promise<void>;
}

const ClientRemoveAlert = (props: ClientRemoveAlert) => {
  const repo: ClientRepository = new ClientCollection();

  const removeClient = async () => {
    await repo.delete(props.client);
    props.getClients();
  };

  return (
    <>
      <h2 className="text-center text-2xl text-purple-600 my-4">
        Tem certeza que deseja remover este cliente?
      </h2>

      <div className="border-2 border-gray-300 px-4 py-2 rounded-md">
        <p>
          <strong>Código:</strong> {props.client.id}
        </p>
        <p>
          <strong>Nome:</strong> {props.client.name}
        </p>
        <p>
          <strong>Idade:</strong> {props.client.age} ano
          {`${props.client.age > 1 ? "s" : ""}`}
        </p>
      </div>

      <div className="flex gap-4 mt-8 justify-center">
        <Dialog.Close asChild>
          <Button className="bg-gradient-to-r from-gray-400 to-gray-700">
            Cancelar
          </Button>
        </Dialog.Close>

        <Button
          onClick={removeClient}
          className="bg-gradient-to-r from-purple-500 to-purple-800"
        >
          Remover
        </Button>
      </div>
    </>
  );
};

export default ClientRemoveAlert;
