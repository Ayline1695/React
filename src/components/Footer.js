export function Footer({contact, links}){
    return(
    <div>
    <ul>
        <li>{contact.email}</li>
        <li>{contact.phone}</li>
        <ul>
        <li>{contact.address.country}</li>
        <li>{contact.address.street}</li>
        <li>{contact.address.state}</li>
        </ul>
    </ul>
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