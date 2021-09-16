import styled from 'styled-components';


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
    cursor:pointer;
`;