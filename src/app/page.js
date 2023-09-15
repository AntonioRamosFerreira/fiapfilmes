import CardFilme from "@/components/CardFilme";
import Titulos from "@/components/Titulos";
import { Star } from "lucide";
import { Warnes } from "next/font/google";

async function carregarDados(){
  const url = "https://api.themoviedb.org/3/trending/movie/week?api_key=1e922667481ab207d642450b0efb461e&language=pt-br"
   const response = await fetch(url)
   const json = await response.json()
   return json.results
}

export default async function Home() {

  const filmes = await carregarDados()

  return(
    //JSX
    <>
      <nav className="bg-slate-500 p-2 flex gap-3 items-end">
        <h1 className="text-3xl text-zinc-100 font-bold uppercase">FIAP Filmes</h1>
        <ul>
          <li>
            <a href="/favoritos">favoritos</a>
          </li>
        </ul>
      </nav>

      <Titulos>em alta</Titulos>

      <section className='flex flex-wrap gap-2'>
        {filmes.map( filme => <CardFilme filme={filme}/>)}
      </section>

      <Titulos>lançamentos</Titulos>
    </>
  );
}

try {
  const jsonData = JSON.parse(data);
  // Faça algo com jsonData
} catch (error) {
  console.error('Erro ao analisar JSON:', error);
}