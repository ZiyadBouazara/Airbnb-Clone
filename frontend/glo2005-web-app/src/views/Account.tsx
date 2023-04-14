import LogementListItem from "../components/logement/LogementListItem"
import Search from "../components/inputs/Search"
import LogementList from "../components/logement/LogementList"
import AccountInfo from "../components/account/AccountInfo"
import { useState, useEffect } from "react"
import { getFavorites, getUser } from "../utils/api/user"
import Cookies from 'js-cookie'
import { UserType } from "../utils/UserType"
import { LogementType } from "../utils/LogementType"

const Account: React.FC = () => {

  const userId = Cookies.get("userId");

  const [user, setUser] = useState<UserType>();
  const [favorites, setFavorites] = useState<LogementType[]>([])

  useEffect(() => {
    if (userId) {
      getUser(userId)
        .then(user => {
          setUser(user[0] as UserType);
        });
      getFavorites(userId)
        .then(favorites => {
          setFavorites(favorites);
        })
    }
  }, [])

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


  return (
    <div className="flex flex-col mx-3 md:px-10 lg:px-20">
      <section className="flex flex-col items-center mt-6">
        {user ? <AccountInfo user={user} /> : null}
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