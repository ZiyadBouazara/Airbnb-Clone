import Cookies from 'js-cookie'
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import AccountInfo from "../components/account/AccountInfo"
import Search from "../components/inputs/Search"
import LocationList from "../components/location/LocationList"
import LogementList from "../components/logement/LogementList"
import { LocationType } from "../utils/LocationType"
import { LogementType } from "../utils/LogementType"
import { UserType } from "../utils/UserType"
import { getFavorites, getLocations, getUser } from "../utils/api/user"


const Account: React.FC = () => {

  const userId = Cookies.get("userId");
  const navigate = useNavigate();

  const [user, setUser] = useState<UserType>();
  const [favorites, setFavorites] = useState<LogementType[]>([])
  const [favoritesSearch, setFavoritesSearch] = useState<string>("");
  const [locations, setLocations] = useState<LocationType[]>([]);

  useEffect(() => {
    if (userId) {
      getUser(userId)
        .then(res => {
          if (res.status === 200) {
            res.json().then(user => {
              setUser(user[0]);
            })
          }
        }).catch(err => {
          console.error(err);
        })
      getLocations(userId)
        .then(res => {
          if (res.status === 200) {
            res.json().then(locations => {
              setLocations(locations);
            })
          } else {
            setLocations([]);
          }
        }).catch(err => {
          console.error(err)
      })
    } else {
      navigate("/");
    }
  }, [])

  useEffect(() => {
    if (userId) {
      getFavorites(userId, favoritesSearch)
        .then(res => {
          if (res.status === 200) {
            res.json().then(favorites => {
              setFavorites(favorites);
            })
          } else {
            setFavorites([]);
          }
        }).catch(err => {
          console.log(err);
        })
    }
  }, [favoritesSearch])

  return (
  <div className="flex flex-col mx-3 md:px-10 lg:px-20">
    <section className="flex flex-col items-center mt-6">
      {user ? <AccountInfo user={user} /> : null}
    </section>
    <section className="flex flex-col items-center mt-6">
      <div className="mb-2 md:mb-4">
        <div className="mb-2 md:mb-4">
          <h1 className="font-semibold text-xl flex justify-center">Locations ({locations.length})</h1>
        </div>
        {locations.length !== 0 ? <LocationList locations={locations} /> : <div>Aucune location.</div> }
      </div>
    </section>
    <section className="mt-2 md:mt-4">
      <div className="flex flex-col">
        <div className="mb-2 md:mb-4">
          <h1 className="font-semibold text-xl flex justify-center">Favoris ({favorites.length})</h1>
        </div>
        <Search setState={setFavoritesSearch} id="favoris-search" placeholder="Rechercher un favori..." />
      </div>
      <div className="my-2 md:my-4 flex justify-center">
        {favorites.length !== 0 ? <LogementList logements={favorites} /> : <div>Aucun favori.</div> }
      </div>
    </section>
  </div>
  )
}

export default Account