import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router';
import {
    Table,
    ListGroup,ListGroupItem, Button,
    UncontrolledAccordion, AccordionItem, AccordionHeader, AccordionBody
} from 'reactstrap'
import { curMenuHandler } from '../../../redux/menu/action';

const Home = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const loc = useLocation();

    useEffect(() => {
        dispatch(curMenuHandler({no:3, name:'홈', link: loc.pathname}));
     },[]);

    return (
        <div>
              <UncontrolledAccordion defaultOpen="1" style={{marginBottom:'5%'}}>
                <AccordionItem>
                <AccordionHeader targetId="1">
                    메인글
                </AccordionHeader>
                <AccordionBody accordionId="1">
                    저렴한 항공권으로 예약을 도와드리고 있습니다.
                </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                <AccordionHeader targetId="2">
                    항공권 예약방법
                </AccordionHeader>
                <AccordionBody accordionId="2">
                    항공권 목록 확인 후 예약을 진행해주세요.
                </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                <AccordionHeader targetId="3">
                    예약완료 티켓 확인방법
                </AccordionHeader>
                <AccordionBody accordionId="3">
                    예약완료 티켓은 예약완료 티켓확인 페이지에서 확인 할 수 있습니다.
                </AccordionBody>
                </AccordionItem>
            </UncontrolledAccordion>

            <p>
                현재 인기있는{' '}
                <code>
                대표 항공권
                </code>
                {' '} 목록입니다.
            </p>
            <ListGroup horizontal>
                <ListGroupItem
                href="#"
                tag="a"
                >
                대만
                </ListGroupItem>
                <ListGroupItem
                href="#"
                tag="a"
                >
                미국
                </ListGroupItem>
                <ListGroupItem
                href="#"
                tag="a"
                >
                영국
                </ListGroupItem>
            </ListGroup>

    </div>
    );
};

export default Home;