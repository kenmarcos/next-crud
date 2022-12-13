import Layout from "../components/Layout";
import Table from "../components/Table";
import Client from "../core/Client/client";

const clients = [
  new Client("Marcos", "1990-12-13T02:00:00.000Z", "m1"),
  new Client("Natália", "1995-10-25T02:00:00.000Z", "n2"),
  new Client("Paula", "2011-08-19T02:00:00.000Z", "p1"),
  new Client("Ana", "1990-12-13T02:00:00.000Z", "a1"),
];

const Home = () => {
  return (
    <Layout>
      <section className="bg-white rounded-md w-2/3">
        <header className="m-0 border-b-4 border-purple-500 p-4">
          <h1 className="text-4xl">Cadastro Simples</h1>
        </header>

        <div className="p-4">
          <Table clients={clients} />
        </div>
      </section>
    </Layout>
  );
};

export default Home;