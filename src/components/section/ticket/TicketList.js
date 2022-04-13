import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router';
import {
    Table,
    ListGroup,ListGroupItem, Button
} from 'reactstrap'
import { curMenuHandler } from '../../../redux/menu/action';
import { getTicketListHandler } from '../../../redux/ticket/action';

const TicketList = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const loc = useLocation();

    const ticketList = useSelector(state => state.ticketReducer.ticketList);

    useEffect(() => {
        dispatch(curMenuHandler({no:4, name:'항공권 목록', link: loc.pathname}));
     },[]);

     const T = ticketList.map((ticket => 
                                    <tr>
                                        <th scope="row">
                                            {ticket.no}
                                        </th>
                                        <td>
                                            {ticket.arrivalAreaName}
                                        </td>
                                        <td>
                                            {ticket.departureDate}
                                        </td>
                                        <td>
                                            {ticket.price}
                                        </td>
                                        <td>
                                            <Button>예약진행</Button>
                                        </td>
                                    </tr>
                            ))

    return (
        <div>
            <p className="mt-3">
            전체 {' '}
            <code>
            항공권
            </code>
            목록입니다. 선택 후 예약 진행 해주세요~
        </p>
        <Table hover>
            <thead>
                <tr>
                <th>
                    #
                </th>
                <th>
                   도착지
                </th>
                <th>
                    출발일시
                </th>
                <th>
                    가격
                </th>
                <th>
                    예약진행하기
                </th>
                
                </tr>
            </thead>
            <tbody>
                {T}
            </tbody>
        </Table>
        </div>
    );
};

export default TicketList;