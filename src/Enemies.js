import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Info from './Info';
import MainInfo from './MainInfo';
import mainback from './images/enemies_main.webp'
import mainimage from './images/enemies_image_main.jpg'
import greedlingIcon from './images/Greedling_icon.png'
import floaterIcon from './images/Floater_icon.png'
import breederIcon from './images/Breeder_icon.png'
import smallIcon from './images/Small_Portal_icon.png'
import largeIcon from './images/Cliff_Portal_icon.png'
const maininfomation = [
    { id: 1, name: "About the Enemies", image: <img src={mainimage} width="auto" height="300px" alt="logo" />, desc: "The Greed are grey faceless monsters that attack your kingdom every night and try to take your gold, your tools and your crown every night. Their attacks gets bigger and will eventually break through your walls. The greed comes from the portals around the map and there are three types of the greed: the greedling, the floater, the breeder. On a blood moon they rally together to attack one side with a bigger army than normal but give you a night to recover."},
]
const infomation = [
    { id: 1, name: "Greedlings", image: <img src={greedlingIcon} width="120px" height="auto" alt="logo" />, desc: "The greedling is the most common greed in the night attacks it attacks in big groups and they can wear masks to make it take more damage to kill them. A greedling takes coins tools and the crown and are not interested in the people. They are not hard to kill but as the game goes on the amounts of greedlings becomes deadly." },
    { id: 2, name: "Floaters", image: <img src={floaterIcon} width="120px" height="auto" alt="logo" />, desc: "Floaters are flying greed that take your villagers away. Floaters normally only come out in blood moons and are hard to kill because they are hard to hit. They do not take money, tools or the crown they are only interested in the people." },
    { id: 3, name: "Breeders", image: <img src={breederIcon} width="120px" height="auto" alt="logo" />, desc: "Breeders are a giant that attacks in a blood moon and takes a lot of damage and does a lot of damage and summons enemies. The breeder summons greedlings by vomiting on a regular basis. The breeder also can hit the boulder remains at your walls and subjects. The breeder can one punch most of your subjects and can punch a huge amount of money from you. They also have a lot of health and are hard to kill." },
    { id: 4, name: "Small Portal", image: <img src={smallIcon} width="120px" height="auto" alt="logo" />, desc: "Small portals are found in the woods and summon the greed. If you have a knight you can attack the portal but if you destroy the portal it will cause a blood moon with attacks that can be worse then a normal blood moon. There can be up to three small portals on each side. They are not active in the morning but are active when the greed is coming out and are inactive at all other times." },
    { id: 5, name: "Cliff Portal", image: <img src={largeIcon} width="120px" height="auto" alt="logo" />, desc: "Cliff portals are like the small portal but take more damage. They are a lot further away than the small portals and rebuilds itself. When destroyed it can not summon the greed but after three days the portal would have rebuilt and start its normal attacks again." },
  ];
function Enemies() {

  return (
    <main>
      <Header />
      <img src={mainback} alt="main background" className='back'/>
      <div className="enemies">
        {maininfomation.map(item => (
          <MainInfo key={MainInfo.id} item={item} />
        ))}
        {infomation.map(item => (
          <Info key={Info.id} item={item} />
        ))}
      </div>
      <Footer />
    </main>
  );
}

export default Enemies;
