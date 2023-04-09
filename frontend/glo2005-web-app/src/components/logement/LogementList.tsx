import React from 'react'
import LogementListItem from './LogementListItem'

const LogementList: React.FC = () => {

    const logements = [
        {
            id: 1,
            immeubleId: 1,
            photos: [
                "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
                "https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg",
                "https://images.pexels.com/photos/275484/pexels-photo-275484.jpeg",
                "https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg"
            ],
            available: true,
            rooms: "3 1/2",
            size: "idk",
            number: 1,
            price: 100
        },
        {
            id: 2,
            immeubleId: 2,
            photos: [
                "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
                "https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg",
                "https://images.pexels.com/photos/275484/pexels-photo-275484.jpeg",
                "https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg"
            ],
            available: false,
            rooms: "4 1/2",
            size: "idk",
            number: 3,
            price: 300
        },
        {
            id: 3,
            immeubleId: 3,
            photos: [
                "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
                "https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg",
                "https://images.pexels.com/photos/275484/pexels-photo-275484.jpeg",
                "https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg"
            ],
            available: true,
            rooms: "5 1/2",
            size: "idk",
            number: 5,
            price: 500
        },
        {
            id: 4,
            immeubleId: 4,
            photos: [
                "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
                "https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg",
                "https://images.pexels.com/photos/275484/pexels-photo-275484.jpeg",
                "https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg"
            ],
            available: false,
            rooms: "4 1/2",
            size: "idk",
            number: 7,
            price: 700
        },
    ]

  return (
    <ul className="flex flex-wrap justify-center gap-2">
        {logements.map((logement) => (
            <LogementListItem key={logement.id} id={logement.id} immeubleId={logement.immeubleId} photos={logement.photos} available={logement.available} number={logement.number} price={logement.price} rooms={logement.rooms} size={logement.size} />
            ))}
    </ul>
  )
}

export default LogementList