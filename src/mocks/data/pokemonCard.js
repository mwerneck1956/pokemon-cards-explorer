export const pokemonCardMock = {
  data: {
    id: "pl1-1",
    name: "Ampharossssss",
    supertype: "Pokémon",
    subtypes: ["Stage 2"],
    level: "57",
    hp: "130",
    types: ["Lightning"],
    evolvesFrom: "Flaaffy",
    abilities: [
      {
        name: "Damage Bind",
        text: "Each Pokémon that has any damage counters on it (both yours and your opponent's) can't use any Poké-Powers.",
        type: "Poké-Body",
      },
    ],
    attacks: [
      {
        name: "Gigavolt",
        cost: ["Lightning", "Colorless"],
        convertedEnergyCost: 2,
        damage: "30+",
        text: "Flip a coin. If heads, this attack does 30 damage plus 30 more damage. If tails, the Defending Pokémon is now Paralyzed.",
      },
      {
        name: "Reflect Energy",
        cost: ["Lightning", "Colorless", "Colorless"],
        convertedEnergyCost: 3,
        damage: "70",
        text: "Move an Energy card attached to Ampharos to 1 of your Benched Pokémon.",
      },
    ],
    weaknesses: [
      {
        type: "Fighting",
        value: "+30",
      },
    ],
    resistances: [
      {
        type: "Metal",
        value: "-20",
      },
    ],
    retreatCost: ["Colorless", "Colorless"],
    convertedRetreatCost: 2,
    set: {
      id: "pl1",
      name: "Platinum",
      series: "Platinum",
      printedTotal: 127,
      total: 133,
      legalities: {
        unlimited: "Legal",
      },
      ptcgoCode: "PL",
      releaseDate: "2009/02/11",
      updatedAt: "2020/08/14 09:35:00",
      images: {
        symbol: "https://images.pokemontcg.io/pl1/symbol.png",
        logo: "https://images.pokemontcg.io/pl1/logo.png",
      },
    },
    number: "1",
    artist: "Atsuko Nishida",
    rarity: "Rare Holo",
    nationalPokedexNumbers: [181],
    legalities: {
      unlimited: "Legal",
    },
    images: {
      small: "https://images.pokemontcg.io/pl1/1.png",
      large: "https://images.pokemontcg.io/pl1/1_hires.png",
    },
    tcgplayer: {
      url: "https://prices.pokemontcg.io/tcgplayer/pl1-1",
      updatedAt: "2022/09/18",
      prices: {
        holofoil: {
          low: 4.79,
          mid: 6.41,
          high: 9.99,
          market: 7.72,
          directLow: 4.41,
        },
        reverseHolofoil: {
          low: 5.99,
          mid: 12.59,
          high: 13.91,
          market: 7.77,
        },
      },
    },
    cardmarket: {
      url: "https://prices.pokemontcg.io/cardmarket/pl1-1",
      updatedAt: "2022/09/18",
      prices: {
        averageSellPrice: 3.12,
        lowPrice: 0.25,
        trendPrice: 3.85,
        reverseHoloLow: 0.7,
        reverseHoloTrend: 3.27,
        lowPriceExPlus: 1.75,
        avg1: 4.2,
        avg7: 2.99,
        avg30: 3.31,
        reverseHoloAvg1: 1.4,
        reverseHoloAvg7: 3.15,
        reverseHoloAvg30: 2.05,
      },
    },
  },
};
