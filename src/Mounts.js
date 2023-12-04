import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Info from './Info';
import MainInfo from './MainInfo';
import mainback from './images/Mounts_main.jpg'
import mainimage from './images/mount_image_main.jpg'
import standardIcon from './images/Standard_Horse_icon.png'
import stagIcon from './images/Stag_icon.png'
import warhorseIcon from './images/Warhorse_icon.png'
import unicornIcon from './images/Unicorn_icon.png'
import bearIcon from './images/Bear_icon.png'
const maininfomation = [
    { id: 1, name: "About the Mounts", image: <img src={mainimage} width="300px" height="auto" alt="logo" />, desc: " Mounts are what the king or queen use to travel the world. There is a lot of mounts they all have advantages and disadvantages. You start with the standard house and unlock the rest. You can’t get of your mount but can transfer to a different mount. Mounts all have different speeds and stamina and their speed can also differ from the biome they are in their stamina does not change but when the stamina drops the mount will start breathing heavily and will not run and it will slowly regain stamina it will not run until the stamina is full. You could also get back stamina by stopping in a grass field and the mount will eat grass and get back all there stamina instantly."},
]
const infomation = [
    { id: 1, name: "Standard Horse", image: <img src={standardIcon} width="120px" height="auto" alt="logo" />, desc: " The standard house is the house you start with, it has an average speed and stamina and no special abilities. They go slow in the woods and fast in fields. It is brown and has average stamina regen. The standard house also can be found at the stables." },
    { id: 2, name: "The Great Stag", image: <img src={stagIcon} width="120px" height="auto" alt="logo" />, desc: " The great stag is found between two lanterns and a waterfall. It cost 3 gold coins to mount to. The great stag has high speed in woods and average speed in fields. The great stag as average stamina and eats grass to get stamina back fast or gets it back slowly. The great stag has the ability to seduce deer by being near them for three seconds then they will follow you until they are hurt. The great stag is unlocked on the third island." },
    { id: 3, name: "Warhorse", image: <img src={warhorseIcon} width="120px" height="auto" alt="logo" />, desc: " The warhorse is found in an abandoned battlefield and takes three gold coins to mount to. The warhorse has high stamina and average speed. The warhorse eats grass to instantly regain stamina or slowly regains it naturally. The warhorse has the ability every 15 seconds to make all nearby units invincible for 12 seconds by sprinting when the warhorse’s armor is flashing. The warhorse is unlocked at the fourth island." },
    { id: 4, name: "Unicorn", image: <img src={unicornIcon} width="120px" height="auto" alt="logo" />, desc: " The unicorn is found at a tree with blossoms and mushrooms around it and cost three gold coins to mount to. The unicorn has average stamina and average speed but has high speed in fields. The unicorn has the ability to poop three gold coins when it eats grass. The unicorn is unlocked at the firth island." },
    { id: 5, name: "Great Bear", image: <img src={bearIcon} width="120px" height="auto" alt="logo" />, desc: " The great bear is found at his den in the forest and cost three gold coins to mount to. The great bear has average speed and very low stamina. The great bear has the ability to pounce forward when you start to run and has a chance of killing any wildlife or greedlings in front of it. The great bear eats grass to regain stamina and regains it fast naturally. The great bear is unlocked at the fourth island." },
  ];
function Mounts() {

  return (
    <main>
        <Header />
        <img src={mainback} alt="main background" className='back'/>
        <div className="mounts">
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

export default Mounts;