interface colorRender{
    isOpen: Boolean
}
export const TwitterLogo = (props:colorRender) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill={props.isOpen ? "#1DA1F2" : "none"} stroke={props.isOpen ? "none" : "white"} stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
    )
}