import * as Dialog from "@radix-ui/react-dialog";
import Button from "../../Button";
import Input from "../../Input";

const ClientRegisterForm = () => {
  return (
    <form>
      <div className="flex flex-col gap-1 mb-4">
        <Input labeltext="Nome:" placeholder="Nome Completo" />
      </div>

      <div className="flex flex-col gap-1">
        <Input labeltext="Data de Nascimento:" type="date" />
      </div>

      <div className="flex gap-4 mt-8 justify-end">
        <Dialog.Close asChild>
          <Button className="bg-gradient-to-r from-gray-400 to-gray-700">
            Cancelar
          </Button>
        </Dialog.Close>

        <Button className="bg-gradient-to-r from-purple-500 to-purple-800">
          Cadastrar
        </Button>
      </div>
    </form>
  );
};

export default ClientRegisterForm;
