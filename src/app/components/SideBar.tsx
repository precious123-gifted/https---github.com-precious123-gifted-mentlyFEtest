'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import mentlyLogo from '../assets/mently-logo.png';
import DashboardIcon from '../components/icons/DashboardIcon';
import AnalyticsIcon from '../components/icons/AnalyticsIcon';
import ProgramsIcon from '../components/icons/ProgramsIcon';
import ActivitiesIcon from '../components/icons/ActivitiesIcon';
import FormsIcon from '../components/icons/FormsIcon';
import FinanceIcon from './icons/FinanciesIcon';
import BadgesIcon from './icons/BadgesIcon';
import SettingsIcon from '../components/icons/SettingsIcon';
import LogoutIcon from '../components/icons/LogoutIcon';
import HelpIcon from '../components/icons/HelpIcon';

export default function SideBar() {
  const [isOpened, setIsOpened] = useState(false);
  const [triggerAnimation, setTriggerAnimation] = useState(false);

 
  // Function to toggle sidebar width
  const toggleSidebar = () => {
    setIsOpened((prev) => !prev);
    setTriggerAnimation(true);
    setTimeout(() => setTriggerAnimation(false), 1000);
  };

  return (
    <>
      {/* Sidebar Handle */}
      <div
        className={`sidebar-entrance-handle landscape:hidden rounded-r-sm z-50 overflow-hidden cursor-pointer
                   md:hover:shadow-[8px_0_40px_0_rgba(0,0,0,0.4)] 
                   hover:backdrop-blur-sm  ${isOpened? 'bg-[#431e98d2]' : 'bg-[#240e55]' } fixed left-0 top-0 h-[6vw] w-[4vw] grid place-content-center`}
        onClick={toggleSidebar}
      >
        {/* Optional: Add an icon or indicator for the handle */}
        <span className="block w-[1vw] h-[1vw] bg-[#FAF5E5] rounded-full mx-auto"></span>
      </div>

      {/* Sidebar */}
      <aside
  className={`group fixed left-0 top-0 h-full transition-all duration-300
    ${isOpened ? 'sidebar-open portrait:ml-[0vw]' : 'sidebar-closed portrait:ml-[-100vw]'}
    portrait:w-[40vw] landscape:md:hover:w-[13vw]
    p-4 overflow-hidden md:hover:shadow-[8px_0_40px_0_rgba(0,0,0,0.4)]
    hover:backdrop-blur-sm bg-[#1F0954] `}
>
  <nav className="flex h-full flex-col justify-between text-[#FAF5E5] group">
    <div className="flex flex-col items-start">
      {/* Logo Section */}
      <div className="flex items-center gap-[0.6vw] portrait:gap-[1.4vw] mb-[2.5vw] p-2 fade-slide">
        <Image
          src={mentlyLogo}
          alt="logo"
          className={`w-[2vw] portrait:w-[6vw] md:group-hover:w-[2.6vw] transition-all duration-300   ${isOpened ? 'animate-nod ' : ''}`}
          width={30}
          height={30}
        />
        <h2 className={`text-[1.1vw] portrait:text-[2.4vw] font-bold tracking-tighter whitespace-nowrap overflow-hidden fade-slide ${isOpened ? 'block' : 'hidden'} md:group-hover:block`}>
          Mently
        </h2>
      </div>

      {/* Navigation Items */}
      <div className="flex flex-col space-y-[1.25vw] w-full fade-slide">
        <NavItem icon={<DashboardIcon />} label="Dashboard" isOpened={isOpened} className='w-[1.3vw] h-[1.3vw] portrait:w-[4vw]  portrait:h-[4vw]  portrait:sm:w-[2.4vw]  portrait:sm:h-[2.4vw] shrink-0 fill-current transition-transform duration-200 icon-pop-down'/>
        <NavItem icon={<AnalyticsIcon />} label="Analytics" isOpened={isOpened} className='w-[1.3vw] h-[1.3vw] portrait:w-[4vw]  portrait:h-[4vw]  portrait:sm:w-[2.4vw]  portrait:sm:h-[2.4vw] shrink-0 fill-current transition-transform duration-200 icon-pop-down'/>
        <NavItem icon={<ProgramsIcon />} label="Programs" isOpened={isOpened} className='w-[1.3vw] h-[1.3vw] portrait:w-[4vw]  portrait:h-[4vw]  portrait:sm:w-[2.4vw]  portrait:sm:h-[2.4vw] shrink-0 fill-current transition-transform duration-200 icon-pop-down'/>
        <NavItem icon={<ActivitiesIcon />} label="Activities" isOpened={isOpened} className='w-[1.3vw] h-[1.3vw] portrait:w-[4vw]  portrait:h-[4vw]  portrait:sm:w-[2.4vw]  portrait:sm:h-[2.4vw] shrink-0 fill-current transition-transform duration-200 icon-pop-down'/>
        <NavItem icon={<FormsIcon />} label="Forms" isOpened={isOpened} className='w-[1.3vw] h-[1.3vw] portrait:w-[4vw]  portrait:h-[4vw]  portrait:sm:w-[2.4vw]  portrait:sm:h-[2.4vw] shrink-0 fill-current transition-transform duration-200 icon-pop-down'/>
        <NavItem icon={<FinanceIcon />} label="Finances" isOpened={isOpened} className='w-[1.3vw] h-[1.3vw] portrait:w-[4vw]  portrait:h-[4vw]  portrait:sm:w-[2.4vw]  portrait:sm:h-[2.4vw] shrink-0 fill-current transition-transform duration-200 icon-pop-down'/>
        <NavItem icon={<BadgesIcon />} label="Badges" isOpened={isOpened} className='w-[1.3vw] h-[1.3vw] portrait:w-[4vw]  portrait:h-[4vw]  portrait:sm:w-[2.4vw]  portrait:sm:h-[2.4vw] shrink-0 fill-current transition-transform duration-200 icon-pop-down'/>
        <NavItem icon={<SettingsIcon />} label="Settings" isOpened={isOpened} className='w-[1.3vw] h-[1.3vw] portrait:w-[4vw]  portrait:h-[4vw]  portrait:sm:w-[2.4vw]  portrait:sm:h-[2.4vw] shrink-0 fill-current transition-transform duration-200 icon-pop-down'/>
        <NavItem icon={<LogoutIcon />} label="Logout" isOpened={isOpened} className='w-[1.3vw] h-[1.3vw] portrait:w-[4vw]  portrait:h-[4vw]  portrait:sm:w-[2.4vw]  portrait:sm:h-[2.4vw] shrink-0 fill-current transition-transform duration-200 icon-pop-down'/>
      </div>
    </div>

    {/* Bottom Section */}
    <div className="flex flex-col space-y-[1.25vw] w-full  items-start">
      <div className="flex flex-col space-y-[1.25vw] mt-[2.5vw] bg-[#240e55] rounded-sm">
      

        {/* Help & Support */}
        <a
          href="#"
          className="flex items-center justify-center md:justify-start gap-[0.6vw] portrait:gap-[1.4vw] p-2 hover:bg-[#FAF5E5] hover:text-[#1F0954] rounded-sm transition-colors duration-200 relative group"
        >
          <HelpIcon className="w-[1.3vw] h-[1.3vw] portrait:w-[4vw]  portrait:h-[4vw] portrait:sm:w-[2.4vw]  portrait:sm:h-[2.4vw] shrink-0 fill-current transition-transform duration-200 icon-pop-down" />
          <span className={`text-[0.6vw] portrait:text-[2vw]  font-medium whitespace-nowrap overflow-hidden ${isOpened ? 'block' : 'hidden'} md:group-hover:block text-pop-up`}>
            Help & Support
          </span>
        </a>
        
          {/* Dark Mode Toggle */}
        <div className="flex items-center justify-center md:justify-start gap-[0.6vw] portrait:gap-[1.4vw] rounded-sm transition-colors duration-200 pl-[0.3vw] group">
          <div className="w-[1vw] md:w-[3vw] portrait:w-[8vw] portrait:sm:w-[6vw]  h-[1.5vw] portrait:h-[3vw] portrait:sm:h-[2.4vw] bg-white/10 rounded-full p-[0.3vw] cursor-pointer flex items-center transition-all duration-300">
            <span className="block w-[1vw] h-[1vw] portrait:w-[3vw] portrait:h-[3vw] portrait:sm:w-[2.4vw]  portrait:sm:h-[2.4vw]  bg-[#FAF5E5] rounded-full transition-transform duration-200 translate-x-0" />
          </div>
          <span className={`text-[0.6vw] portrait:text-[2vw] font-medium whitespace-nowrap overflow-hidden ${isOpened ? 'block' : 'hidden'} md:group-hover:block`}>
            Dark Mode
          </span>
        </div>
      </div>
    </div>
  </nav>
</aside>

    </>
  );
}

// NavItem Component
interface NavItemProps {
  className?: string
  icon: React.ReactNode;
  label: string;
  isOpened: boolean; // Add isOpened prop
}

function NavItem({ icon, label, isOpened,className }: NavItemProps ) {
  const iconElement = React.isValidElement(icon)
    ? React.cloneElement(icon, {
        className:className,
      })
    : icon;

  return (
    <a
      href="#"
      className="flex items-center justify-start md:justify-start gap-[0.6vw] portrait:gap-[1.4vw] rounded-sm p-2 transition-colors duration-200 hover:bg-[#FAF5E5] hover:text-[#1F0954] relative group w-full"
    >
      {iconElement}
      <span className={`text-[0.8vw] portrait:text-[3vw] portrait:sm:text-[2vw] font-medium whitespace-nowrap overflow-hidden ${isOpened ? 'block' : 'hidden'} md:group-hover:block text-pop-up`}>
        {label}
      </span>
    </a>
  );
}