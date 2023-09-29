
import CardFilme from "@/components/CardFilme";
import NavBar from "@/components/NavBar";
import Titulos from "@/components/Titulos";



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
    <NavBar/>

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