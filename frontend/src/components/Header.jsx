import { Navbar } from 'flowbite-react';
import { Link } from 'react-router-dom';
import imagen from '../assets/Logo_3.png';

export default function Header() {
  return (
    <Navbar className="border-b-4 h-24">
      <Link to="/#" className="self-center whitespace-nowrap">
        <img src={imagen} alt="" className="object-scale-down h-20 w-96" />
      </Link>
    </Navbar>
  );
}

// video 23:00
