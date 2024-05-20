# Listakezelő függvények gyakorlás

## Specifikáció

Jelenítsük meg a listánkat egy táblázatban, majd a listát tudjuk rendezni pl név szerint, ha rákattintunk a táblázat fejlécére, akkor rendezze be a táblázat sorait. 
Tudjunk szűrni név alapján.
Tudjunk új adatot hozzáadni a táblázathoz,
Tudjuk törölni a táblázat egy sorát.

## Metódusok

1. **htmlOszeallit(lista)->txt** | összállatja a táblázat htm szerkezetét egy szöveges változóba
2.  **megjelenit(txt)** -  megjelnítette egy adott html elemben a paraméterénben kapott szöveget. 
3. **rendez(lista, irany) -> rendezettLista** | a paraméterében kapott listát név szerint megrendezi; a függvény akkor fut le, ha a táblázat név fejlécére kattintunk. 
4. **adatHozzaadas(lista) -> kibovitettLista** |  Összegyűjti az űrlapról az adatokat és összeállít belőlök egy objektumot, majd azt beleteszi a listába.; a függvény akkor fut le, ha rákattintunk a Hozzáad gombra. 
5. **torol(lista,id )->tLista** | kitorli a listából az adott id-jű elemet.
Akkor fog lefutni, ha sor melletti torol gombra kattintunk. 
6. **szures(lista, keresoSzoveg) -> szurtLista** | a keresőmezőbe beírt szöveget keresi a lista objektumainak név mezőjében. mindez akkor fut le, ha beírunk valamit a keresőmezőbe. 