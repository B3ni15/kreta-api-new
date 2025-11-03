# (ÚJ) Kréta API 

### Elérhető itt: https://kreta-api.devbeni.lol

> Docker: `docker run -p 4000:3000 ghcr.io/b3ni15/kreta-api-new:latest`

Hello! Ez a "API" arra épült hogy egy böngészőt emulálva meg tudjuk szerezni az access tokent.

[POST] /api/login

```json
{
    "USERNAME":"Felhasználó név",
    "PASSWORD":"Jelszó",
    "INSTITUTE":"Iskola Kód"
}
```

> Ezek kellenek ahoz hogy vissza tudjuk adni a access tokent.

- Az adataidat nem tároljuk el. Csak ez az egypoint van hogy vissza tudjuk adni a tokent. Többit neked kell megoldani.

### Ajánlott Dokumentációk: 
- https://github.com/boapps/e-kreta-api-docs
- https://nzx.hu/kreta-api/
- https://github.com/bczsalba/ekreta-docs-v3

> - Ezeket ajánlom figyelmedbe, ezek alapján a többi funkciót is meg tudod valósítani. (Lehetséges hogy régi a dokumentáció és nem működik minden)

## Contribution

- Ha bármi hibát találsz, vagy valamit hozzá szeretnél adni, nyugodtan forkold a repót és csinálj egy pull requestet.

1. Forkold a repót
2. Git clone
3. `npm install`
4. `node index.js`
5. Kész! 

> Ha hibát észlelsz, kérlek nyiss egy issue-t.

*Köszönöm! :) ❤️*