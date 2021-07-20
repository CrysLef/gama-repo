import React, { useState } from 'react'
import axios from 'axios'
import * as S from './styled'
import { useHistory } from 'react-router-dom'

export default function Home() {
    const history = useHistory()
    const [ usuario, setUsuario ] = useState('')
    const [ erro, setErro ] = useState(false)

    const handleQuery = function() {
        axios.get(`https://api.github.com/users/${usuario}/repos`)
        .then(response => {
            const repositories = response.data
            const repositoriesName = []

            repositories.map(repository => repositoriesName.push(repository.name))

            localStorage.setItem('repositoriesName',JSON.stringify(repositoriesName))
            setErro(false)
            history.push('/repositories')
        })
        .catch(error => setErro(true))
    }

    return (
        <S.HomeContainer>
            <S.Content>
                <S.Label>Digite o nome do usuário de Github</S.Label>
                <S.Input type="text" value={ usuario } onChange={e => setUsuario(e.target.value)} placeholder="Digite o usuário" />
                <S.Button type="button" onClick={handleQuery}>Pesquisar</S.Button>
            </S.Content>
            { erro ? <S.ErrorMsg>Ocorreu um erro. Tente novamente</S.ErrorMsg> : '' }
        </S.HomeContainer>
    )
}