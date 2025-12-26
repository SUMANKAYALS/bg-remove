import React, { useContext } from 'react';
import { dataAssets } from '../assets/assets/assets';
import { AppContext } from '../context/AppContext';

function Header() {
    const { removeBg } = useContext(AppContext);

    return (
        <div className='flex items-center justify-between max-sm:flex-col-reverse gap-y-10 px-4 mt-10 lg:px-44 sm:mt-20'>

            {/* LEFT SIDE */}
            <div>
                <h1 className='text-4xl xl:text-5xl 2xl:text-6xl font-bold leading-tight'>
                    Remove the <br className='max-md:hidden' />
                    <span className='bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent'>
                        background
                    </span>{' '}
                    from <br className='max-md:hidden' /> images for free.
                </h1>

                <p className='my-6 text-[15px] text-gray-500'>
                    Upload any image and remove the background instantly using AI.
                </p>

                {/* ✅ FIXED INPUT */}
                <input
                    type="file"
                    accept="image/*"
                    id="upload1"
                    hidden
                    onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) removeBg(file);
                    }}
                />

                <label
                    htmlFor="upload1"
                    className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full cursor-pointer
          bg-gradient-to-r from-violet-600 to-fuchsia-500
          hover:scale-105 transition-all duration-500 shadow-md"
                >
                    <img width={20} src={dataAssets.upload_btn_icon} alt="Upload" />
                    <p className='text-white text-sm'>Upload your image</p>
                </label>
            </div>

            {/* RIGHT SIDE */}
            <div className='w-full max-w-md flex justify-center'>
                <div className='relative w-[300px] h-[300px] rounded-2xl overflow-hidden bg-white shadow-xl'>
                    <img
                        src={dataAssets.indian_bg}
                        alt="Background Remover App Preview"
                        className='w-full h-full object-cover'
                    />
                </div>
            </div>

        </div>
    );
}

export default Header;
