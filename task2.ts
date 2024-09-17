//2-vazifa: MotorCycle va Car classlari va Vehicle class nomli abstract dan foydalandim

abstract class Vehicle {
    abstract start(): void;
    abstract stop(): void;
  }
  
  class Car extends Vehicle {
    start(): void {
      console.log("Car is starting...");
    }
  
    stop(): void {
      console.log("Car is stopping...");
    }
  }
  
  class MotorCycle extends Vehicle {
    start(): void {
      console.log("MotorCycle is starting...");
    }
  
    stop(): void {
      console.log("MotorCycle is stopping...");
    }
  }

  const car = new Car();
  car.start(); 
  car.stop();  
  
  const motorCycle = new MotorCycle();
  motorCycle.start(); 
  motorCycle.stop(); 