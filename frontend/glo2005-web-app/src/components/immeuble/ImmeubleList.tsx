import ImmeubleListItem from "./ImmeubleListItem"

const ImmeubleList: React.FC = () => {
    const immeubles = [
        {
            id: 1,
            name: "Lamiaceae",
            photo: "https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg",
            address: "42 Sunnyside Park",
            sector: "Watuagung",
            minPrice: 400,
            type: "Condo/Loft"
        },
        {
            id: 2,
            name: "Parmeliaceae",
            photo: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
            address: "14 Towne Parkway",
            sector: "Heidelberg",
            minPrice: 600,
            type: "Appartements"
        },
        {
            id: 3,
            name: "Dryopteridaceae",
            photo: "https://immeublesroussin.com/wp-content/uploads/2021/01/photoCentreHamel.webp",
            address: "72736 Village Drive",
            sector: "Kebon",
            minPrice: 300,
            type: "Commercial"
        },
        {
            id: 4,
            name: "Lamiaceae",
            photo: "https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg",
            address: "42 Sunnyside Park",
            sector: "Watuagung",
            minPrice: 400,
            type: "Condo/Loft"
        },
        {
            id: 5,
            name: "Parmeliaceae",
            photo: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
            address: "14 Towne Parkway",
            sector: "Heidelberg",
            minPrice: 600,
            type: "Appartements"
        },
        {
            id: 6,
            name: "Dryopteridaceae",
            photo: "https://immeublesroussin.com/wp-content/uploads/2021/01/photoCentreHamel.webp",
            address: "72736 Village Drive",
            sector: "Kebon",
            minPrice: 300,
            type: "Commercial"
        },
        {
            id: 7,
            name: "Lamiaceae",
            photo: "https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg",
            address: "42 Sunnyside Park",
            sector: "Watuagung",
            minPrice: 400,
            type: "Condo/Loft"
        },
        {
            id: 8,
            name: "Parmeliaceae",
            photo: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
            address: "14 Towne Parkway",
            sector: "Heidelberg",
            minPrice: 600,
            type: "Appartements"
        },
        {
            id: 9,
            name: "Dryopteridaceae",
            photo: "https://immeublesroussin.com/wp-content/uploads/2021/01/photoCentreHamel.webp",
            address: "72736 Village Drive",
            sector: "Kebon",
            minPrice: 300,
            type: "Commercial"
        },
        {
            id: 10,
            name: "Lamiaceae",
            photo: "https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg",
            address: "42 Sunnyside Park",
            sector: "Watuagung",
            minPrice: 400,
            type: "Condo/Loft"
        },
        {
            id: 11,
            name: "Parmeliaceae",
            photo: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
            address: "14 Towne Parkway",
            sector: "Heidelberg",
            minPrice: 600,
            type: "Appartements"
        },
        {
            id: 12,
            name: "Dryopteridaceae",
            photo: "https://immeublesroussin.com/wp-content/uploads/2021/01/photoCentreHamel.webp",
            address: "72736 Village Drive",
            sector: "Kebon",
            minPrice: 300,
            type: "Commercial"
        },
        {
            id: 13,
            name: "Lamiaceae",
            photo: "https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg",
            address: "42 Sunnyside Park",
            sector: "Watuagung",
            minPrice: 400,
            type: "Condo/Loft"
        },
        {
            id: 14,
            name: "Parmeliaceae",
            photo: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
            address: "14 Towne Parkway",
            sector: "Heidelberg",
            minPrice: 600,
            type: "Appartements"
        },
        {
            id: 15,
            name: "Dryopteridaceae",
            photo: "https://immeublesroussin.com/wp-content/uploads/2021/01/photoCentreHamel.webp",
            address: "72736 Village Drive",
            sector: "Kebon",
            minPrice: 300,
            type: "Commercial"
        },
    ]

  return (
    <ul className="flex flex-wrap justify-center gap-2">
        {immeubles.map((immeuble) => (
            <ImmeubleListItem key={immeuble.id} id={immeuble.id} name={immeuble.name} photo={immeuble.photo} adress={immeuble.address} sector={immeuble.sector} minPrice={immeuble.minPrice} type={immeuble.type} />
        ))}
    </ul>
  )
}

export default ImmeubleList