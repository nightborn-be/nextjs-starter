export default function Paragraph({children, className = ""}) {
    return (
        <h2 className="font-normal" style={{color: '#152141'}}>
            {children}
        </h2>
    )
}