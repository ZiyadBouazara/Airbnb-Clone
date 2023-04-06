import ImmeubleListItem from "./ImmeubleListItem"

const ImmeubleList = () => {
    const immeubles = [
        {
            id: 1,
            name: "Lamiaceae",
            photo: "https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg",
            address: "42 Sunnyside Park",
            minPrice: 400,
            type: "Condo/Loft"
        },
        {
            id: 2,
            name: "Parmeliaceae",
            photo: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
            address: "14 Towne Parkway",
            minPrice: 600,
            type: "Appartements"
        },
        {
            id: 3,
            name: "Lamiaceae",
            photo: "https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg",
            address: "42 Sunnyside Park",
            minPrice: 400,
            type: "Condo/Loft"
        },
        {
            id: 4,
            name: "Parmeliaceae",
            photo: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
            address: "14 Towne Parkway",
            minPrice: 600,
            type: "Appartements"
        },
        {
            id: 5,
            name: "Lamiaceae",
            photo: "https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg",
            address: "42 Sunnyside Park",
            minPrice: 400,
            type: "Condo/Loft"
        },
        {
            id: 6,
            name: "Parmeliaceae",
            photo: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
            address: "14 Towne Parkway",
            minPrice: 600,
            type: "Appartements"
        },
        {
            id: 7,
            name: "Lamiaceae",
            photo: "https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg",
            address: "42 Sunnyside Park",
            minPrice: 400,
            type: "Condo/Loft"
        },
    ]

  return (
    <ul className="flex flex-wrap justify-center gap-2">
        {immeubles.map((immeuble) => (
            <ImmeubleListItem id={immeuble.id} name={immeuble.name} photo={immeuble.photo} adress={immeuble.address} minPrice={immeuble.minPrice} type={immeuble.type} />
        ))}
    </ul>
  )
}

export default ImmeubleList