export function htmlOsszeallit(lista) {
  /*  táblázatot állítok össze */
  let txt = "<table class='table table-striped'>";
  txt +=
    "<thead><tr><th>Név</th><th>Kor</th><th>Nem</th><th></th></tr></thead>";
  txt += "<tbody>";
  lista.forEach((elem,index) => {
    /*  a tábla egy sora */
    txt += `<tr>`;

    for (const kulcs in elem) {
      /*  objektumokat járhatunk be */
      //console.log("kulcs: ", kulcs, elem[kulcs]);
      txt += `<td>${elem[kulcs]}</td>`;
    }
    txt += `<td class='torol' id=${elem.id}>🗑️</td>`;
    txt += `</tr>`;

    txt += `<td class='editel' id=${elem.id}>✍🏻</td>`;
    txt += `</tr>`;
  });
  txt += "</tbody></table>";
  return txt;
}
export function megjelenit(txt) {
  const divELEM = $(".adatok");
  divELEM.html(txt);
}
