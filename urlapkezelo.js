import { postAdat } from "./aszinkron.js"

//import { init } from "./main.js"
export function adatokListaba(lista) {
    /* összegyűjti az űrlapról az adatokat */
    let adat = {
        nev: "",
        kor: 0,
        nem: true
    }

    /*  const nemELEM = $("input[name='nem']:checked") */

    const submitELEM = $("#submit")
    /* beleteszi a listába, ha rákattintunk a hozzáad gopm,bra */
    submitELEM.on("click", function (event) {
        event.preventDefault()

        /*  submit gombról levesszük az alapértelmezett eseménykezelőt */
        /*  megfogjuk az űrlapmezőket */
        const nevELEM = $("#nev")
        const korELEM = $("#kor")
        const nemElem = $("input[name='nem']:checked")
        adat = {
            nev: nevELEM.val(),
            kor: korELEM.val(),
            nem: nemElem.val() === "false" ? false : true
        }

        if (validELEMEK.eq(0).css("display")==="block" && validELEMEK.eq(1).css("display")==="block" ) {
             //lista.push(adat)          
            // init(lista)
            postAdat("http://localhost:3000/emberekLISTA", adat);
        }

    })

}