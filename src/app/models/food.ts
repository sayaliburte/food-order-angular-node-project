export class Food
{
    id: string | null;
    name: string | null;
    price: number | null;
    tag: string[] ;
    favourite: boolean| null;
    stars: number;
    imageUrl: string| null;
    origin: string[];
    cookTime: string| null;

    constructor() {
      this.id = null;
      this.name = null;
      this.price = 0;
      this.tag = [];
      this.favourite = false;
      this.stars = 0;
      this.imageUrl = null;
      this.origin = [];
      this.cookTime = null;
    }
}
