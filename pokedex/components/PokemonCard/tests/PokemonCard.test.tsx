import {render,screen} from '@testing-library/react';
import PokemonCard from '../index';

describe('Pokemon Card tests' , () => {
   const pokemonDataMock = {
      "id": "pl1-1",
      "name": "Ampharos",
      "types": [
          "Lightning"
      ],
      "abilities": [
          {
              "name": "Damage Bind",
              "text": "Each Pokémon that has any damage counters on it (both yours and your opponent's) can't use any Poké-Powers.",
              "type": "Poké-Body"
          }
      ],
      "attacks": [
          {
              "name": "Gigavolt",
              "cost": [
                  "Lightning",
                  "Colorless"
              ],
              "convertedEnergyCost": 2,
              "damage": "30+",
              "text": "Flip a coin. If heads, this attack does 30 damage plus 30 more damage. If tails, the Defending Pokémon is now Paralyzed."
          },
          {
              "name": "Reflect Energy",
              "cost": [
                  "Lightning",
                  "Colorless",
                  "Colorless"
              ],
              "convertedEnergyCost": 3,
              "damage": "70",
              "text": "Move an Energy card attached to Ampharos to 1 of your Benched Pokémon."
          }
      ],
      "weaknesses": [
          {
              "type": "Fighting",
              "value": "+30"
          }
      ],
      "resistances": [
          {
              "type": "Metal",
              "value": "-20"
          }
      ],
      "images": {
          "small": "https://images.pokemontcg.io/pl1/1.png",
          "large": "https://images.pokemontcg.io/pl1/1_hires.png"
      }
   }

   beforeEach(() => {
      render(<PokemonCard {...pokemonDataMock} />)
   })

   it('Renders the pokemon name' , () => {

   })
})