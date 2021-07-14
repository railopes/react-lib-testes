import React, {InputHTMLAttributes,CSSProperties} from 'react'


const valueStyle:CSSProperties = {
    width:"120px",
    height:"35px",
    borderRadius:".5em",
    border:"1px solid #BBB",
    cursor:"pointer"
}

interface ButtonPropsItem extends InputHTMLAttributes<HTMLButtonElement> {
    textContent:string
    testid?:string
}


export const Button:React.FC<ButtonPropsItem> = ({onClick,textContent}:ButtonPropsItem)=>{

    


    return (
        <button data-testid="teste-do-botao" style={valueStyle} onClick={onClick}>{textContent}</button>
    )
}