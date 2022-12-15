import Button from "../components/Button";
import { PlusIcon } from "../components/Icons";
import Layout from "../components/Layout";
import Table from "../components/Table";
import Client from "../core/Client";
import Modal from "../components/Modal";
import ClientRegisterForm from "../components/Forms/ClientRegisterForm";
import ClientRepository from "../core/ClientRepository";
import ClientCollection from "../backend/db/ClientCollection";
import { useEffect, useState } from "react";

const Home = () => {
  const repo: ClientRepository = new ClientCollection();

  const [isClientRegisterModalOpen, setIsClientRegisterModalOpen] =
    useState(false);

  const [clients, setClients] = useState<Client[]>([]);

  const getClients = async () => {
    try {
      const response = await repo.getAll();

      setClients(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getClients();
  }, []);

  return (
    <Layout>
      <section className="bg-white rounded-md w-2/3">
        <header className="m-0 border-b-4 border-purple-500 p-4">
          <h1 className="text-4xl font-black text-purple-800">Meus Clientes</h1>
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

          <Table clients={clients} getClients={getClients} />
        </div>
      </section>
    </Layout>
  );
};

export default Home;
