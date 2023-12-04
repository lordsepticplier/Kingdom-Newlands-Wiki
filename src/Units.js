import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Info from './Info';
import MainInfo from './MainInfo';
import mainback from './images/Units_main.png'
import mainimage from './images/Units_main_image.jpg'
import archerIcon from './images/Archer_icon.png'
import builderIcon from './images/Builder_icon.png'
import knightIcon from './images/Knight_icon.png'
import villergerIcon from './images/Villerger_icon.png'
import farmerIcon from './images/Farmer_icon.png'
const maininfomation = [
    { id: 1, name: "About the Units", image: <img src={mainimage} width="300px" height="auto" alt="logo" />, desc: " Units are the soul of the kingdom they are the gears to the clock. All units start as a vagrant, people in poverty and pain at camps in the forest. If you give a coin to a vagrant then they will turn into a villager which can become any of the other units if you give them the right tools. The villager can turn into a knight, an archer, a farmer and a builder. A unit can be turned back into a vagrant by the greed attacking them and taking the money."},
]
const infomation = [
    { id: 1, name: "Archer", image: <img src={archerIcon} width="120px" height="auto" alt="logo" />, desc: " The archer is the most simple and most important unit because without it you will not be able to defend your wall and not have a good income of coins. The archers hunt rabbit and deer in the day and defend the furthest outer wall on both sides evenly. They will shoot any deer that come by when defending the wall. If archers are recruited by the knight then they will not hunt or shoot rabbits or deer. If an archer goes in a tower they will not leave the tower unless hit out by a breeder or taken by a floater. The archers collect coins from killing rabbits and deer and will kill the greed when defending." },
    { id: 2, name: "Builder", image: <img src={builderIcon} width="120px" height="auto" alt="logo" />, desc: " The builders expand build and repair the kingdom. They will repair walls when damaged. You can get them to cut down trees. they are non-attack units and build the buildables. They also man the ballista tower and catapult. The builder is the blood of the kingdoms advancement." },
    { id: 3, name: "Knight", image: <img src={knightIcon} width="120px" height="auto" alt="logo" />, desc: " The knight is a melee attack unit that has armor and a small party of archers. The knight will recruit four free archers to its party. The knight’s armor is also equal to the coins it has and has a max of seven coins. They defend the kingdoms outer walls and can escort the boat and also attack portals. The knight is the only unit that can lead an attack on the portals and only takes his party with him. The knight will block attacks from the greed and kill them with his sword and if hit will lose a coin until he has none left and will lose his shield on hit and will no longer be a knight." },
    { id: 4, name: "Villeger", image: <img src={villergerIcon} width="120px" height="auto" alt="logo" />, desc: " The villager is a defenceless unit that does nothing but is one of the most important units because to make an archer builder knight and a farmer you need a villager. If you give a villager a tool it will turn into a unit depending on the tool. If you give a villager a bow it will become an archer. If you give it a hammer it will become a builder. If you give it a shield it will become a knight. If you give it a scythe it will become a farmer. Villagers are made by giving a vagrant a coin when turned into a villager it will walk to the town center and stay there until given a tool." },
    { id: 5, name: "Farmer", image: <img src={farmerIcon} width="120px" height="auto" alt="logo" />, desc: " The farmer is a unit that gains coins from growing and harvesting at a farm. When you make a farm the farmer will walk to it and grow and harvest at the farm in the day and will walk to the town center at night but if the farm is upgraded to have a shelter they will stay there at night even if it is not safe meaning the only way to protect the farmers is to have walls past the farms. When winter comes the farmers will stop farming and go back to the town center and then in two days it will throw it’s syth in the water and become a villager again." },
  ];
function Units() {

  return (
    <main>
        <Header />
        <img src={mainback} alt="main background" className='back'/>
        <div className="units">
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

export default Units;