import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Axios from "npm:axios";
import Character from "../components/Character.tsx";

type Character = {
  id: string,
  name: string,
  image: string
}

type Data = {
  results: Character[]
}

export const handler: Handlers = {
  GET: async (_req: Request, ctx: FreshContext<unknown, Data>) => {    
    try {
      const response = await Axios.get<Character[]>(`https://hp-api.onrender.com/api/characters`)
      const results = response.data;
      return ctx.render({results: results})
    } catch (error) {
        return ctx.render({results: []})
    }
  }
}

const Page = (props: PageProps<Data>) => {
  const characters = props.data.results
  return(
    <div class="characters-grid">
      {characters && characters.length > 0 ? (
        characters.map((c: Character) => (
          <Character id={c.id} name={c.name} image={c.image} />
        ))
      ) : (
        <p>NO HAY PERSONAJES</p>
      )}
    </div>
  )
}

export default Page;