

const Input = ({ type, placeholder, setFnc }) => {
  // const [title, setTitle, setFnc] = useState('')

  return (
    <div className="col-span-2 lg:col-span-1">
      <div className=" relative ">
        <input
          type={type}
          className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          placeholder={placeholder}
          onChange={e => setFnc(e.target.value)}
        />
      </div>
    </div>
  )
}

export default Input