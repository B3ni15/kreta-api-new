# (ÚJ) Kréta API 

> Docker: `docker run -p 3000:3000 ghcr.io/b3ni15/kreta-api-new:latest`
-# Lehet hogy nem működik...

Hello! Ez a "API" arra épült hogy egy böngészőt emulálva meg tudjuk szerezni az access tokent.

[POST] /api/login

```json
{
    "USERNAME":"e-kreta Felhasználó név",
    "PASSWORD":"e-kreta Jelszó",
    "INSTITUTE":"e-kreta Iskola Kód"
}
```

> Ezek kellenek ahoz hogy vissza tudjuk adni a access tokent.

- Az adataidat nem tároljuk el. Csak ez az egypoint van hogy vissza tudjuk adni a tokent. Többit neked kell megoldani.

### Ajánlott Dokumentációk: 
- https://github.com/boapps/e-kreta-api-docs
- https://nzx.hu/kreta-api/
- https://github.com/bczsalba/ekreta-docs-v3

> - Ezeket ajánlom figyelmedbe, ezek alapján a többi funkciót is meg tudod valósítani. (Lehetséges hogy régi a dokumentáció és nem működik minden)

### 2025.01.29
