import jwt

def auth():
    data = {
        "Name": "Cristian",
        "Age" : 22,
        "Email" : "cristian.ceballos@masglobalconsulting.com",
        "Password" : "ElPerroFelizEquisDe"
    }
    encode_jwt = jwt.encode(data, "S3CR37", algorithm="HS256")
    print(encode_jwt)

auth()