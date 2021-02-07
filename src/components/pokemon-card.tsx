import React, { FunctionComponent, useState} from "react";
import Pokemon from "../models/pokemon";
import './pokemon-card.css';

type props = {
    pokemon: Pokemon,
    borderColor?: string
};

const PokemonCard: FunctionComponent<props> = ({pokemon, borderColor= '#009688'}) => {
    const [color, setColor] = useState<string>();

    const showBorder = () => {
        setColor(borderColor);
    }

    const hideBorder = () => {
        setColor('#F5F5F5');
    }

    const formatDate = (date: Date):string => {
        return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
    }

    return (
        <div className="col s6 m4" onMouseEnter={showBorder} onMouseLeave={hideBorder}>
            <div className="card horizontal" style={{ borderColor: color }}>
                <div className="card-image">
                    <img src={pokemon.picture} alt={pokemon.name}/>
                </div>
                <div className="card-stacked">
                    <div className="card-content">
                        <p>{pokemon.name}</p>
                        <p><small>{formatDate(pokemon.created)}</small></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PokemonCard;