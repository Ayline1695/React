
export function Hero({title,subtitle,img}){
    return(
    <div>
    <h1>{title}</h1>
    <h2>{subtitle}</h2>
    <img alt={img.alt} src={img.src} />
    </div>
    )
}