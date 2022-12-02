import { useState } from 'react';
import styled from 'styled-components';

const ModalBackGround = styled.div`
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.5);
`;
const ModalBody = styled.div`
    background-color: white;
    margin: 10% auto;
    padding: 20px;
    width: 50%;
`;

export const UncontrolledModal = ({ children }) => {
    const [shouldShow, setShouldShow] = useState(false);

    const OpenModal = () => {
        setShouldShow(true);
    }

    const CloseModal = () => {
        setShouldShow(false);
    }

    const StopEventPropagation = (e) => {
        e.stopPropagation();
    }

    return (
        <>
            <button onClick={OpenModal}>Show Modal</button>
            {shouldShow && (
                <ModalBackGround onClick={CloseModal}>
                    <ModalBody onClick={StopEventPropagation}>
                        <button onClick={CloseModal}>Close Modal</button>
                        {children}
                    </ModalBody>
                </ModalBackGround>
            )}
        </>
    );
}
