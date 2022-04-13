import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router';
import {
    Table,
    ListGroup,ListGroupItem, Button
} from 'reactstrap'
import { curMenuHandler } from '../../../redux/menu/action';

const TicketList = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const loc = useLocation();

    useEffect(() => {
        dispatch(curMenuHandler({no:4, name:'항공권 목록', link: loc.pathname}));
     },[]);

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
                    도착일시
                </th>
                <th>
                    예약진행하기
                </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">
                    1
                </th>
                <td>
                    대만
                </td>
                <td>
                    2022-04-13 14:00
                </td>
                <td>
                    2022-04-13 14:00
                </td>
                <td>
                    <Button>예약진행</Button>
                </td>
                </tr>
                <tr>
                <th scope="row">
                    2
                </th>
                <td>
                    영국
                </td>
                <td>
                    2022-04-13 14:00
                </td>
                <td>
                    2022-04-13 14:00
                </td>
                <td>
                    <Button>예약진행</Button>
                </td>
                </tr>
            </tbody>
        </Table>
        </div>
    );
};

export default TicketList;