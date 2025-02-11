import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import bannerBG from '../assets/banner-bg.jpg'
import bannerIMG from '../assets/banner-img.jpg'
import notificationIcon from '../assets/notification-icon.png'
import profileIMG from '../assets/profile-IMG.png'
import downArrow from '../assets/down-arrow.png'
import Image from 'next/image';

export default function FormPage() {
  const [sections, setSections] = useState<string[]>([]);
  const [sectionTitle, setSectionTitle] = useState('');
  const [description, setDescription] = useState('');

  const addSection = () => {
    if (sections.length < 3) {
      setSections([...sections, sectionTitle]);
      setSectionTitle('');
    }
  };


const fadeInContent =  useRef<HTMLDivElement>(null);

useEffect(()=>{

fadeInContent.current?.classList.add('fade-in-content')
setTimeout(() => {
  fadeInContent.current?.classList.remove('fade-in-content')
}, 2000);



},[fadeInContent])


  return (
    
    <div ref={fadeInContent} className="content landscape:pl-[2vw] portrait:px-[2vw] portrait:sm:px-[2vw]  w-[100vw] flex justify-between portrait:flex-col">
  <div className="w-[39%] portrait:w-full    px-[4vw] py-[2vw]  rounded-[1vw] shadow-md">
        
      {/* Header */}
      <div className="mb-[1vw] ">
        <Link href="/" className="text-[#e0c08c] hover:text-[#FAF5E5]  transition-colors cursor-pointer portrait:text-[1.9vw] portrait:sm:text-[1.3vw]">
          ← Back to Home
        </Link>
        <h1 className="text-[1vw] portrait:text-[1.5vw] portrait:sm:text-[1.2vw] font-bold text-[#828282] mt-[0.2vw]">Describe Section</h1>
      </div>

      {/* Main Form Content */}
      <div className="space-y-[2vw]">
        {/* Section Title Input */}
        <div className="border-b pb-[1vw]">
          <h2 className="text-[2vw]  portrait:text-[6vw]  portrait:sm:text-[3.4vw] font-semibold text-[#1F0954] mb-[1vw]">Program Information</h2>
          <div className="space-y-[1vw]">
            <h2 className="text-[1vw] portrait:text-[1.9vw] portrait:sm:text-[2vw] font-semibold text-[#1F0954]">Title</h2>
            <input
              type="text"
              placeholder="Describe Section Title e.g. What you stand to learn"
              className="w-full h-[3vw] portrait:h-[6vw] portrait:sm:h-[3vw]  p-[0.4vw] portrait:p-[.6vw] border rounded-[0.4vw] focus:ring-[0.2vw] focus:ring-[#f3c49a] text-[1vw] portrait:text-[3vw]  portrait:sm:text-[2.1vw]  "
              value={sectionTitle}
              onChange={(e) => setSectionTitle(e.target.value)}
            />
            <div className="flex gap-[2vw] portrait:text-[1.5vw] portrait:sm:text-[1.2vw]">
              <button className="text-[#cd7b7b] hover:text-red-800">Clear</button>
            </div>
          </div>
        </div>

        {/* Description Input */}
        <div className="border-b pb-[1vw]">
          <div className="space-y-[1vw]">
            <h2 className="text-[1vw] portrait:text-[1.9vw]  portrait:sm:text-[2vw]  font-semibold text-[#1F0954]">Description</h2>
            <textarea
              placeholder="Provide a clear and concise description/information of your program..."
              className="w-full h-[8vw] portrait:h-[16vw] portrait:sm:h-[8vw]  portrait:p-[.6vw] p-[0.4vw] border rounded-[0.4vw] focus:ring-[0.2vw] focus:ring-[#f3c49a] text-[1vw] portrait:text-[3vw]  portrait:sm:text-[1.8vw]  "
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <div className="flex gap-[2vw] portrait:text-[1.5vw] portrait:sm:text-[1.2vw]">
              <button className="text-[#cd7b7b] hover:text-red-800">Clear</button>
            </div>
          </div>
        </div>

        <div className="border-b pb-[1vw]">
          <div className="space-y-[1vw]">
            <div className="flex items-center justify-between bg-gray-50 pl-[1vw] py-[1vw] rounded-[0.4vw]">
              <span className="text-[1vw]  portrait:text-[3vw]  portrait:sm:text-[2.1vw]   text-gray-600">(maximum number of sections is 3)</span>
              <button
                onClick={addSection}
                disabled={sections.length >= 3}
                className={`px-[1.3vw] py-[1vw] rounded-[0.4vw] portrait:text-[3.1vw]  portrait:sm:text-[1.8vw]   ${sections.length >= 3 ? 'bg-gray-300' : 'bg-[#1F0954] text-[#FAF5E5] hover:bg-[#2A0B6E]'}`}
              >
                Add a Section
              </button>
            </div>
            <div className="flex items-center gap-[1vw] text-[1vw] portrait:text-[2.3vw]  portrait:sm:text-[1.3vw]   text-gray-600">
              <input type="checkbox" className="rounded-[0.5vw]" />
              <span>Show this section when Published</span>
            </div>
          </div>
        </div>


        {sections.map((section, index) => (
          <div key={index} className="border-b pb-[1vw] space-y-[1vw]">
            <div className="flex justify-between items-center mb-[1vw]">
              <h3 className="text-[2vw]  font-semibold text-[#1F0954]">Program Information Text {index + 1}</h3>
              <div className="flex gap-[1vw]">
                <button className="text-[#cd7b7b] hover:text-red-800">Delete</button>
                <button className="text-[#1F0954] hover:text-[#2A0B6E]">Edit</button>
              </div>
            </div>
            <p className="text-[1.3vw] text-gray-600">{section}</p>
          </div>
        ))}

        {/* Action Buttons */}
        <div className="flex justify-end gap-[2vw] mt-[2vw]">
          <button className="px-[3vw] py-[1vw] portrait:text-[2vw]  portrait:sm:text-[2.1vw]   text-gray-600 hover:bg-[#f9f9f9] rounded-[0.4vw]">Clear</button>
          <button className=" p-[1vw] portrait:text-[2.6vw]  portrait:sm:text-[2.4vw]   bg-[#1f0954e8] text-[#FAF5E5] hover:bg-[#2A0B6E] rounded-[0.4vw]">Save</button>
        </div>
      </div>
    </div>












<div className="space-y-6 w-[40%] portrait:w-full pt-[2vw] landscape:ml-[4vw] ">


<div className="profile-nav w-full  fixed left-0 top-0 flex justify-end mt-[0.8vw] pr-[2vw]">
<div className="content flex space-x-[1.2vw]">

<Image src={notificationIcon} alt='notificationIcon' className='w-[1.3vw] h-[1.5vw]  portrait:w-[3.9vw] portrait:h-[4.7vw]  portrait:sm:w-[2.8vw] portrait:sm:h-[3.8vw]'/>

<section className='flex space-x-[0.4vw]'>

<div className="profile flex space-x-[0.4vw]">

<div className="profile-image w-[2vw] h-[2vw] portrait:w-[6vw] portrait:h-[6vw] portrait:sm:w-[4vw] portrait:sm:h-[4vw]   rounded-full bg-[#3c4d3d] relative flex ">
  <Image src={profileIMG} alt="profile image" layout="fill" objectFit="cover" quality={100} className="rounded-full "/>
  </div>
  <div className="name-title-div flex flex-col text-[0.8vw] portrait:text-[3vw] portrait:sm:text-[1.4vw]">
<span className="name  ">Godwin Jimmy</span>
<div className="title text-[0.6vw] portrait:text-[1.5vw] portrait:sm:text-[1vw] text-[#777795FE]">Free Plan <span className=' text-[#2B85FE]'>Upgrade</span></div>


</div>
</div>

<Image src={downArrow} alt="arrow"  quality={100} className="rounded-full w-[0.8vw] h-[0.6vw]  portrait:w-[2.5vw] portrait:h-[1.6vw] portrait:sm:w-[1.2vw] portrait:sm:h-[.8vw] "/>


</section>
    
</div>



</div>



  {/* Program Header */}
  <div className="space-y-2 text-[#FAF5E5] w-full">


    
    <h1 className="text-[1.3vw] portrait:text-[3vw]   portrait:sm:text-[2.7vw]  font-bold text-[#1F0954]">Mentorship Program</h1>

    <div
    
    style={{
        backgroundImage: `url(${bannerBG.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '1vw',
        padding: '4vw',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
      }}

    className="banner flex justify-between spacing-x-[9vw] landscape:w-[115%] portrait:w-full h-[37vh] portrait:h-[50%]">
             
  
  
  
  
  
  
  
    <section>
        <header className="text-[1.3vw] portrait:text-[4vw]  font-semibold ">Mastering the work life Equation</header>

{/* Name and Type */}
  <div className="flex items-center gap-4 space-y-[0.4vw] portrait:text-[2.4vw]">
    <span className="font-medium">Mözön - Nwachukwu Peculiar</span>
    <span style={{
  background: 'linear-gradient(90deg, #FF0044 0%, #F6A000 100%)',
}} className="bg-[#FAF5E5] cursor-pointer text-[1.3vw] portrait:text-[2.1vw] px-3 py-[0.4vw] portrait:sm:py-[1vw] rounded-full text-sm">Masterclass</span>
  </div>

  {/* Date and Time */}
  <div className="flex gap-4 portrait:text-[2.2vw]">
    <span>20TH OCT, 2024</span>
    <span>•</span>
    <span>2PM</span>
  </div></section>

<Image src={bannerIMG} alt='image' className='w-[8vw] portrait:w-[30vw]  ml-[0.4vw] aspect-auto'/>

  </div>
        
    </div>
    
  

  {/* Description */}
  <p className="text-gray-600 max-w-2xl">
    UI/UX Design check ins with faith is a way for beginners in UI/UX Design to get started about the fundamentals 
    and how they can build a Design Career share document their progress on a weekly basis.
  </p>

 
  <div className="space-y-6">
    {/* Checklist Section 1 */}
    <div className="space-y-3">
      <h3 className="text-lg font-semibold text-[#1F0954]">Program Information Text</h3>
      <ul className="space-y-2">
        {['', 'x', '%', '$', '$*'].map((icon, index) => (
          <li key={index} className="flex items-center gap-3">
            <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center">
              <span className="text-sm">[{icon}]</span> 
            </div>
            <span className="text-gray-600">Content</span>
          </li>
        ))}
      </ul>
    </div>

    {/* Checklist Section 2 */}
    <div className="space-y-3">
      <h3 className="text-lg font-semibold text-[#1F0954]">Program Information Text 2</h3>
      <ul className="space-y-2">
        {Array(4).fill('x').map((icon, index) => (
          <li key={index} className="flex items-center gap-3">
            <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center">
              <span className="text-sm">[{icon}]</span> {/* Replace with icon */}
            </div>
            <span className="text-gray-600">Content</span>
          </li>
        ))}
      </ul>
    </div>

    {/* Program Dates */}
    <div className="space-y-1">
      <p className="text-[#1F0954] font-medium">21/4/2024-21/5/2024</p>
      <p className="text-gray-600">In Person</p>
    </div>
  </div>
</div>



<div className="my-8 border-t"></div>


    </div>
    
  
  );
}