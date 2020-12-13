// Add your Circle class here
class Circle{
  constructor(radius){
    this.radius=radius;
  }
  set diameter(diameter){this._diameter=diameter}
  set circumference(circumference){this._circumference=circumference}
  set area(area){this._area=area}
  get diameter(){return this._diameter=this.radius*2}
  get circumference(){return this._circumference=Math.PI*this.radius*2}
  get area(){return this._area=Math.PI*(this.radius**2)}
}