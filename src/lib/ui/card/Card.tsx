const Card = (props) => {
  return (
    <div className='bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-3/4 max-w-sm rounded-lg overflow-hidden mx-auto font-[sans-serif] mt-4'>
      <div className='h-auto'>
        <img
          src={props.imageUrl}
          className='w-full'
        />
      </div>

      <div className='text-center py-4'>
        <h3 className='text-gray-800 text-md font-bold'>{props.description}</h3>
      </div>
    </div>
  )
}

export default Card
