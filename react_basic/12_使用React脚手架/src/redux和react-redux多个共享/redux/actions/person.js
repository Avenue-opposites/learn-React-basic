import { ADD_PERSON } from "../constant";

const addPerson = (person) => ({type:ADD_PERSON,data:person});

export {
    addPerson
};