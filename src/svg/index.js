import {ReactComponent as BlackKing} from './blackKing.svg'


function Svg(props){
    let svg = {
        king: <BlackKing className={props.css} />,
    }

    return (<>
        {svg[props.title]}
    </>)
}

export default Svg