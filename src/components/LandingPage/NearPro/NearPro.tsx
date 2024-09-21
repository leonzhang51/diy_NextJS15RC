import Card from '@/lib/ui/card/Card'
import { cardContentType } from '@/lib/utils'
const NearPro = () => {
  const cardContents: cardContentType = [
    {
      description: 'Architects & Building Designers',
      imageUrl: '/img/nearPro/pro_1.jpg'
    },
    {
      description: 'Design-build Firms',
      imageUrl: '/img/nearPro/pro_2.png'
    },
    {
      description: 'General Contractors',
      imageUrl: '/img/nearPro/pro_3.png'
    },
    {
      description: 'Interior Designers & Decorators',
      imageUrl: '/img/nearPro/pro_4.png'
    },
    {
      description: 'Bathroom Remodeling',
      imageUrl: '/img/nearPro/pro_5.png'
    }
  ]
  return (
    <section>
      <h1 className='text-3xl font-bold mt-6 pl-8'>Browse Professionals Near You</h1>
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

export default NearPro
