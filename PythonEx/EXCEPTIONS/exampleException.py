#Errores de sintaxis -> Escribir mal y exceptional -> Interpretar mal 
def firstError():
    while True:
        try:
            x = int(input("Ingrese un valor numérico: "))
            break
        except ValueError:
            print("Valor incorrecto ")

def secondError():
    while True:
        try:
            x = int(input("Ingrese un valor caracter: "))
            break
        except ValueError:
            pass

def thirdError():
    try:
        x = int(input("Ingrese un valor numerador: "))
        y = int(input("Ingrese un valor denominador: "))
        co = x / y
        print(co)
    except ZeroDivisionError as detail:
        print("Valor incorrecto, división por 0 ", detail)

#WHY?
def fourthError():
    try:
        x = int(input("Ingrese un valor: "))
        raise ValueError("Valor incorrecto")
    except ValueError:
        print("Valor incorrecto, ingrese otro")
        raise

def fifthError():
    try:
        x = int(input("Ingrese un valor numerador: "))
        y = int(input("Ingrese un valor denominador: "))
        co = x / y
    except ZeroDivisionError as detail:
        print("Valor incorrecto, división por 0 ", detail)
    else:
        print("Valor operado: ", co)
        
while True:
    fifthError()