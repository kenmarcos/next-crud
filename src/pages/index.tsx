import { useEffect, useState } from "react";

import ClientRegisterForm from "pages/components/Table/components/Forms/ClientRegisterForm";
import { ExclamationIcon, PlusIcon } from "components/Icons";
import ClientCollection from "backend/db/ClientCollection";
import ClientRepository from "core/ClientRepository";
import Table from "pages/components/Table";
import Loading from "components/Loading";
import Button from "components/Button";
import Layout from "components/Layout";
import Modal from "components/Modal";
import Client from "core/Client";

const Home = () => {
  const repo: ClientRepository = new ClientCollection();

  const [isClientRegisterModalOpen, setIsClientRegisterModalOpen] =
    useState(false);

  const [clients, setClients] = useState<Client[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getClients = async () => {
    try {
      const response = await repo.getAll();

      setClients(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getClients().then(() => setIsLoading(false));
  }, []);

  return (
    <Layout>
      {isLoading && <Loading />}

      {!isLoading && (
        <section className="bg-white rounded-md w-11/12 md:w-2/3">
          <header className="m-0 border-b-4 border-purple-500 p-4">
            <h1 className="text-4xl font-black text-purple-800">
              Meus Clientes
            </h1>
          </header>

          <div className="p-4">
            <div className="flex justify-end mb-4">
              <Modal
                open={isClientRegisterModalOpen}
                setOpen={setIsClientRegisterModalOpen}
                triggerButton={
                  <Button className="bg-gradient-to-r from-blue-400 to-blue-700">
                    <PlusIcon />
                    Novo Cliente
                  </Button>
                }
                modalTitle="Cadastrar Novo Cliente"
              >
                <ClientRegisterForm
                  getClients={getClients}
                  setIsClientRegisterModalOpen={setIsClientRegisterModalOpen}
                />
              </Modal>
            </div>

            {clients.length ? (
              <Table clients={clients} getClients={getClients} />
            ) : (
              <div className="flex flex-col items-center text-gray-500">
                <div className="flex items-center">
                  <ExclamationIcon />
                  <h3 className="text-xl ml-2">Nenhum cliente encontrado</h3>
                </div>
                <p>Adicione um novo cliente</p>
              </div>
            )}
          </div>
        </section>
      )}
    </Layout>
  );
};

export default Home;
