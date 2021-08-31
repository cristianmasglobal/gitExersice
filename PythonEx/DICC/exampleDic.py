diccionario = {
    'nombre' : 'Carlos', 
    'edad' : 22, 
    'cursos': ['Python','Django','JavaScript'] 
    }

def recorrer():
    for key in diccionario:
        print (key, ":", diccionario[key])

def show():        
    print(diccionario['cursos'])
    print(diccionario['cursos'][0])

def dicFunction():
    dic =  dict(nombre='nestor', apellido='Plasencia', edad=22)
    print(dic)

dicFunction()