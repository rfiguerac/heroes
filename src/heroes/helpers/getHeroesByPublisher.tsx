import { heroes } from "../data/heroes.tsx";


export const getHeroesByPublisher = (publisher:string) => {
  
  const validPublishers = ['DC Comics', 'Marvel Comics'];

  if(!validPublishers.includes(publisher)){
    throw new Error(`${publisher} is not a valid publisher`);
  }
    return heroes.filter( heroes => heroes.publisher === publisher);
}
