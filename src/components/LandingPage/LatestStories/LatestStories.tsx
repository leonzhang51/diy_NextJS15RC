import Card from '@/lib/ui/card/Card'
import { cardContentType } from '@/lib/utils'
const LatestStories = () => {
  const cardContents: cardContentType = [
    {
      description: 'Before and After: 3 Kitchens With Beautiful Bold Backsplashes',
      imageUrl: '/img/story/story_1.png'
    },
    {
      description: '12 Trees Landscape Designers Love for Containers',
      imageUrl: '/img/story/story_2.jpg'
    },
    {
      description: '8 Ideas From Pros to Elevate Your Outdoor Entertaining Spaces',
      imageUrl: '/img/story/story_3.png'
    },
    {
      description: '4 New Bathrooms With a Low-Curb Shower in 64 Square Feet or Less',
      imageUrl: '/img/story/story_4.png'
    }
  ]
  return (
    <section>
      <h1 className='text-3xl font-bold mt-6 pl-8'>Latest Stories</h1>
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

export default LatestStories
