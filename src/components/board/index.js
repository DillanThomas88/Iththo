import react,{useState,useEffect} from "react";
import Svg from "../../svg";


import { generateBoard } from './helper'

function Board(props){

    const gridSize = 9

    const [pieces,setPieces] = useState(generateBoard(gridSize))

    return(<>
    
    <div className="grid grid-cols-9 gap-[1px] bg-neutral-600 p-[1px] content-center justify-center overflow-hidden rounded-[2px]">
    {pieces}
    </div>


    
    </>)
}

export default Board