import React from 'react';
// Import the icon components
import mentlyLogo from '../assets/mently-logo.svg';
import DashboardIcon from '../components/icons/DashboardIcon';
import AnalyticsIcon from '../components/icons/AnalyticsIcon';
import ProgramsIcon from '../components/icons/ProgramsIcon';
import ActivitiesIcon from '../components/icons/ActivitiesIcon';
import FormsIcon from '../components/icons/FormsIcon';
import FinanceIcon from './icons/FinanciesIcon'; // Ensure the correct path
import BadgesIcon from './icons/BadgesIcon'; // Ensure the correct path
import SettingsIcon from '../components/icons/SettingsIcon';
import LogoutIcon from '../components/icons/LogoutIcon';
import HelpIcon from '../components/icons/HelpIcon';

// Other imports remain the same
import Image from 'next/image';

export default function SideBar() {
  return (
    <nav className="flex h-full flex-col justify-between text-[#FAF5E5] group">
      <div className="flex flex-col">
        {/* Logo Header */}
        <div className="flex items-center gap-[1.25vw] mb-[2.5vw]">
          <Image 
            src={mentlyLogo} 
            alt='logo' 
            className='w-[2vw] md:group-hover:w-[2.6vw] transition-all duration-300 animate-nod'
            width={30}
            height={30}
          />
          <h2 className="text-xl font-bold tracking-tighter whitespace-nowrap overflow-hidden group md:group-hover:block hidden">
            Mently
          </h2>
        </div>

        {/* Unified Navigation Group */}
        <div className="flex flex-col space-y-[1.25vw]">
          <NavItem icon={<DashboardIcon />} label="Dashboard" />
          <NavItem icon={<AnalyticsIcon />} label="Analytics" />
          <NavItem icon={<ProgramsIcon />} label="Programs" />
          <NavItem icon={<ActivitiesIcon />} label="Activities" />
          <NavItem icon={<FormsIcon />} label="Forms" />
          <NavItem icon={<FinanceIcon />} label="Finances" />
          <NavItem icon={<BadgesIcon />} label="Badges" />
          <NavItem icon={<SettingsIcon />} label="Settings" />
          <NavItem icon={<LogoutIcon />} label="Logout" />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col space-y-[1.25vw]">
        {/* Toggle & Help Section */}
        <div className="flex flex-col space-y-[1.25vw] mt-[2.5vw]">
          {/* Dark Mode Toggle */}
          <div className="flex items-center gap-[1.25vw] p-2 rounded-sm transition-colors duration-200 group">
            {/* Icon on the left with hover animation */}
            <div className="w-[3vw] h-[1.5vw] bg-white/10 rounded-full p-[0.3vw] cursor-pointer">
              <span className="block w-[1vw] h-[1vw] bg-[#FAF5E5] rounded-full transition-transform duration-200 translate-x-0" />
            </div>
            {/* Text with normal spacing */}
            <span className="text-sm font-medium whitespace-nowrap overflow-hidden group md:group-hover:block hidden">
              Dark Mode
            </span>
          </div>

          {/* Help Div */}
          <a
            href="#"
            className="flex items-center gap-[1.25vw] p-2 hover:bg-[#FAF5E5] hover:text-[#1F0954] rounded-sm transition-colors duration-200 relative group"
          >
            <HelpIcon className="w-[1.3vw] h-[1.3vw] shrink-0 fill-current transition-transform duration-200 icon-pop-down" />
            {/* Text with normal spacing and reverse animation */}
            <span className="text-sm font-medium whitespace-nowrap overflow-hidden group md:group-hover:block hidden text-pop-up">
              Help & Support
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
}

// Updated NavItem component
interface NavItemProps {
  icon: React.ReactNode; // The icon as a React component
  label: string; // The label for the navigation item
}

function NavItem({ icon, label }: NavItemProps) {
  return (
    <a
      href="#"
      className="flex items-center gap-[1.25vw] rounded-sm p-2 transition-colors duration-200
                 hover:bg-[#FAF5E5] hover:text-[#1F0954] relative group"
    >
      {/* Icon animates down and rotates on hover, then reverses when hover ends */}
      {React.cloneElement(icon as React.ReactElement, {
        className:
          'w-[1.3vw] h-[1.3vw] shrink-0 fill-current transition-transform duration-200 icon-pop-down',
      })}

      {/* Label animates up and rotates on hover, then reverses when hover ends */}
      <span className="text-sm font-medium whitespace-nowrap overflow-hidden group md:group-hover:block hidden text-pop-up">
        {label}
      </span>
    </a>
  );
}