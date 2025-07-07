import { Card } from "@/components/ui/card";

export default function PaginaProdutos() {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-screen h-screen bg-gray-200">
        <div id="box" className="flex flex-col justify-center items-center">
          <h1 className="text-3xl font-bold text-gray-800">
            Bem vindo a página de produtos!
          </h1>

          <Card className={"w-96 p-6 mt-4 bg-white shadow-md"}>
            <h1>
              Produto 1
            </h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit mollitia debitis, quod</p>
          </Card>
          <Card className={"w-96 p-6 mt-4 bg-white shadow-md"}>
            <h1>
              Produto 2
            </h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit mollitia debitis, quod</p>
          </Card>
          <Card className={"w-96 p-6 mt-4 bg-white shadow-md"}>
            <h1>
              Produto 3
            </h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit mollitia debitis, quod</p>
          </Card>
        </div>
      </div>
    </>
  );
}
