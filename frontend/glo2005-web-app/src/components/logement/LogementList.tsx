import React from 'react'
import LogementListItem from './LogementListItem'
import { LogementType } from '../../utils/LogementType'


interface Props {
    logements: LogementType[];
}

const LogementList: React.FC<Props> = ({ logements }) => {

  return (
    <ul className="flex flex-wrap justify-center gap-2">
        {logements.map((logement) => (
            <LogementListItem key={logement.id_logement} id={logement.id_logement} immeubleId={logement.contient} photos={logement.photos} available={logement.available} number={logement.numero} price={logement.price} rooms={logement.pieces} size={logement.taille} isChecked={logement.isChecked} />
            ))}
    </ul>
  )
}

export default LogementList