import React, { useEffect, useState } from 'react';

const HomeIcon: React.FC = () => {
  const [deviceIcon, setDeviceIcon] = useState<React.ReactNode | null>(null);

  useEffect(() => {
    const getDeviceIcon = async () => {
      if (typeof window !== 'undefined') {
        const { SiWindows11, SiAndroid, SiApple  } = await import('react-icons/si');

        if (/iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)) {
          setDeviceIcon(<SiApple size={24} />);
        }

        else if (/Android/.test(navigator.userAgent)) {
          setDeviceIcon(<SiAndroid size={24} />);
        }

        else {
          setDeviceIcon(<SiWindows11 size={30}/>);
        }
      }
    };

    getDeviceIcon();
  }, []);

  return <div>{deviceIcon}</div>;
};

export const Home: React.FC = HomeIcon;

const UserIcon: React.FC = () => {
  const [deviceIcon, setDeviceIcon] = useState<React.ReactNode | null>(null);

  useEffect(() => {
    const getDeviceIcon = async () => {
      if (typeof window !== 'undefined') {
        const { SlUser } = await import('react-icons/sl');
        const { TbUser } = await import('react-icons/tb');
        const { HiUser } = await import('react-icons/hi');
        if (/iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)) {
          setDeviceIcon(<SlUser size={24} />);
        }

        else if (/Android/.test(navigator.userAgent)) {
          setDeviceIcon(<TbUser size={24} />);
        }

        else {
          setDeviceIcon(<HiUser size={30} />);
        }
      }
    };

    getDeviceIcon();
  }, []);

  return <div>{deviceIcon}</div>;
};

export const About: React.FC = UserIcon;

const MediaIcon: React.FC = () => {
    const [deviceIcon, setDeviceIcon] = useState<React.ReactNode | null>(null);
  
    useEffect(() => {
      const getDeviceIcon = async () => {
        if (typeof window !== 'undefined') {
            const { BiMoviePlay } = await import('react-icons/bi');
            const { MdMovie, MdMovieFilter } = await import('react-icons/md');
          if (/iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)) {
            setDeviceIcon(<BiMoviePlay size={24} />);
          }
  
          else if (/Android/.test(navigator.userAgent)) {
            setDeviceIcon(<MdMovie size={24} />);
          }
  
          else {
            setDeviceIcon(<MdMovieFilter size={30} />);
          }
        }
      };
  
      getDeviceIcon();
    }, []);
  
    return <div>{deviceIcon}</div>;
  };
  
  export const Media: React.FC = MediaIcon;

  const UsesIcon: React.FC = () => {
    const [deviceIcon, setDeviceIcon] = useState<React.ReactNode | null>(null);
    useEffect(() => {
      const getDeviceIcon = async () => {
        if (typeof window !== 'undefined') {
            const { VscTools } = await import('react-icons/vsc');
            const { BsTools } = await import('react-icons/bs');
            const { FaTools } = await import('react-icons/fa');
          if (/iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)) {
            setDeviceIcon(<VscTools size={24} />);
          }
  
          else if (/Android/.test(navigator.userAgent)) {
            setDeviceIcon(<BsTools size={24} />);
          }
  
          else {
            setDeviceIcon(<FaTools size={30} />);
          }
        }
      };
  
      getDeviceIcon();
    }, []);
  
    return <div>{deviceIcon}</div>;
  };
  
  export const Uses: React.FC = UsesIcon;

  const GalleryIcon: React.FC = () => {
    const [deviceIcon, setDeviceIcon] = useState<React.ReactNode | null>(null);
  
    useEffect(() => {
      const getDeviceIcon = async () => {
        if (typeof window !== 'undefined') {
            const { SiGooglephotos } = await import('react-icons/si');
            const { BsImages } = await import('react-icons/bs');
            const { IoImages } = await import('react-icons/io5');
          if (/iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)) {
            setDeviceIcon(<IoImages size={24} />);
          }
  
          else if (/Android/.test(navigator.userAgent)) {
            setDeviceIcon(<SiGooglephotos size={24} />);
          }
  
          else {
            setDeviceIcon(<BsImages size={30} />);
          }
        }
      };
  
      getDeviceIcon();
    }, []);
  
    return <div>{deviceIcon}</div>;
  };
  
  export const Gallery: React.FC = GalleryIcon;