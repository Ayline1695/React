
export function Navbar({title,logo,links}){
    return(
    <div>
    <h1>{title}</h1>
    <img alt={logo.alt} src={logo.img} />
    { listLinks({links}) }
    </div>
    )
}

function listLinks({links}){
     return (
        <ul>
            {links.map((link) =>(
        <li><a href={link.to}>{link.label}</a></li>))
            }
        </ul>
     )
    }