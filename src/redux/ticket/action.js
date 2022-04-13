import { GET_TICKET_LIST } from "./actionType"

export const getTicketListHandler = (param) => {
    return {
        type: GET_TICKET_LIST,
        payload: param
    }
}