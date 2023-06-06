import React, { useEffect, useState } from 'react';

const HomeIcon: React.FC = () => {
  const [deviceIcon, setDeviceIcon] = useState<React.ReactNode | null>(null);

  useEffect(() => {
    const getDeviceIcon = async () => {
      if (typeof window !== 'undefined') {
        const { RiAndroidFill, RiWindowsFill, RiAppleFill } = await import('react-icons/ri');
        const icons = {
          windows: RiWindowsFill,
          android: RiAndroidFill,
          apple: RiAppleFill
        };
        let deviceIcon = null;

        if (/iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)) {
          deviceIcon = <icons.apple size={28} />;
        } else if (/Android/.test(navigator.userAgent)) {
          deviceIcon = <icons.android size={28} />;
        } else {
          deviceIcon = <icons.windows size={30} />;
        }

        setDeviceIcon(deviceIcon);
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
        const { RiUser3Fill, RiUser3Line, RiUserLine } = await import('react-icons/ri');
        const icons = {
          windows: RiUser3Fill,
          android: RiUser3Line,
          apple: RiUserLine
        };
        let deviceIcon = null;

        if (/iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)) {
          deviceIcon = <icons.apple size={28} />;
        } else if (/Android/.test(navigator.userAgent)) {
          deviceIcon = <icons.android size={28} />;
        } else {
          deviceIcon = <icons.windows size={30} />;
        }

        setDeviceIcon(deviceIcon);
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
        const { RiFilmFill, RiFilmLine, RiMovieLine } = await import('react-icons/ri');
        const icons = {
          windows: RiFilmFill,
          android: RiFilmLine,
          apple: RiMovieLine
        };
        let deviceIcon = null;

        if (/iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)) {
          deviceIcon = <icons.apple size={28} />;
        } else if (/Android/.test(navigator.userAgent)) {
          deviceIcon = <icons.android size={28} />;
        } else {
          deviceIcon = <icons.windows size={30} />;
        }

        setDeviceIcon(deviceIcon);
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
        const { RiSettings3Fill, RiSettings2Line, RiSettings3Line } = await import('react-icons/ri');
        const icons = {
          windows: RiSettings3Fill,
          android: RiSettings2Line,
          apple: RiSettings3Line
        };
        let deviceIcon = null;

        if (/iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)) {
          deviceIcon = <icons.apple size={28} />;
        } else if (/Android/.test(navigator.userAgent)) {
          deviceIcon = <icons.android size={28} />;
        } else {
          deviceIcon = <icons.windows size={30} />;
        }

        setDeviceIcon(deviceIcon);
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
        const { RiImage2Fill, RiImageFill, RiImageLine } = await import('react-icons/ri');
        const icons = {
          windows: RiImage2Fill,
          android: RiImageFill,
          apple: RiImageLine
        };
        let deviceIcon = null;

        if (/iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)) {
          deviceIcon = <icons.apple size={28} />;
        } else if (/Android/.test(navigator.userAgent)) {
          deviceIcon = <icons.android size={28} />;
        } else {
          deviceIcon = <icons.windows size={30} />;
        }

        setDeviceIcon(deviceIcon);
      }
    };

    getDeviceIcon();
  }, []);

  return <div>{deviceIcon}</div>;
};
export const Gallery: React.FC = GalleryIcon;
