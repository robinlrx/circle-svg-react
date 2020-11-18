import React from 'react';
import styled from "styled-components";

function Circle() {
    const Wrapper = styled.div`
        width: 100%;
        border: solid blue;
    `;

    return (
        <Wrapper>
            <svg height="100" width="100" >
                <circle cx="50" cy="50" r="25" stroke="black" class="sc-cOajty gxZIjd"></circle>
                <text x="50" y="50">0</text>
            </svg>
        </Wrapper>
    );
}

export default Circle;