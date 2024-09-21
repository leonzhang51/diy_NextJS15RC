import Card from '@/lib/ui/card/Card'
import { cardContentType } from '@/lib/utils'
const IdeaRoom = () => {
  const cardContents: cardContentType = [
    {
      description: 'Bathroom',
      imageUrl: '/img/idea/idea_1.jpg'
    },
    {
      description: 'Kitchen',
      imageUrl: '/img/idea/idea_2.jpg'
    },
    {
      description: 'Bedroom',
      imageUrl: '/img/idea/idea_3.jpg'
    },
    {
      description: 'Living Room',
      imageUrl: '/img/idea/idea_4.png'
    },
    {
      description: 'Dining Room',
      imageUrl: '/img/idea/idea_5.jpg'
    }
  ]
  return (
    <section>
      <h1 className='text-3xl font-bold mt-6 pl-8'>Browse Ideas by Room</h1>
      <div className='grid lg:grid-cols-5 md:grid-cols-4 gap-6 justify-center mt-2 '>
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

export default IdeaRoom
