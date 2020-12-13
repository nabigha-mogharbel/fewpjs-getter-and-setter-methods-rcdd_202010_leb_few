// Add your Circle class here
class Circle{
  constructor(radius){
    this.radius=radius;
  }
  set diameter(diameter){this.radius=diameter/2}
  set circumference(circumference){this.radius=circumference/(Math.PI*2)}
  set area(area){this._area=area}
  get diameter(){return this.radius*2}
  get circumference(){return this._circumference=Math.PI*(this.radius*2)}
  get area(){return this._area=Math.PI*(this.radius)**2}
}