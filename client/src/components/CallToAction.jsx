import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl'>
                Want to learn more about Us?
            </h2>
            <p className='text-gray-500 my-2'>
                Checkout Our Project Repositories
            </p>
            <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
                <a href="https://github.com/sanjeeb09?tab=repositories" target='_blank' rel='noopener noreferrer'>
                    Project Repository
                </a>
            </Button>
        </div>
        <div className="p-7 flex-1">
            <img src="https://as1.ftcdn.net/v2/jpg/05/64/11/84/1000_F_564118425_2Og5WaD7PzuQ1SypkU1JrKApRakreNSx.jpg" />
        </div>
    </div>
  )
}