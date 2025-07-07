import { Card } from "@/components/ui/card";

export default function PaginaClientes() {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-screen h-screen bg-gray-200">
        <div id="box" className="flex flex-col justify-center items-center">
          <h1 className="text-3xl font-bold text-gray-800">
            Bem vindo a página de clientes!
          </h1>
        </div>

        <div id="cards" className="flex-wrap flex justify-center items-center gap-4 mt-8">
          <Card className={"w-96 p-6 mt-4 bg-white shadow-md"}>
            <h1>Cliente 1</h1>
            <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </Card>
          <Card className={"w-96 p-6 mt-4 bg-white shadow-md"}>
            <h1>Cliente 2</h1>
            <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </Card>
          <Card className={"w-96 p-6 mt-4 bg-white shadow-md"}>
            <h1>Cliente 3</h1>
            <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </Card>

        </div>
      </div>
    </>
  );
}
