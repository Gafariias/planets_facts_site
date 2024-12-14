export function Hamburger(p: {fill: string}) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="17"><g fill={p.fill} fill-rule="evenodd"><path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z"/></g></svg>
    )
}

export function Chevron(p: {fill: string}) {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" width="6" height="8"><path fill="none" stroke="#FFF" opacity=".4" d="M1 0l4 4-4 4"/></svg>
    )
}