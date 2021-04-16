import FlexProps from "./props";

export default function Flex(props: FlexProps = {type: 'col', align: 'start', justify: 'start'}) {
    return (
        <div className={`flex-1 flex flex-${props.type} items-${props.align} justify-${props.justify}`}>
            {props.children}
        </div>
    )
}