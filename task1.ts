//1-vazifa:Circle va Rectangle classlari va shape interfaceidan foydalandim
interface Shape {
  accountArea(): number;
}
class Circle implements Shape {
  constructor(private radius: number) {}

  accountArea(): number {
    return Math.PI * Math.pow(this.radius, 2);
  }
}
class Rectangle implements Shape {
  constructor(private width: number, private height: number) {}

  accountArea(): number {
    return this.width * this.height;
  }
}
const circle = new Circle(5);
console.log("Circle area:", circle.accountArea()); 

const rectangle = new Rectangle(10, 20);
console.log("Rectangle area:", rectangle.accountArea()); 