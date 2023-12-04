import './Home.css';
import Header from './Header';
import Footer from './Footer';
import Info from './Info';
import Content from './Content';
import MainInfo from './MainInfo';
import homeimage from './images/home_landscape.png'
import mainimage from './images/home_about.jpg'
import StoryIcon from './images/Game_story_icon.png'
const maininfomation = [
    { id: 1, name: "About Kingdom newlands", image: <img src={mainimage} width="300px" height="auto" alt="logo" />, desc: "Kingdom: New Lands builds upon the award-winning gameplay and mystery of Kingdom by introducing an abundance of new content to the IGF-nominated title while maintaining the simplicity and depth that legions of monarchs have come to experience and enjoy. Travel to the New Lands and welcome the deluge of new mounts, merchants, and vagrants that call these isles home, but be wary of the new obstacles that threaten your arrival -- for not just the greedy creatures block your way but even the environment itself can defeat you."},
]
const infomation = [
    { id: 1, name: "Game Story", image: <img src={StoryIcon} width="120px" height="auto" alt="logo" />, desc: "Tales spread of far off isles with mysteries waiting to be discovered. Rulers will need all the strength of their subjects to sail away and find new kingdoms in these New Lands." },
  ];
function Home() {

  return (
    <main>
      <Header />
      <img src={homeimage} alt="main background" className='back'/>
      <div className="home">
        {maininfomation.map(item => (
          <MainInfo key={MainInfo.id} item={item} />
        ))}
        <Content/>
        {infomation.map(item => (
          <Info key={Info.id} item={item} />
        ))}
      </div>
      <Footer />
    </main>
  );
}

export default Home;
