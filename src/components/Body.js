export function Body({utilsSection,developersSection}){
    const {cards} = utilsSection;
    const { developers} = developersSection
    //console.log("CARDS",cards)
    return(
    <div>
    <h1>{utilsSection.sectionTitle}</h1>
    { cards.map((util) =>(
        <section>
           <h4>{util.utilName}</h4>
           <p>{util.utilDescription}</p>
           <img alt={util.utilImg.alt} src={util.utilImg.src} />
</section>
       ))
           }
           <div>
    <h1>{developersSection.sectionTitle}</h1>
    { developers.map((d) =>(
        <section>
           <h4>{d.name}</h4>
           <p>{d.description}</p>
           <img alt={d.developerImg.alt} src={d.developerImg.src} />
</section>
       ))
           }
    </div>
    </div>
    )
}

// no se PORQUE?! no funciona cuando lo coloco dentro de la funcion

//function listCards({utilsSection}){
//    const {cards} = utilsSection;
//    return (
//       { cards.map((util) =>(
//        <section>
//        <h4>{util.utilName}</h4>
//        <p>{util.utilDescription}</p>
//        <img alt={util.utilImg.alt} src={util.utilImg.src} />
//        </section>
//    ))
//        }
//    )
//   }