import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Character from "../components/Character.tsx";
//import { State } from "./_middleware.tsx";
import Axios from "npm:axios"

type Character = {
  id: string,
  name: string,
  image: string
}

type Data = {
  results: Character[]
}

export const handler: Handlers = {
    GET: async (_req: Request, ctx: FreshContext</*State*/unknown, Data>) => {
        /*
        const likes = ctx.state.likes || [];
        if(likes.length === 0) ctx.render({results: []})
        try {
            const charactersPromise = likes.map(id => Axios.get<Character[]>(`https://hp-api.onrender.com/api/character/${id}`));
            const response = await Promise.all(charactersPromise);
            const characters = response.map(response => response.data[0]).filter(Boolean);
            return ctx.render({results: characters})
        } catch (error) {
            return ctx.render({results: []})
        }
        */
       return ctx.render({results: []})
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