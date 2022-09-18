interface Weaknesses {
  type: string;
  value: string;
}

interface Resistences {
  type: string;
  value: string;
}

interface Attack {
  name: string;
  cost: string[];
  convertedEnergyCost: number;
  damage: string;
  text: string;
}

interface Images {
  small: string;
  large: string;
}

export interface PokemonCardProps {
  id: string;
  disableOnClick?: boolean;
  name: string;
  types?: Array<string>;
  resistances: Array<Resistences>;
  weaknesses: Array<Weaknesses>;
  attacks: Array<Attack>;
  images: Images;
  imageSize: "small" | "large";
  showWeaknesses?: boolean;
  showResistences?: boolean;
  showAttacks?: boolean;
}
