import {FC, memo, useState, useRef, useEffect} from 'react';
import Image from 'next/image';
import bg from '../images/bg.png';
import homeCat from '../images/home_cat.png';
import about from '../images/about_bg.png';
import bar from '../images/bar.png';
import Carousel from '../components/Carousel';

const Home: FC = memo(() => {
  const [text, setText] = useState('');
  const textRef = useRef(null);

  useEffect(() => {
    let timeId: any = null;
    const handleCopy = () => {
      if (textRef.current) {
        navigator.clipboard
          .writeText((textRef.current as HTMLElement).innerText)
          .then(() => {
            setText('Copied!');
            timeId = setTimeout(() => {
              setText('');
            }, 2000);
          })
          .catch(error => {
            console.error('Failed to copy text:', error);
          });
      }
    };

    const copyButton = document.getElementById('copyButton');
    if (copyButton) {
      copyButton.addEventListener('click', handleCopy);
    }

    return () => {
      clearTimeout(timeId);
      if (copyButton) {
        copyButton.removeEventListener('click', handleCopy);
      }
    };
  }, []);

  return (
    <div className="bg h-full w-full">
      {/* header */}
      <section className=" home relative flex h-full w-full justify-center bg-[#0f0e0c]/90 pb-20">
        <div className=" homeBg  mt-10 h-full w-full">
          <h3 className="maria text-md mb-5 mt-24 w-full text-center font-semibold leading-10 tracking-widest text-white lg:mb-10 lg:mt-44 lg:text-4xl">
            Welcome To The World Of Lumina!
          </h3>
          <h4 className="maria text-md mb-5 w-full text-center font-semibold leading-10 tracking-widest text-white lg:mb-32  lg:text-3xl">
            The Shining Star of the Future Economy
          </h4>
          <div className=" flex w-full flex-col justify-center px-5 lg:px-32 lg:pt-20">
            <div className=" flex w-full flex-col items-center justify-center rounded-2xl border border-solid border-white bg-[#2a0303]/50 px-5 py-10  lg:rounded-3xl lg:px-10 lg:pb-20">
              <h3 className="text-center text-xl font-semibold uppercase leading-10 tracking-wider text-white lg:my-10 lg:text-3xl">
                You Can Claim LUMINA Now!
              </h3>
              <p className="break-words text-center text-lg leading-7 text-gray-200 lg:text-xl lg:leading-10">
                A total of 1,000,000,000 Lumina tokens are now available to be claimed by those who have participated in
                the Lumina airdrop.
              </p>
              <p className="mt-4 break-words text-center text-lg leading-7 text-gray-200 lg:text-xl lg:leading-10">
                Lumina tokens that have not been claimed within 30 days will be used for the Lumina Community Incentive
                Program. The Lumina tokens will be distributed to the most active and engaged members of the Lumina
                community, rewarding their contributions and commitment. This program aims to foster a vibrant and
                supportive community and drive the growth and development of Lumina.
              </p>
              <div className="text-time-shadow my-5 text-center text-xl font-semibold text-rose-500">
                2023.04.20 9:00:00 - 2023.05.20 9:00:00
              </div>
              <div className="relative mt-20 w-full lg:w-1/2">
                <div className="absolute -top-8 flex w-full justify-between">
                  <span className="text-white">Received</span>
                  <span className="text-white">1,000,000,000</span>
                </div>
                <div className="h-6  rounded-full bg-[#E11D48]/50">
                  <div className="h-full w-1/2 rounded-full bg-gradient-to-r from-[#E11D48] to-[#3CA0E1]"></div>
                </div>
              </div>
              <button
                type="button"
                className="mt-10 w-full rounded-full bg-gradient-to-br from-[#E11D48] to-[#3CA0E1] px-5 py-2.5 text-center text-sm font-semibold  text-white hover:bg-gradient-to-bl focus:outline-none focus:ring-4 focus:ring-pink-200 dark:focus:ring-pink-800 lg:mt-10 lg:w-1/2 lg:text-xl">
                Claim Airdrop
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* about */}
      <section className="about  mb-5 mt-20 px-5 lg:flex lg:px-24 lg:py-20">
        <div className="lg:ml-20 lg:flex-1">
          <h3 className="mb-5 text-3xl font-semibold leading-10 text-white">What Is Lumina?</h3>
          <p className="mb-6  break-words text-xl leading-8 text-white">
            I am Lumina, an innovative and radiant digital currency. Born at the pinnacle of technology, I combine
            advanced blockchain and cryptography to bring unparalleled financial freedom and revolutionary opportunities
            to the world.
          </p>
          <p className="break-words text-xl leading-8 text-white">
            Lumina symbolizes light, hope, and the future. As a highly secure and decentralized currency, I promise to
            provide borderless financial transaction experience for global users. I employ the most advanced encryption
            technology to ensure the security of your assets while providing fast and low-cost transaction
            confirmations. Wherever you are in the world, Lumina will open the door to the global economy for you.
          </p>
          <button
            type="button"
            className="mt-10 w-full rounded-full bg-gradient-to-br from-[#E11D48] to-[#3CA0E1] px-5 py-2.5 text-center text-sm font-semibold  text-white hover:bg-gradient-to-bl focus:outline-none focus:ring-4 focus:ring-pink-200 dark:focus:ring-pink-800 lg:mt-10  lg:text-xl">
            Buy Lumina
          </button>
          <div className="mb-5 mt-10">
            <div className="text-xl text-[#3CA0E1]">
              Contract:&nbsp;&nbsp;
              <span ref={textRef} className="break-all">
                0xF1A82bfA7fCEb8B8741e7E04a6B8EfD348cA6393
              </span>
              <span id="copyButton" className="flex h-12 w-12 items-center">
                <span>
                  <svg
                    fill="none"
                    className="h-10 w-10 cursor-pointer"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75"
                    />
                  </svg>
                </span>
                <span>{text}</span>
              </span>
            </div>
          </div>
        </div>
        <div className="lg:ml-44 lg:flex-1">
          <Image alt="" src={about} />
        </div>
      </section>
      {/* token */}
      <section className="token relative mt-10 flex w-full flex-col justify-center px-5 text-center">
        <h3 className="mb-5 text-3xl font-semibold leading-10 text-white">Token Allocation for Lumina (LUM) Token:</h3>
        <h4 className="mb-5 text-center text-xl font-semibold leading-10 text-gray-300">Total Supply: 1,000,000 LUM</h4>
        <div className="flex w-full justify-center lg:mt-20">
          <Image alt="" src={bar} className="lg:w-2/3" />
        </div>
        <div className=" mb-10 mt-10 w-full text-center lg:px-44">
          <h4 className="mb-3 text-2xl font-semibold leading-10 text-gray-100">Locking and Release:</h4>
          <p className="break-words text-xl leading-10 text-gray-200">
            Tokens held by the team and private investors typically have a designated lock-up period during which the
            tokens cannot be traded or transferred. This is done to ensure the long-term development of the project and
            prevent a large-scale token sell-off during the early stages.
          </p>
          <p className="mb-3  break-words text-xl leading-10 text-gray-200">
            Once the lock-up period expires, the tokens held by the team and private investors will be gradually
            released, smoothing the increase in token supply.
          </p>
          <h4 className="mb-3 text-2xl font-semibold leading-10 text-gray-100">Unallocated Tokens:</h4>
          <p className="break-words text-xl leading-10 text-gray-200">
            After the initial distribution, any remaining unallocated tokens will be managed by the project foundation
            or core team. These unallocated tokens may be used for future ecosystem development, incentive programs, or
            other project needs.
          </p>
        </div>

        <div className="mt-10 w-full lg:px-20">
          <Carousel />
        </div>
      </section>
    </div>
  );
});

export default Home;
