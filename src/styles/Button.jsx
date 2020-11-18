import React from 'react';
import styled from "styled-components";

function Button() {
    const Button = styled.button`
        border: solid 3px #E91E63;
        color: white;
        padding: 20px 40px;
        margin: 10px;
        background-color: #E91E63;
        &:hover {
            background-color: white;
            color: #E91E63;
            cursor: pointer;
        }
    `;
    const Wrapper = styled.div`
        display: flex;
        justify-content: center;
        align-items: flex-start;
    `;

    return (
        <Wrapper>
            <Button>ADD CIRCLE</Button>
            <Button>SHUFFLE</Button>
            <Button>STOP ODD NUMBER</Button>
            <Button>START ODD NUMBER</Button>
        </Wrapper>
    );
}

export default Button;