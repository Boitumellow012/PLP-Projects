class Animal:
    def move(self):
        print("The animal is moving.")

class Car(Animal):
    def move(self):
        print("Driving 🚗")

class Plane(Animal):
    def move(self):
        print("Flying ✈️")

car = Car()
plane = Plane()

car.move() 
plane.move() 
