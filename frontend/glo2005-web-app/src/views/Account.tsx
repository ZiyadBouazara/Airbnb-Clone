import LogementListItem from "../components/logement/LogementListItem"
import Search from "../components/inputs/Search"
import LogementList from "../components/logement/LogementList"

const Account: React.FC = () => {

  const location = {
    startDate: "2022-07-01", 
    endDate: "2023-07-01", 
    immeubleName: "Lamiaceae",
    logement: {
      id: 1,
      immeubleId: 1,
      available: true,
      photos: [
        "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
        "https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg",
        "https://images.pexels.com/photos/275484/pexels-photo-275484.jpeg",
        "https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg"
      ],
      rooms: "3 1/2",
      size: 603,
      number: 2,
      price: 500,
    }
  }

  const favorites = [
    {
      id: 1,
      immeubleId: 1,
      available: true,
      photos: [
        "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
        "https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg",
        "https://images.pexels.com/photos/275484/pexels-photo-275484.jpeg",
        "https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg"
      ],
      rooms: "3 1/2",
      size: 603,
      number: 2,
      price: 500,
    },
    {
      id: 2,
      immeubleId: 1,
      available: false,
      photos: [
        "https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg",
        "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
        "https://images.pexels.com/photos/275484/pexels-photo-275484.jpeg",
        "https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg"
      ],
      rooms: "4 1/2",
      size: 807,
      number: 4,
      price: 750,
    },
    {
      id: 3,
      immeubleId: 1,
      available: true,
      photos: [
        "https://images.pexels.com/photos/275484/pexels-photo-275484.jpeg",
        "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
        "https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg",
        "https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg"
      ],
      rooms: "5 1/2",
      size: 900,
      number: 6,
      price: 1010,
    },
    {
      id: 4,
      immeubleId: 1,
      available: false,
      photos: [
        "https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg",
        "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
        "https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg",
        "https://images.pexels.com/photos/275484/pexels-photo-275484.jpeg",
      ],
      rooms: "6 1/2",
      size: 1000,
      number: 8,
      price: 1150,
    },
  ]

  const user = {
    id: 1,
    name: "John Doe",
    email: "johndoe@google.com",
    phoneNumber: "123-456-6789",
    age: 69
  }

  return (
    <div className="flex flex-col mx-3 md:px-10 lg:px-20">
      <section className="flex flex-col items-center mt-6">
        <div className="flex border border-black rounded-lg justify-center p-2">
          <svg className="w-24 h-24 text-black -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
          <ul>
            <li>Nom: {user.name}</li>
            <li>Courriel: {user.email}</li>
            <li>Numéro de téléphone: {user.phoneNumber}</li>
            <li>Âge: {user.age} ans</li>
          </ul>
        </div>
      </section>
      <section className="flex flex-col items-center mt-6">
        <div className="mb-2 md:mb-4">
          <h1 className="font-semibold text-xl flex justify-center">Location</h1>
          <ul className="flex flex-wrap gap-1">
            <li>{location.immeubleName}</li>
            <li>·</li>
            <li>{location.startDate} à {location.endDate}</li>
          </ul>
        </div>
        <div className="list-none">
          <LogementListItem id={location.logement.id} immeubleId={location.logement.immeubleId} available={location.logement.available} number={location.logement.number} photos={location.logement.photos} price={location.logement.price} rooms={location.logement.rooms} size={location.logement.size} />
        </div>
      </section>
      <section className="mt-2 md:mt-4">
        <div className="flex flex-col">
          <div className="mb-2 md:mb-4">
            <h1 className="font-semibold text-xl flex justify-center">Favoris ({favorites.length})</h1>
          </div>
          <Search id="logement-search" placeholder="Rechercher un logement..." />
        </div>
        <div className="mt-2 md:mt-4">
          <LogementList logements={favorites} />
        </div>
      </section>
    </div>
  )
}

export default Account