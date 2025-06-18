import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Axios from "npm:axios";
import CharacterDetails from "../../components/CharacterDetails.tsx";

type Character = {
    id: string,
    name: string,
    image: string
    house: string,
    alive: boolean
}

type Data = {
  result: Character[]
}

export const handler: Handlers = {
  GET: async (_req: Request, ctx: FreshContext<unknown, Data>) => {
    const {id} = ctx.params
    try {
        const response = await Axios.get<Character[]>(`https://hp-api.onrender.com/api/character/${id}`)
        const results = response.data;
        return ctx.render({result: results})
    } catch (error) {
        return ctx.render({result: []})
    }
  }
}

const Page = (props: PageProps<Data>) => {
  const character = props.data.result
  return(
    <div class="character-details">
      {character && character.length > 0 ? (
        character.map((c: Character) => (
          <CharacterDetails id={c.id} name={c.name} image={c.image} house={c.house} alive={c.alive}/>
        ))
      ) : (
        <p>EL PERSONAJE NO EXISTE</p>
      )}
    </div>
  )
}

export default Page;