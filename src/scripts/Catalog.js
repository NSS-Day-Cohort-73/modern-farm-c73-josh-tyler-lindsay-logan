export const Catalog = (theArray) => {
    let catalogHTML = "";
        const theSortedArray = theArray.toSorted((a, b) => {
            const nameA = a.type;
            const nameB = b.type; 
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        });
    for (const plant of theSortedArray) {
        catalogHTML += `<section class="plant">${plant.type.toUpperCase()}</section>`
    };
    let catalogPointer = document.getElementsByClassName("messages")[0];
    catalogPointer.innerHTML = catalogHTML;
};
