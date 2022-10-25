import React from 'react'
import { ComentarioStyle } from './styled'


export default function Comentario(props) {
    return (
        <ComentarioStyle>
            <input placeholder="Adicionar comentario" value={props.comentarioDoPost} onChange={props.onChangeComentarios}/>
            <button onClick={props.adicionaComentario}>Comentar Post</button>
            <p>{props.textoComentario.comentario}</p>
        </ComentarioStyle>
    )
}
