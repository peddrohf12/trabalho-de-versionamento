import { Button } from "@/components/ui/button";


export default function PaginaContato() {
  return (
    <>
      <div className="flex flex-col w-screen h-screen justify-center items-center bg-gray-200">
        <div id="box" className="flex flex-col justify-center items-center gap-12">
          <h1 className="text-3xl font-bold text-gray-800">
            Bem vindo a página de contato!
          </h1>

         <Button>Adicione Contatos</Button>
        </div>
      </div>
    </>
  );
}
