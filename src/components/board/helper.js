import Piece from "../piece";

export function generateBoard(res){
        
    let arr = []
    let key = 0

    for (let i = 0; i < res; i++) {
        for (let j = 0; j < res; j++) {
            let color = undefined
            let css = undefined

            if(i < 2){
                if(j === Math.floor(res/2) && i === 0){
                    css = 'bg-white'
                    color = 'white-king'
                } else {
                    css = 'bg-white'
                    color = 'white'                 
                }
            }
            if(i >= res-2){
                if(j === Math.floor(res/2) && i === res - 1){
                    css = 'bg-black'
                    color = 'black-king'
                } else {
                    css = 'bg-black'
                    color = 'black'
                }
            }
            arr.push(
            <Piece 
            key={key}
            id={key} 
            row={i}
            col={j}
            color={color}
            css={{style: css, color: color}}            
            />)
            key++
        }
        
    }

    return arr

}