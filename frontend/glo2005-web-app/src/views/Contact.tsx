const Contact: React.FC = () => {
  return (
    <div className="flex flex-col mx-3 md:px-10 lg:px-20">
      <section className="mt-6">
      <div className="flex flex-col gap-2 mb-6 text-sm">
        <h1 className="font-semibold text-xl">Contact</h1>
      </div>
      <ul className="flex flex-wrap gap-1 justify-center">
        <li><span>📞</span></li>
        <li><span>·</span></li>
        <li>Bureau: <span className="hover:underline">418-659-2347</span></li>
        <li><span>·</span></li>
        <li>Ventes: <span className="hover:underline">418-IMMOFAB (418-466-6322)</span></li>
      </ul>
      </section>
      <section>
        <form action="">
          <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium">Votre nom (requis)*</label>
              <input type="text" id="name" className="border border-gray-200 text-sm rounded-lg block w-full p-2.5" placeholder="Nom" required />
          </div>
          <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium">Votre courriel (requis)*</label>
              <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                  </div>
                  <input type="email" name="email" id="email" className="border border-gray-200 text-sm rounded-lg block w-full pl-10 p-2.5" placeholder="Courriel" required />
              </div>
          </div>
          <div>
              <label htmlFor="subject" className="block mb-2 text-sm font-medium">Sujet</label>
              <input type="text" id="subject" className="border border-gray-200 text-sm rounded-lg block w-full p-2.5" placeholder="Sujet" required />
          </div>
          <div>
            <label htmlFor="message" className="block mb-2 text-sm font-medium">Voter message</label>
            <textarea id="message" rows={4} className="block p-2.5 w-full text-sm rounded-lg border border-gray-200" placeholder="Message"></textarea>
          </div>
          <div>
            <button type="submit" className="w-full text-white bg-immofab hover:bg-immofab-hover font-medium rounded-lg text-sm px-5 py-2.5 text-center">Envoyer</button>
          </div>
        </form>
      </section>
    </div>
  )
}

export default Contact