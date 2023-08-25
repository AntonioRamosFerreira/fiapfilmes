import CardFilme from "@/components/CardFilme";
import Titulos from "@/components/Titulos";
import { Star } from "lucide";
import { Warnes } from "next/font/google";

export default function Home() {
  
  const StarWars ={
    titulo: "Star Wars VII - O Despertar da Força",
    nota: 9.5,
    poster: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/lqMDbo4rXnakFgc4C6LzPv6pG7F.jpg"
  }
  
  const barbie ={
    titulo: "Barbie",
    nota: 9.0,
    poster: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/yRRuLt7sMBEQkHsd1S3KaaofZn7.jpg"
  }

  return(
    //JSX
    <>
      <nav className="bg-slate-500 p-2 flex gap-3 items-end">
        <h1 className="text-3xl text-zinc-100 font-bold uppercase">
          FIAP Filmes
        </h1>
        <ul>
          <li>
            <a href="#">favoritos</a>
          </li>
        </ul>
      </nav>

      <Titulos>em alta</Titulos>

      <section className='flex flex-wrap gap-2'>

        <CardFilme filme={StarWars}/>
        <CardFilme  filme={barbie} />
      </section>

      <Titulos>lançamentos</Titulos>
    </>
  );
}
