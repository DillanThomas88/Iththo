import Svg from "../../svg"

function Piece(props) {



    return (<>
        <div style={{ boxShadow: '0px 0px 1px black' }}
            className="tile h-3 w-3 bg-sky-500 rounded-[1px] hover:bg-sky-300 focus:bg-sky-300 p-[2px]"
            id={props.id}
            row={props.row}
            col={props.col}
            has-piece={props.hasPiece}
        >
            <div
                className={props.color ? `${props.css.color, props.css.style} rounded-full h-full w-full pointer-events-none` : ''}>
                {props.color === 'black-king' && <Svg title={'king'} css={'text-white h-full w-full p-[1px] pointer-events-none'} />}
                {props.color === 'white-king' && <Svg title={'king'} css={'text-black h-full w-full p-[1px] pointer-events-none'} />}
            </div>

        </div>
    </>)
}

export default Piece