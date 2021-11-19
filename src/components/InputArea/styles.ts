import styled from 'styled-components';

export const Container = styled.div`
    background-color: #7e7e7e;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 10px;
    padding: 20px;
    margin-top: 20px;
    display: flex;
    align-items: center;
`;
export const InputLabel = styled.label`
    flex: 1;
    margin: 10px;
`;
export const InputTitle = styled.div`
    font-weight: bold;
    margin-bottom: 5px;
`;
export const Input = styled.input`
    background: transparent;
    width: 100%;
    height: 30px;
    padding: 0 5px;
    border: 1px solid #4d4d4d;
    border-radius: 5px;
    outline: none;
`;
export const Select = styled.select`
    width: 100%;
    height: 30px;
    padding: 0 5px;
    background-color: transparent;
    border-radius: 5px;
    border: 1px solid #4d4d4d;
    &:focus-visible {
      outline: none;
    }
    &:hover {
      background-color: transparent;
    }
`;
export const Button = styled.button`
    width: 100%;
    height: 30px;
    padding: 0 5px;
    border: none;
    border-radius: 5px;
    background-color: rgba(173, 216, 230, .4);
    color: black;
    cursor: pointer;
    &:hover {
      background-color: rgba(173, 216, 230, .6);
    }
`;
