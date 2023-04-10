import React from 'react'
import LogementListItem from './LogementListItem'
import { Logement } from '../../utils/Logement'



interface Props {
    logements: Logement[]
}

const LogementList: React.FC<Props> = ({ logements }) => {

  return (
    <ul className="flex flex-wrap justify-center gap-2">
        {logements.map((logement) => (
            <LogementListItem key={logement.id} id={logement.id} immeubleId={logement.immeubleId} photos={logement.photos} available={logement.available} number={logement.number} price={logement.price} rooms={logement.rooms} size={logement.size} />
            ))}
    </ul>
  )
}

export default LogementList