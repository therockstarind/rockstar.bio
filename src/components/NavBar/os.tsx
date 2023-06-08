import React, { useEffect, useState } from 'react';
import AndroidIcon from './android';
import IosIcon from './ios';
import WindowsIcon from './windows';

const NavBar: React.FC = () => {
  const [deviceIcon, setDeviceIcon] = useState<React.ReactNode | null>(null);

  useEffect(() => {
    const getDeviceIcon = () => {
      if (/iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)) {
        setDeviceIcon(<IosIcon />);
      }
      else if (/Android/.test(navigator.userAgent)) {
        setDeviceIcon(<AndroidIcon />);
      }
      else {
        setDeviceIcon(<WindowsIcon />);
      }
    };

    getDeviceIcon();
  }, []);

  return <div>{deviceIcon}</div>;
};

export default NavBar;
