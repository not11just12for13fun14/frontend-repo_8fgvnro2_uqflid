import { useState } from 'react';
import { Menu } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#advantages', label: 'Advantages' },
    { href: '#process', label: 'Process' },
    { href: '#gallery', label: 'Projects' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 md:px-10 lg:px-12">
        <a href="#home" className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-sm bg-gradient-to-br from-lime-600 to-lime-400" />
          <span className="text-sm font-semibold tracking-wider text-white">VELOCITY CUSTOM</span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-sm text-gray-300 transition hover:text-white">{l.label}</a>
          ))}
          <a href="#contact" className="rounded-md bg-lime-600 px-4 py-2 text-sm font-semibold text-black shadow-[0_0_20px_rgba(163,230,53,0.35)] transition hover:bg-lime-500">Request Consultation</a>
        </nav>

        <button onClick={() => setOpen(!open)} className="md:hidden text-white">
          <Menu />
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-black/80 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm text-gray-300 transition hover:text-white">{l.label}</a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="rounded-md bg-lime-600 px-4 py-2 text-sm font-semibold text-black shadow-[0_0_20px_rgba(163,230,53,0.35)] transition hover:bg-lime-500">Request Consultation</a>
          </div>
        </div>
      )}
    </header>
  );
}
