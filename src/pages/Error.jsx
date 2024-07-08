import React from 'react';
import img1 from "../assets/Images/modern-flat-design-illustration-of-404-error-page-free-vector.jpg";
import CTAButton from "../components/core/HomePage/Button";

const Error = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen bg-gray-900'>
      <div className='w-full max-w-4xl'>
        <img src={img1} alt="404 Error" className='w-full h-full object-contain' />
      </div>
      <div className='mt-6'> {/* Added margin-top to create a gap */}
        <CTAButton active={true} linkto={"/"}> 
          Back to Home
        </CTAButton>
      </div>
    </div>
  );
}

export default Error;

