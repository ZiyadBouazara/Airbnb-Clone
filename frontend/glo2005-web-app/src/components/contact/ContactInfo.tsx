const ContactInfo: React.FC = () => {
  return (
    <>
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
    </>
  )
}

export default ContactInfo