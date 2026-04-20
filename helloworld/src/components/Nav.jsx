
function Nav({user,bio,pic}) {
  return (
    <div className="inline-block">
    <div className='text-black flex flex-col justify-center items-center  border-2 rounded m-1 p-5'>
    <div className='w-40 h-40 overflow-hidden rounded-xl' >
        <img src={`${pic}`} className='w-full h-full object-cover'></img>
    </div>
     <h1 className="font-bold">{user}</h1>
     <p  className="font-medium">{bio}</p>
    </div>
    </div>
  )
}

export default Nav
