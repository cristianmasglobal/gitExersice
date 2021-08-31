class Animal:
    name = None
    age = None
    species = None
    _protected = None
    __private = None
    
    def __init__(self, name, age, species):
        self.name = name
        self.age = age
        self.species = species
        
    def eat(self):
        pass  
    def run(self):
        pass  
    def sleep(self):
        pass

class Perro(Animal):
    tipoPerro = None
    numPatas = None
    _protected = None
    __private = None
    
    def __init__(self, name, age, species, protected, private, tipoPerro, numPatas):
        #Calling the const of Animal
        Animal.__init__(self, name, age, species)
        self._protected = protected
        self.__private = private
        self.tipoPerro = tipoPerro
        self.numPatas = numPatas
        
    #Other methods
    def cry(self):
        print("Llorar para ir al baño")
    def orinar(self):
        print("Orinar")
    #Super
    def run(self):
        print("Corriendole")
    
def initializer():    
    myDog = Perro("Miltrus", 5, "Canino", "Protegido", "Privado", "Criollo", 4)
    print("The dog with name: ", myDog.name, " and age: ", myDog.age, "is: ", myDog.species, " with: ", myDog._protected)
    myDog.cry()

initializer()