<<<<<<< HEAD
from voluptuous import Schema, Length, All, Required, Coerce
=======
from voluptuous import Schema, Length, All, Required
>>>>>>> 34dee7ae8e9c39e23049807734379d169431c434

def firstSchema():
    s = Schema(All(str, Length(min=3, max=20)))
    #s("hello")
    s("hello world")
    
def secondSchema():
    s = Schema ({
        'q':str,
        'per_page': int,
        'page': int,
    })
    s({"q":1})

def thirdSchema():
    s = Schema({Required("foo"): str})
    s({"foo": "hi"})
    
<<<<<<< HEAD
def fourthSchema():
    s = Schema("Schema")
    s("Schema")

def fiveSchema():
    s = Schema({
        "val":str,
        "value": 3
        })
    try:
        s({"value": 3, "val": "gol"})
    except:
        print("Error en el Schema: valor dado:", s)

def sixSchema():
    s = Schema(
        [2,"a","string"]
        )
    s([2])

def sevenSchema():
    validate = Schema(All("10",Coerce(int)))
    validate("10")
    
sevenSchema()
=======
thirdSchema()
>>>>>>> 34dee7ae8e9c39e23049807734379d169431c434
