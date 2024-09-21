import DiyTv from '@/components/LandingPage/DiyTv/DiyTv'
import Hero from '@/components/LandingPage/Hero/Hero'
import IdeaRoom from '@/components/LandingPage/IdeaRoom/IdeaRoom'
import IdeaStyle from '@/components/LandingPage/IdeaStyle/IdeaStyle'
import LatestStories from '@/components/LandingPage/LatestStories/LatestStories'
import NearPro from '@/components/LandingPage/NearPro/NearPro'
export default function DiyClubPage() {
  return (
    <>
      <Hero />
      <IdeaRoom />
      <IdeaStyle />
      <LatestStories />
      <DiyTv />
      <NearPro />
    </>
  )
}
