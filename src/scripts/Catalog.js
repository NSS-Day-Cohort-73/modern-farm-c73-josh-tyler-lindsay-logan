export const Catalog = (theArray) => {
    let catalogHTML = "";
    for (const plant of theArray) {
        catalogHTML += `<section class="plant">${plant.type.toUpperCase()}</section>`
    };
    let catalogPointer = document.getElementsByClassName("messages")[0];
    catalogPointer.innerHTML = catalogHTML;
};
