import Card from '@/lib/ui/card/Card'
import { cardContentType } from '@/lib/utils'
const DiyTv = () => {
  const cardContents: cardContentType = [
    {
      description: 'Tour a Family Home Layered in Warm Woods and Creamy Whites',
      imageUrl: '/img/tv/tv_1.jpg'
    },
    {
      description: 'Peek Inside an Eclectic Home That Elegantly Blends Finishes',
      imageUrl: '/img/tv/tv_2.jpg'
    },
    {
      description: '5 Design Ideas From the Most Popular Photos So Far in 2024',
      imageUrl: '/img/tv/tv_3.jpg'
    },
    {
      description: '5 Trends for Kitchen and Bath Products in 2024',
      imageUrl: '/img/tv/tv_4.jpg'
    }
  ]
  return (
    <section>
      <h1 className='text-3xl font-bold mt-6 pl-8'>DIY TV</h1>
      <div className='grid lg:grid-cols-4 md:grid-cols-4 gap-6 justify-center mt-2 px-8 '>
        {cardContents.map((cardContent, index) => (
          <Card
            key={index}
            description={cardContent.description}
            imageUrl={cardContent.imageUrl}
          />
        ))}
      </div>
    </section>
  )
}

export default DiyTv
