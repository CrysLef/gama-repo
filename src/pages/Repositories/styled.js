import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
    width: 100%;
    max-width: 991px;
    margin: 0 auto;
`

export const Title = styled.h1`
    font-size: 3.2rem;
    color: var(--white);
    text-shadow: 0 0 10px rgba(0,0,0,0.7);
    text-align: center;
`

export const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`

export const ListItem = styled.li`
    margin: .8rem;
    color: var(--white);
    border-radius: .5rem;
    padding: 1rem;
    background-color: var(--blackPearl);
    font-size: 1.6rem;
`

export const LinkHome = styled(Link)`
    display: block;
    width: 8rem;
    text-align: center;
    margin: 3.2rem auto;
    background-color: var(--blackPearl);
    padding: .8rem 0;
    color: var(--white);
    text-decoration: none;
    font-size: 1.6rem;
    border-radius: 0.5rem;
    font-weight: 700;

    &:hover {
        background-color: var(--white);
        color: var(--black);
    }
`