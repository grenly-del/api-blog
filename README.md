# API BLOG 
( *Dengan nodejs* )


## *ENDPOINT*

**Request** *GET /api/users*

`ini adalah enpoint untuk mengambil users di api ini.
`

**Response**

Berhasil
```json

{
    "message": "berhasil",
    "data" : [
        {
            "firstname": "grantly",
            "lastname": "sorongan",
            "username": "snake eyes",
            "password": "1234"
        }
    ]
}
```

Gagal

```json

{
    "message": "Gagal",
    "errors" : "Password Tidak Benar"
}
```


**Request** *POST /api/users/register*


`ini adalah enpoint untuk membuat/mendaftarkan users di api ini.
`

```json

{
    
    "firstname": "grantly",
    "lastname": "sorongan",
    "username": "snake eyes",
    "password": "123"
}
```


**Response**

Berhasil
```json

{
    "message": "berhasil",
    "data" : [
        {
            "firstname": "grantly",
            "lastname": "sorongan",
            "username": "snake eyes"
        }
    ]
}
```

Gagal
```json

{
    "message": "Gagal",
    "errors" : "username harus string"
}
```


**Request** *POST /api/users/login*


`ini adalah enpoint untuk membuat/mendaftarkan users di api ini.
`

```json

{
    "username": "snake eyes",
    "password": "123"
}
```


**Response**

Berhasil
```json

{
    "message": "berhasil",
    "data" : 
        {
            "username": "snake eyes",
            "token": "152hfkj24gtufnjg"
        }
}
```

Gagal
```json

{
    "message": "Database Validation",
    "errors" : "username tidak terdaftar"
}
```



