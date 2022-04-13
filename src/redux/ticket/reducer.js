import { GET_TICKET_LIST } from "./actionType"

const initialState = {
    ticketList : [
            {no: 1, arrivalAreaName:'도쿄 하네다', code:'HND', departureDate: '2022-04-13 14:00', price: 200000 },
            {no: 2, arrivalAreaName:'도쿄 하네다', code:'HND', departureDate: '2022-04-14 14:00', price: 200000 },
            {no: 3, arrivalAreaName:'도쿄 하네다', code:'HND', departureDate: '2022-04-16 14:00', price: 250000 },
            {no: 4, arrivalAreaName:'도쿄 하네다', code:'HND', departureDate: '2022-04-12 14:00', price: 200000 },
            {no: 5, arrivalAreaName:'도쿄 하네다', code:'HND', departureDate: '2022-05-13 14:00', price: 150000 },
            {no: 6, arrivalAreaName:'도쿄 하네다', code:'HND', departureDate: '2022-05-13 14:00', price: 100000 },
            {no: 7, arrivalAreaName:'도쿄 하네다', code:'HND', departureDate: '2022-06-11 14:00', price: 260000 },
            {no: 8, arrivalAreaName:'도쿄 하네다', code:'HND', departureDate: '2022-07-22 14:00', price: 200000 },
            {no: 9, arrivalAreaName:'도쿄 하네다', code:'HND', departureDate: '2022-07-21 14:00', price: 220000 },
            {no: 10, arrivalAreaName:'도쿄 하네다', code:'HND', departureDate: '2022-07-13 14:00', price: 200000 },
            {no: 11, arrivalAreaName:'도쿄 하네다', code:'HND', departureDate: '2022-07-13 14:00', price: 200000 },
            {no: 12, arrivalAreaName:'도쿄 나리타', code:'NRT', departureDate: '2022-04-13 14:00', price: 450000 },
            {no: 13, arrivalAreaName:'도쿄 나리타', code:'NRT', departureDate: '2022-05-13 11:00', price: 500000 },
            {no: 14, arrivalAreaName:'도쿄 나리타', code:'NRT', departureDate: '2022-07-13 15:00', price: 250000 }
    ]
}

const ticketReducer = (state=initialState, action) => {
    switch(action.type) {
        case GET_TICKET_LIST:
            return {
                ...state
            }
        default: return state;
    }
}

export default ticketReducer;