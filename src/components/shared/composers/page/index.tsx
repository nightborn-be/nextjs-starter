export default function Page({children, className = ""}) {
    return (
        <div className={`bg-page h-screen flex flex-column ${className}`}>
            {children}
        </div>
    )
}