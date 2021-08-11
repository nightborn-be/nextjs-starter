export default function Page(props: any) {
	return <div className={`bg-page w-full h-full flex flex-column ${props.className}`}>{props.children}</div>;
}
