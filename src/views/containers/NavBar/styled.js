import styled from 'styled-components';

export const Container = styled.ul`
    align-items: center;
    display: flex;
    list-style: none;
    justify-content: flex-end;
    width: 100%;
`;

export const ListItem = styled.li`
    padding: 10px;
    ul {
        background-color: lightblue;
        display: none;
        list-style: none;
    }
    :hover ul {
        display: block;
        position: fixed;
    }
`;
export const ListLink = styled.a`
    color: black;
    text-decoration: none;
`;
export const Dropdown = styled.ul `
`;
export const DropdownList = styled.li `

`;