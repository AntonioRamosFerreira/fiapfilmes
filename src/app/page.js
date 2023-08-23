import Titulos from '@/components/Titulos'


export default function Home() {
  return ( //JSX
    <>
    
    <nav className="bg-slate-500 p-2 flex gap-3 items-end">
      <h1 className = "text-3xl text-zinc-100 font-bold uppercase" >FIAP Filmes</h1>
    <ul>
      <li>
          <a href="#">favoritos</a>
      </li>
    </ul>
    </nav>
      <Titulos>em alta</Titulos>
      <Titulos>lançamentos</Titulos>
  </>
  )
}

