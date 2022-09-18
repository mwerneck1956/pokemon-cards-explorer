interface Weaknesses {
  type: string;
  value: string;
}

interface Resistences {
  type: string;
  value: string;
}

interface Images {
  small: string;
  large: string;
}

export interface PokemonCardProps {
  id: string;
  name: string;
  types?: Array<string>;
  resistances: Array<Resistences>;
  weaknesses: Array<Weaknesses>;
  images: Images;
  imageSize: "small" | "large";
}
