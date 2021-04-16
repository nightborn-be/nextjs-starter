export default interface FlexProps {
    className?:string,
    type?: 'full' | '3xl' | '2xl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs',
    children: any,
    fitHeight?: boolean
}