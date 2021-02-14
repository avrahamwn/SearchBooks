export const REMOVE_BOOK = 'REMOVE_BOOK';


export function removeBook(book){
    return { type: REMOVE_BOOK, payload: book}
}
