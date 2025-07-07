import { Card } from "@/components/ui/card";

export default function PaginaEventos() {
  return (
    <>
      <div className="flex flex-col bg-gray-200 h-screen w-screen justify-center items-center">
        <div id="box" className="flex flex-col justify-center items-center">
          <h1 className="text-3xl font-bold text-gray-800">
            Bem vindo a página de eventos!
          </h1>

          <Card className={"w-120 p-6 mt-4 bg-white shadow-md"}>
            <h1>Evento 1</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus inventore corrupti veritatis deserunt </p>
          </Card>
          <Card className={"w-120 p-6 mt-4 bg-white shadow-md"}>
            <h1>Evento 2</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus inventore corrupti veritatis deserunt </p>
          </Card>
          <Card className={"w-120 p-6 mt-4 bg-white shadow-md"}>
            <h1>Evento 3</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus inventore corrupti veritatis deserunt </p>
          </Card>
        </div>
      </div>
    </>
  );
}
