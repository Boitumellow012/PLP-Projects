class Flower:
    def __init__(self, name, color, petals):
        self.name = name
        self.color = color
        self.petals = petals

    def bloom(self):
        print(f"The {self.name} is blooming with {self.petals} petals and a beautiful {self.color} color!")

class Rose(Flower):
    def __init__(self, name, color, petals, fragrance):
        super().__init__(name, color, petals)
        self.fragrance = fragrance

    def bloom(self):
        print(f"The {self.name} rose is blooming with {self.petals} petals, a {self.color} color, and a {self.fragrance} fragrance!")

flower1 = Flower("Tulip", "red", 6)
flower2 = Rose("Rose", "pink", 7, "sweet")

flower1.bloom()
flower2.bloom()
