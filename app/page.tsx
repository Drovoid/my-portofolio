import Navbar from './components/Navbar'
import Overview from './components/Overview'
import Skill from './components/Skill'
import Project from './components/Project'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className="bg-background relative">
        <Navbar />
        <Overview />
        <Skill />
        <Project />
        <Footer />
    </div>
  )
}
