// node --experimental-fetch RESTAPI.mjs
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/globalThis
const STAR_WARS_ACCEPTED_RESOURCES = ['people', 'planets', 'starships', 'films']
const STAR_WARS_API_URL = 'https://swapi.dev/api'

const POKE_API_ACCEPTED_RESOURCES = ['pokemon', 'type', 'ability']
const POKE_API_API_URL = 'https://pokeapi.co/api/v2'

const createApi = (url, acceptedResources) => {
    return new Proxy({}, {
        get: (target, prop) => {
            return async (id) => {
                if (!acceptedResources.includes(prop))
                    return Promise.reject({ error: `Resource ${prop} not accepted...` })
                // pass parameters within the query
                let qs = queryParams
                    ? `?${new URLSearchParams(queryParams).toString()}`
                    : ''
                // https://url/prop/id?qs
                const resource = `${url}/${prop}/${id}${qs}`
                console.log(resource)
                const res = await fetch(resource)
                if (res.ok) return res.json()
                return Promise.reject({ error: `Something wrong happened with: ${resource}` })
            }
        }
    })
}

const starWarsApi = createApi(STAR_WARS_API_URL, STAR_WARS_ACCEPTED_RESOURCES)
const luke = await starWarsApi.people(1)
const c3po = await starWarsApi.people(2)
const planet = await starWarsApi.planets(1)
const starship = await starWarsApi.starships(9)
const film = await starWarsApi.films(1)

console.log({ luke: luke.name })
console.log({ c3po: c3po.name })
console.log(planet.name)
console.log(starship.name)
console.log(film.name)

const pokeApi = createApi(POKE_API_API_URL, POKE_API_ACCEPTED_RESOURCES)
const pikachu = await pokeApi.pokemon('pikachu' , {limit: 1, moreinfo: true, whatever: 2})

console.log(pikachu)

// const API_URL = 'https://swapi.dev/api'
// // api personas de star wars
// const res = await globalThis.fetch(`${API_URL}/people/1`)
// const json = await res.json()
// const {personName, gender} = json
// console.log({personName, gender})

// // api planetas star wars
// const res2 = await globalThis.fetch(`${API_URL}/planet/1`)
// const json2 = await res2.json()
// const {planetName} = json2 
// console.log({planetName})
