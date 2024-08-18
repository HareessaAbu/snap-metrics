import React, { useEffect, useState } from 'react';
import { Inertia } from 'inertiajs/react';
import { Head, useForm } from '@inertiajs/react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';

const BubbleChart = React.lazy(() => import('../Components/Chart/BubbleChart'));
import DarkModeToggle from '../Components/DarkModeToggle';
import TypingEffect from '@/Components/TypingEffect';
import TextInput from '@/Components/TextInput';
import DonutChart from '@/Components/Chart/DonutChart';
import RadarChart from '@/Components/Chart/RadarChart';
import HeatMapChart from '@/Components/Chart/HeatMapChart';
import MapChart from '@/Components/Chart/MapChart';
import LoadingSpinner from '@/Components/LoadingSpinner';

const bubbleData = [
  { x: 30, y: 20, value: 10 },
  { x: 85, y: 60, value: 50 },
  { x: 50, y: 80, value: 30 },
  { x: 20, y: 50, value: 40 },
  { x: 90, y: 90, value: 70 },
];

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const [isEntered, setIsEntered] = useState(false)
    
    const { data, setData, post, processing, errors, reset } = useForm({
        businessName: '',
    });
    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    const submit = (e) => {
        e.preventDefault();
        setIsEntered(true);

        // post(route('login'), {
        //     onFinish: () => reset('password'),
        // });
    };

    useEffect(() => {
        // const fetchData = async () => {
        //   try {
        //     // Perform your async data fetch or other operations here
        //     // Example: const response = await fetch('your-api-endpoint');
        //     // const data = await response.json();
            
        //     // Set state or do other actions with the fetched data
        //     // setYourState(data);
    
        //     // Assuming you want to set isEntered to true once the data is fetched
            
        //     setTimeout(() => {
        //         setLoading(false);
        //         setProgress(100);
        //       }, 3000); // 500ms delay
        //     setIsEntered(true);
        //   } catch (error) {
        //     console.error('Error fetching data:', error);
        //   }
        // };
    
        // fetchData();
        const startLoading = () => {
            setLoading(true);
            setProgress(0);
          };
      
          const stopLoading = () => {
            // Add a delay to ensure the loading screen is visible for at least 500ms
            setTimeout(() => {
              setLoading(false);
              setProgress(100);
            }, 500); // 500ms delay
          };
      
          Inertia.on('start', startLoading);
          Inertia.on('progress', (event) => {
            if (event.detail.progress) {
              setProgress(event.detail.progress.percentage);
            }
          });
          Inertia.on('finish', stopLoading);
      
          return () => {
            Inertia.off('start', startLoading);
            Inertia.off('progress', (event) => {
              if (event.detail.progress) {
                setProgress(event.detail.progress.percentage);
              }
            });
            Inertia.off('finish', stopLoading);
          };
      }, []); // Empty dependency array means this runs once on component mount
  
    if (loading) return <LoadingSpinner progress={progress} />;
    return (
        <>
            <Head title="SnapMetric" />
            <div className="bg-[#d7dee8] text-black/50 dark:bg-black dark:text-white/50">
                <div className="transition-all relative min-h-screen flex flex-col items-center selection:bg-[#FF2D20] selection:text-white">
                    <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">
                        <header className="grid grid-cols-2 items-center gap-2 py-6 mt-5">
                            <div className="flex lg:justify-left">
                                <h2 className="text-3xl font-extrabold tracking-tight leading-tight text-gray-900 dark:text-white md:text-4xl">SnapMetrics</h2>
                            </div>
                            <nav className="flex flex-1 justify-end">
                                <DarkModeToggle />
                            </nav>
                        </header>
                        <main>
                            {!isEntered ? (
                            <div className='w-full min-h-screen -mt-16 flex flex-col justify-center'>
                                <div className="items-center self-center justify-center w-full sm:max-w-md px-6 py-4 bg-white dark:bg-gray-800 shadow-md overflow-hidden sm:rounded-xl">
                                    <form onSubmit={submit}>
                                        <InputLabel htmlFor="businessName" value="Business Name" />

                                        <TextInput
                                            id="businessName"
                                            type="text"
                                            name="businessName"
                                            value={data.businessName}
                                            className="mt-1 block w-full"
                                            // autoComplete="username"
                                            isFocused={true}
                                            onChange={(e) => setData('businessName', e.target.value)}
                                        />

                                        <InputError message={errors.businessName} className="mt-2" />
                                        <div className="flex items-center justify-end mt-4">
                                            <PrimaryButton className="ms-4" disabled={processing}>
                                                Start Analyse
                                            </PrimaryButton>
                                        </div>
                                    </form>
                                </div>
                            </div>) :
                            (<div className="grid gap-9 lg:grid-cols lg:gap-8 ">
                                <div
                                    id="docs-card"
                                    className="relative flex flex-row items-start justify-between overflow-hidden rounded-xl bg-[#e9ecf3] dark:bg-zinc-900 bg-opacity-90 p-4"
                                >
                                    <span className="absolute flex h-6 w-6 top-4 right-4">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#011866] dark:bg-white opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-6 w-6 bg-[#011866]"></span>
                                    </span>

                                    <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#011866]/10 dark:bg-white/10 sm:size-16">
                                        <svg
                                            className="size-5 sm:size-6"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <g fill="#011866" class="dark:fill-white">
                                                <path d="M8.75 4.5H5.5c-.69 0-1.25.56-1.25 1.25v4.75c0 .69.56 1.25 1.25 1.25h3.25c.69 0 1.25-.56 1.25-1.25V5.75c0-.69-.56-1.25-1.25-1.25Z" />
                                                <path d="M24 10a3 3 0 0 0-3-3h-2V2.5a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2V20a3.5 3.5 0 0 0 3.5 3.5h17A3.5 3.5 0 0 0 24 20V10ZM3.5 21.5A1.5 1.5 0 0 1 2 20V3a.5.5 0 0 1 .5-.5h14a.5.5 0 0 1 .5.5v17c0 .295.037.588.11.874a.5.5 0 0 1-.484.625L3.5 21.5ZM22 20a1.5 1.5 0 1 1-3 0V9.5a.5.5 0 0 1 .5-.5H21a1 1 0 0 1 1 1v10Z" />
                                                <path d="M12.751 6.047h2a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-.75.75h-2A.75.75 0 0 1 12 7.3v-.5a.75.75 0 0 1 .751-.753ZM12.751 10.047h2a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-.75.75h-2A.75.75 0 0 1 12 11.3v-.5a.75.75 0 0 1 .751-.753ZM4.751 14.047h10a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-.75.75h-10A.75.75 0 0 1 4 15.3v-.5a.75.75 0 0 1 .751-.753ZM4.75 18.047h7.5a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-.75.75h-7.5A.75.75 0 0 1 4 19.3v-.5a.75.75 0 0 1 .75-.753Z" />
                                            </g>
                                        </svg>
                                    </div>

                                    <div className="pt-3 pl-3 sm:pt-5 gap-4">
                                        <h2 className="text-xl font-semibold text-black dark:text-white">
                                            Suggestions
                                        </h2>

                                        <TypingEffect text="Laravel News is a community driven portal and newsletter aggregating all of the latest and most important news in the Laravel ecosystem, including new package releases and tutorials." />
                                    </div>
                                    <MapChart className="flex justify-end" />
                                </div>

                                <div className="grid gap-9 lg:grid-cols-3 lg:gap-3">
                                    {/* // HEATMAP */}
                                    <div className="relative w-full flex flex-col overflow-visible rounded-xl bg-[#e9ecf3] dark:bg-zinc-900 bg-opacity-50 p-4">
                                        <div className="relative w-full -mt-12 py-4 pr-1 self-center">
                                            <HeatMapChart className='bg-[#e9ecf3] rounded-xl p-4'/>
                                        </div>
                                        <div className="flex">
                                            <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#011866]/10 dark:bg-white/10 sm:size-16">
                                                <svg
                                                    className="size-5 sm:size-6"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <g fill="#011866" class="dark:fill-white">
                                                        <path d="M8.75 4.5H5.5c-.69 0-1.25.56-1.25 1.25v4.75c0 .69.56 1.25 1.25 1.25h3.25c.69 0 1.25-.56 1.25-1.25V5.75c0-.69-.56-1.25-1.25-1.25Z" />
                                                        <path d="M24 10a3 3 0 0 0-3-3h-2V2.5a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2V20a3.5 3.5 0 0 0 3.5 3.5h17A3.5 3.5 0 0 0 24 20V10ZM3.5 21.5A1.5 1.5 0 0 1 2 20V3a.5.5 0 0 1 .5-.5h14a.5.5 0 0 1 .5.5v17c0 .295.037.588.11.874a.5.5 0 0 1-.484.625L3.5 21.5ZM22 20a1.5 1.5 0 1 1-3 0V9.5a.5.5 0 0 1 .5-.5H21a1 1 0 0 1 1 1v10Z" />
                                                        <path d="M12.751 6.047h2a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-.75.75h-2A.75.75 0 0 1 12 7.3v-.5a.75.75 0 0 1 .751-.753ZM12.751 10.047h2a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-.75.75h-2A.75.75 0 0 1 12 11.3v-.5a.75.75 0 0 1 .751-.753ZM4.751 14.047h10a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-.75.75h-10A.75.75 0 0 1 4 15.3v-.5a.75.75 0 0 1 .751-.753ZM4.75 18.047h7.5a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-.75.75h-7.5A.75.75 0 0 1 4 19.3v-.5a.75.75 0 0 1 .75-.753Z" />
                                                    </g>
                                                </svg>
                                            </div>

                                            <div className="pt-3 pl-3 sm:pt-5 gap-4">
                                                <h2 className="text-xl font-semibold text-black dark:text-white">
                                                    Suggestions
                                                </h2>

                                                <TypingEffect text="Laravel News is a community driven portal and newsletter aggregating all of the latest and most important news in the Laravel ecosystem, including new package releases and tutorials." />
                                            </div>
                                        </div>
                                    </div>
                                    {/* //DONUT AND RADAR */}
                                    <div className="relative w-full flex flex-col overflow-visible rounded-xl bg-[#e9ecf3] dark:bg-zinc-900 bg-opacity-50 p-4">
                                        <div className="relative w-full -mt-12 py-4 pr-1 self-center">
                                            <RadarChart className='bg-[#e9ecf3] rounded-xl p-4'/>
                                        </div>
                                        <div className="flex">
                                            <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#011866]/10 dark:bg-white/10 sm:size-16">
                                                <svg
                                                    className="size-5 sm:size-6"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <g fill="#011866" class="dark:fill-white">
                                                        <path d="M8.75 4.5H5.5c-.69 0-1.25.56-1.25 1.25v4.75c0 .69.56 1.25 1.25 1.25h3.25c.69 0 1.25-.56 1.25-1.25V5.75c0-.69-.56-1.25-1.25-1.25Z" />
                                                        <path d="M24 10a3 3 0 0 0-3-3h-2V2.5a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2V20a3.5 3.5 0 0 0 3.5 3.5h17A3.5 3.5 0 0 0 24 20V10ZM3.5 21.5A1.5 1.5 0 0 1 2 20V3a.5.5 0 0 1 .5-.5h14a.5.5 0 0 1 .5.5v17c0 .295.037.588.11.874a.5.5 0 0 1-.484.625L3.5 21.5ZM22 20a1.5 1.5 0 1 1-3 0V9.5a.5.5 0 0 1 .5-.5H21a1 1 0 0 1 1 1v10Z" />
                                                        <path d="M12.751 6.047h2a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-.75.75h-2A.75.75 0 0 1 12 7.3v-.5a.75.75 0 0 1 .751-.753ZM12.751 10.047h2a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-.75.75h-2A.75.75 0 0 1 12 11.3v-.5a.75.75 0 0 1 .751-.753ZM4.751 14.047h10a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-.75.75h-10A.75.75 0 0 1 4 15.3v-.5a.75.75 0 0 1 .751-.753ZM4.75 18.047h7.5a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-.75.75h-7.5A.75.75 0 0 1 4 19.3v-.5a.75.75 0 0 1 .75-.753Z" />
                                                    </g>
                                                </svg>
                                            </div>

                                            <div className="pt-3 pl-3 sm:pt-5 gap-4">
                                                <h2 className="text-xl font-semibold text-black dark:text-white">
                                                    Suggestions
                                                </h2>

                                                <TypingEffect text="Laravel News is a community driven portal and newsletter aggregating all of the latest and most important news in the Laravel ecosystem, including new package releases and tutorials." />
                                            </div>
                                        </div>
                                        <DonutChart className='bg-[#e9ecf3] rounded-xl p-4' />
                                    </div>
                                    {/* // BUBBLE CHART */}
                                    <div className="relative w-full flex flex-col overflow-visible rounded-xl bg-[#e9ecf3] dark:bg-zinc-900 bg-opacity-50 p-4">
                                        <div className="relative w-full -mt-12 py-4 pr-1 self-center">
                                            <BubbleChart data={bubbleData} className='bg-[#e7e9f0] rounded-xl p-4' />
                                        </div>

                                        <div className="flex">
                                            <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#011866]/10 dark:bg-white/10 sm:size-16">
                                                <svg
                                                    className="size-5 sm:size-6"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <g fill="#011866" class="dark:fill-white">
                                                        <path d="M8.75 4.5H5.5c-.69 0-1.25.56-1.25 1.25v4.75c0 .69.56 1.25 1.25 1.25h3.25c.69 0 1.25-.56 1.25-1.25V5.75c0-.69-.56-1.25-1.25-1.25Z" />
                                                        <path d="M24 10a3 3 0 0 0-3-3h-2V2.5a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2V20a3.5 3.5 0 0 0 3.5 3.5h17A3.5 3.5 0 0 0 24 20V10ZM3.5 21.5A1.5 1.5 0 0 1 2 20V3a.5.5 0 0 1 .5-.5h14a.5.5 0 0 1 .5.5v17c0 .295.037.588.11.874a.5.5 0 0 1-.484.625L3.5 21.5ZM22 20a1.5 1.5 0 1 1-3 0V9.5a.5.5 0 0 1 .5-.5H21a1 1 0 0 1 1 1v10Z" />
                                                        <path d="M12.751 6.047h2a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-.75.75h-2A.75.75 0 0 1 12 7.3v-.5a.75.75 0 0 1 .751-.753ZM12.751 10.047h2a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-.75.75h-2A.75.75 0 0 1 12 11.3v-.5a.75.75 0 0 1 .751-.753ZM4.751 14.047h10a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-.75.75h-10A.75.75 0 0 1 4 15.3v-.5a.75.75 0 0 1 .751-.753ZM4.75 18.047h7.5a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-.75.75h-7.5A.75.75 0 0 1 4 19.3v-.5a.75.75 0 0 1 .75-.753Z" />
                                                    </g>
                                                </svg>
                                            </div>

                                            <div className="pt-3 pl-3 sm:pt-5 gap-4">
                                                <h2 className="text-xl font-semibold text-black dark:text-white">
                                                    Suggestions
                                                </h2>

                                                <TypingEffect text="Laravel News is a community driven portal and newsletter aggregating all of the latest and most important news in the Laravel ecosystem, including new package releases and tutorials." />
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className="flex items-start gap-4 rounded-xl bg-white bg-opacity-80 p-4 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] transition duration-300 hover:text-black/70 hover:ring-black/20 focus:outline-none focus-visible:ring-[#FF2D20] lg:pb-10 dark:bg-zinc-900 dark:ring-zinc-800 dark:hover:text-white/70 dark:hover:ring-zinc-700 dark:focus-visible:ring-[#FF2D20]">
                                        <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#011866]/10 dark:bg-white/10 sm:size-16">
                                            <svg
                                                className="size-5 sm:size-6"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                            >
                                                <g fill="#011866" class="dark:fill-white">
                                                    <path d="M8.75 4.5H5.5c-.69 0-1.25.56-1.25 1.25v4.75c0 .69.56 1.25 1.25 1.25h3.25c.69 0 1.25-.56 1.25-1.25V5.75c0-.69-.56-1.25-1.25-1.25Z" />
                                                    <path d="M24 10a3 3 0 0 0-3-3h-2V2.5a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2V20a3.5 3.5 0 0 0 3.5 3.5h17A3.5 3.5 0 0 0 24 20V10ZM3.5 21.5A1.5 1.5 0 0 1 2 20V3a.5.5 0 0 1 .5-.5h14a.5.5 0 0 1 .5.5v17c0 .295.037.588.11.874a.5.5 0 0 1-.484.625L3.5 21.5ZM22 20a1.5 1.5 0 1 1-3 0V9.5a.5.5 0 0 1 .5-.5H21a1 1 0 0 1 1 1v10Z" />
                                                    <path d="M12.751 6.047h2a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-.75.75h-2A.75.75 0 0 1 12 7.3v-.5a.75.75 0 0 1 .751-.753ZM12.751 10.047h2a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-.75.75h-2A.75.75 0 0 1 12 11.3v-.5a.75.75 0 0 1 .751-.753ZM4.751 14.047h10a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-.75.75h-10A.75.75 0 0 1 4 15.3v-.5a.75.75 0 0 1 .751-.753ZM4.75 18.047h7.5a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-.75.75h-7.5A.75.75 0 0 1 4 19.3v-.5a.75.75 0 0 1 .75-.753Z" />
                                                </g>
                                            </svg>
                                        </div>

                                        <div className="pt-3 sm:pt-5 gap-4">
                                            <h2 className="text-xl font-semibold text-black dark:text-white">
                                                Suggestions
                                            </h2>

                                            <TypingEffect text="Laravel News is a community driven portal and newsletter aggregating all of the latest and most important news in the Laravel ecosystem, including new package releases and tutorials." />
                                        </div>
                                    </div>
                            </div>)}
                        </main>
                        <footer className="py-16 text-center text-sm text-black dark:text-white/70">
                            Laravel v{laravelVersion} (PHP v{phpVersion})
                        </footer>
                    </div>
                </div>
            </div>
        </>
    );
}
