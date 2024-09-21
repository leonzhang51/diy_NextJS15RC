import Card from '@/lib/ui/card/Card'
import { cardContentType } from '@/lib/utils'
const IdeaStyle = () => {
  const cardContents: cardContentType = [
    {
      description: 'Contemporary',
      imageUrl: '/img/style/style_1.jpg'
    },
    {
      description: 'Eclectic',
      imageUrl: '/img/style/style_2.jpg'
    },
    {
      description: 'Modern',
      imageUrl: '/img/style/style_3.png'
    },
    {
      description: 'Traditional',
      imageUrl: '/img/style/style_4.png'
    },
    {
      description: 'Asian',
      imageUrl: '/img/style/style_4.jpg'
    }
  ]
  return (
    <section>
      <h1 className='text-3xl font-bold mt-6 pl-8'>Browse Ideas by Style</h1>
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

export default IdeaStyle
