import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ pokemon }) {
  const [sprite, setSprite] = useState('front')

  function flipCard() {
    if (sprite === 'front') {
      setSprite('back')
    } else {
      setSprite('front')
    }
  }

  return (
    <Card onClick={flipCard}>
      <div>
        <div className="image">
          <img src={pokemon.sprites[sprite]} alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{pokemon.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {pokemon.hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
