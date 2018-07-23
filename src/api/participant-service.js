import { participants } from '../data/participant-json';

export const fetchParticipantList = _ => {
    return new Promise( (resolve, reject) => {
        resolve(participants);
        // reject("Something went wrong.")
    })
}