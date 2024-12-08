interface colorRender{
    isOpen: Boolean
}
export const LinkedInIcon = (props: colorRender)=>{
    return(
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill={props.isOpen ? "#0077B5" : "none"} stroke={props.isOpen ? "none" : "white"} stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
    )
}