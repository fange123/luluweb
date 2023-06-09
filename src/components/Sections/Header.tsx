import {Dialog, Transition} from '@headlessui/react';
import classNames from 'classnames';
import Link from 'next/link';
import logo from '../../images/lulu.png';
import menu from '../../images/menu.png';
import {FC, Fragment, memo, useCallback, useMemo, useState} from 'react';

import Image from 'next/image';
import {useRouter} from 'next/router';

export const headerID = 'headerNav';

const Header: FC = memo(() => {
  const router = useRouter();
  const currentSection = router.asPath === '/' ? '/home' : router.asPath;
  const navSections = useMemo(() => ['/', 'lp'], []);

  return (
    <>
      <MobileNav currentSection={currentSection} navSections={navSections} />
      <DesktopNav currentSection={currentSection} navSections={navSections} />
    </>
  );
});

const DesktopNav: FC<{navSections: string[]; currentSection: string | null}> = memo(({navSections, currentSection}) => {
  const baseClass =
    '-m-1.5 p-1.5 rounded-md text-xl font-bold first-letter:uppercase hover:transition-colors hover:duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 sm:hover:text-orange-500 text-neutral-100';
  const activeClass = classNames(baseClass, 'text-yellow-500');
  const inactiveClass = classNames(baseClass, 'text-neutral-100');
  return (
    <header
      className="fixed top-0 z-50 hidden w-full bg-neutral-900/50 p-4 px-6 backdrop-blur sm:block lg:px-20"
      id={headerID}>
      <div className="flex w-full justify-between">
        <h1 className="maria text-2xl font-bold italic text-white">
          <Link href="/" className="flex items-center">
            <Image alt="" src={logo} className="mr-2 w-10" />
            Lumina
          </Link>
        </h1>
        <nav className="flex items-center gap-x-8">
          {navSections.map(section => (
            <NavItem
              activeClass={activeClass}
              current={section === (currentSection === '/home' ? '/' : currentSection?.slice(1))}
              inactiveClass={inactiveClass}
              key={section}
              section={section}
            />
          ))}
        </nav>
        <button
          type="button"
          className="rounded-full bg-gradient-to-r from-[#E11D48] to-[#3CA0E1]  px-8 text-center text-lg font-semibold  text-white  hover:bg-gradient-to-bl focus:outline-none focus:ring-4 focus:ring-red-100 dark:focus:ring-red-400">
          Connect Wallet
        </button>
      </div>
    </header>
  );
});

const MobileNav: FC<{navSections: string[]; currentSection: string | null}> = memo(({navSections, currentSection}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleOpen = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const baseClass =
    'p-2 rounded-md first-letter:uppercase transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500';
  const activeClass = classNames(baseClass, 'bg-neutral-900 text-white font-bold');
  const inactiveClass = classNames(baseClass, 'text-neutral-200 font-medium');
  return (
    <>
      <div className="fixed top-0 z-50 flex h-12 w-full justify-between bg-[#110d28] p-2 px-6 sm:hidden">
        <h1 className="maria flex items-center text-xl font-bold text-white">
          <Image alt="" src={logo} className="mr-2 w-8" />
          Lumina
        </h1>
        <button
          type="button"
          className="mr-2 rounded-full bg-gradient-to-r from-[#E11D48] to-[#3CA0E1]  px-8 text-center  text-sm  font-semibold  text-white hover:bg-gradient-to-bl focus:outline-none focus:ring-4 focus:ring-red-100 dark:focus:ring-red-400">
          Connect Wallet
        </button>
        <button aria-label="Menu Button" className="right-2 z-40  focus-visible:ring-offset-2 " onClick={toggleOpen}>
          <Image alt="" src={menu} className="h-8 w-8" />
          <span className="sr-only">Open sidebar</span>
        </button>
      </div>

      <Transition.Root as={Fragment} show={isOpen}>
        <Dialog as="div" className="fixed inset-0 z-40 flex sm:hidden" onClose={toggleOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <Dialog.Overlay className="fixed inset-0 bg-stone-900 bg-opacity-75" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full">
            <div className="relative w-4/5 bg-stone-800 pt-10">
              <nav className="mt-5 flex flex-col gap-y-2 px-2">
                {navSections.map(section => (
                  <NavItem
                    activeClass={activeClass}
                    current={section === (currentSection === '/home' ? '/' : currentSection?.slice(1))}
                    inactiveClass={inactiveClass}
                    key={section}
                    onClick={toggleOpen}
                    section={section}
                  />
                ))}
              </nav>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>
    </>
  );
});

const NavItem: FC<{
  section: string;
  current: boolean;
  activeClass: string;
  inactiveClass: string;
  onClick?: () => void;
}> = memo(({section, current, inactiveClass, activeClass, onClick}) => {
  return (
    <Link
      className={classNames(current ? activeClass : inactiveClass, 'italic')}
      href={`/${section === '/' ? '' : section}`}
      key={section}
      onClick={onClick}>
      {section === '/' ? 'home' : section}
    </Link>
  );
});

Header.displayName = 'Header';
export default Header;
