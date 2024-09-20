import {seedObject, seedObject, seedObject, seedObject, seedObject, seedObject} from "./tractor.js"


const theField = []


export const addPlant = (seedObject) =>{
    if (Array.isArray(seedObject)){
        theField.push(...seedObject)
    }
    else{
        theField.push(seedObject)
    }

}

export const usePlant =() =>{
    theField.slice()
    return theField.slice()
}
