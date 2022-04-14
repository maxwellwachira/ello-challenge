import styled from "styled-components";

export const Wrapper = styled.div`
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
    width:50%;
    display: flex;
    flex-direction: column;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    background: ${(props) => props.theme.cardBackground};

    h3 {
        display: flex;
        justify-content: center;
    }

    @media screen and (max-width: 500px) {
        width:95%;
    }
    @media screen and (max-width: 768px) {
        width:80%;
    }


`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    margin: 10px;

`;

export const TextButton = styled.button`
    
    background: white;
    border: none;
    font-size:30px;
    cursor: pointer;
    
`;

export const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    button {
        background: var(--darkGrey);
        color:var(--white);
        padding: 5px 10px;
        margin: 10px;
        font-size:20px;
        border: var(--darkGrey);
        cursor: pointer;


        :hover {
            opacity: 0.8;
        }
    }

    .hidden {
        display: none;
    }

`;