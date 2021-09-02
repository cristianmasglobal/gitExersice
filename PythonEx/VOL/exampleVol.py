from voluptuous import Schema, Length, All, Required

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
    
thirdSchema()