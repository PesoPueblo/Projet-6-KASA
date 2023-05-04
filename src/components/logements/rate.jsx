import pinkstars from '../../asset/pinkstar.png'
import greystars from '../../asset/greystar.png'
export default function Rate ({rate}){
    const stars=[];
    //ajout des étoiles roses en fontion de la note enregistré
    for (let i = 0; i < rate; i++) {
        stars.push(
            <img src={pinkstars} alt="..." />
        )        
    }
    //ajout du reste des étoiles en étoiles grise 
    for (let i = 0; i< 5-rate; i++){
        stars.push(
            <img src={greystars} alt=".." />
        )
    }
    return stars
}