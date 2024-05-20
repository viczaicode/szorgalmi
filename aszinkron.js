export function getAdat(vegpont, callback){
    fetch(vegpont, {
        method: "GET"
    })
        .then((response) => response.json())
        .then((data) => callback(data))
        .catch((error) => console.log(error));
}

export function postAdat(vegpont,adat){
    fetch(vegpont, {
        method: "POST",
        body: JSON.stringify(adat),
    })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.log(error));
}

export function patchAdat(vegpont,adat){
    fetch(vegpont, {
        method: "PATCH",
        body: JSON.stringify(adat),
    })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.log(error));
}

export function deleteAdat(vegpont, id){
    fetch(vegpont+"/"+id, {
        method: "DELETE",
    })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.log(error));
}

export function deeteAdat(vegpont,adat, id){
    fetch(vegpont+"/"+id, {
        method: "PUT",
        body: JSON.stringify(adat),
    })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.log(error));
}