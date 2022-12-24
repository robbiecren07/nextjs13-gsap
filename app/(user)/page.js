
import SmoothScroller from '../../components/SmoothScroller'
import BlockTitle from '../../components/BlockTitle'
import AboutSection from '../../components/home/AboutSection'

export default function Home() {

  return (
    <SmoothScroller>
      <section className="w-full py-[18vh] px overflow-hidden">
        <BlockTitle title="Home" />

        <AboutSection />
        
        <div className="w-full py-[40vh]">
          <BlockTitle title="Test 1" />
        </div>

        <div className="w-full py-[40vh]">
          <BlockTitle title="Test 2" />
        </div>

        <div className="h-screen"></div>

      </section>
    </SmoothScroller>
  )
}
