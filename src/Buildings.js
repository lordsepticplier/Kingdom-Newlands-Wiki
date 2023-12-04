import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Info from './Info';
import MainInfo from './MainInfo';
import mainback from './images/Buildings_main.webp'
import mainimage from './images/Buildings_main_image.png'
import wallIcon from './images/Wall_icon.png'
import towerIcon from './images/Tower_icon.png'
import farmIcon from './images/Farmer_icon.png'
import teleporterIcon from './images/Teleporter_icon.png'
import hallIcon from './images/Hall_icon.png'
const maininfomation = [
    { id: 1, name: "About the Buildings", image: <img src={mainimage} width="300px" height="auto" alt="logo" />, desc: " Buildables are all the buildings you can build in Kingdom New Lands. To build a buildable you will need a builder unless it is the town center which does not. The buildables are wall, tower, farm, portal and town center. To build them you go to their starting version and pay gold coins then builders will come and build it."},
]
const infomation = [
    { id: 1, name: "Wall", image: <img src={wallIcon} width="120px" height="auto" alt="logo" />, desc: " The walls are the most important building in the game because they are the kingdoms first line of defence and if you don’t have walls even a small group of greed can be devastating. You can only build a wall on a dirt pile fully in the fields and not touching the forest, there are four tiers of the wall tier zero the dirt pile. Tier one spikes. Tier two Palisade. Tier three stone wall. Tier four tall stone wall. The walls get stronger as they are upgraded." },
    { id: 2, name: "Tower", image: <img src={towerIcon} width="120px" height="auto" alt="logo" />, desc: " The tower is a building that allows archers to shoot the greed easier and also make the archers safe against breeders and greedlings attacks. When an archer goes into a tower it will not go out unless hit out by a boulder from a breeder or taken by a floater. A tower can’t be destroyed and archers will try and fill it until it is full. The only way to stop this is turning it into a special tower by hermits. There are four tiers: tier 0 boulder pile. Tier 1 rock platform. Tier 2 wooden watchtower. Tier 3 stone tower. Tier 4 triplet tower. The floaters are the only enemy that can directly attack archers and is the one weakness of the tower because the floaters can easily take archers from the tower and the archers will not come back." },
    { id: 3, name: "Farm", image: <img src={farmIcon} width="120px" height="auto" alt="logo" />, desc: " The farm is a building made by the builder at a waterfall in the fields. A farm can get you a lot of coins passively and can be outside your walls but will not protect the farmers. The farms have two tiers. Tier 0 waterfall. Tier 1 water well. Tier 2 mill house. A farm is a great way to support a big kingdom because if there is not much money coming from hunting this will give a good stream of coins unless it is winter where it can not be used." },
    { id: 4, name: "Teleporter", image: <img src={teleporterIcon} width="120px" height="auto" alt="logo" />, desc: " The teleporter is a building that can be built by a builder on the remains of a destroyed small portal. It costs one coin to use and lets you look around the island and will start flashing when your time is nearly up then it will turn off. You can also teleport to where you are looking by pushing the down button. A portal can’t be upgraded and has a recharge time after use of a few minutes." },
    { id: 5, name: "Town Center", image: <img src={hallIcon} width="120px" height="auto" alt="logo" />, desc: " The Town Center is the heart of the kingdom and what you need to get the ability to get tools, banker, the merchant and the catapult. There are six tiers of the town center. Tier 0 unlit campfire. Tier 1 campfire. Tier 2 village tent. Tier 3 wooden fortifications. Tier 4 town hall. Tier 5 stone fortifications. Tier 6 castle keep. When you upgrade it it will start summoning vendors to give you the tools. The kingdom will be built around the town center." },
  ];
function Buildings() {

  return (
    <main>  
        <Header />
        <img src={mainback} alt="main background" className='back'/>
        <div className="buildings">
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

export default Buildings;