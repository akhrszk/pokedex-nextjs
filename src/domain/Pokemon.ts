export class Pokemon {
  constructor(public id: string, public name: string) {}

  protected get zeroid(): string {
    return `00${this.id}`.slice(-3)
  }

  get sprite(): string {
    return `https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/sprites/${this.zeroid}MS.png`
  }
  get thumbnail(): string {
    return `https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/thumbnails/${this.zeroid}.png`
  }
  get image(): string {
    return `https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/${this.zeroid}.png`
  }
}

export class PokemonDetail extends Pokemon {
  constructor(
    public id: string,
    public name: string,
    public genera: string,
    public flavorTextEntries: FlavorText[],
    public evolution: Pokemon[][] = [],
  ) {
    super(id, name)
  }
}

type FlavorText = {
  text: string
  version: string
}
