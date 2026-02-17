import React from 'react'
import { FaPenNib } from "react-icons/fa";
import { BsBookHalf } from "react-icons/bs";
import { IoNewspaper } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import { FaBullseye } from "react-icons/fa";
import { FaBolt } from "react-icons/fa6";
import { FaHandshakeSimple } from "react-icons/fa6";
import { FaArrowsRotate } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";

import data from "../data/project.json";
import { FaEnvelope } from "react-icons/fa";



export default function About() {
  return (
   

<div className="w-full min-h-screen flex flex-col items-center text-center pt-24 bg-[#0D0C0A] text-white">


<div className="inline-flex items-center gap-2 mb-16 
                bg-[#25160B] backdrop-blur-[30px] borderAbout buttonRounded p-2">



  <span className="text-sm font-medium px-2 text-[#ff7b1d] ">
   من نحن
  </span>
</div>
  
  <h1 className="text-5xl font-bold mb-4">
  مهمتنا هي <span className='text-[#ff7b1d]'>الإعلام والإلهام</span>
    <br />
   
  </h1>


  <p className="text-lg text-neutral-400  mb-6 max-w-3xl mx-auto">
   مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين ونصائح عملية لتطوير مهاراتكم. نحن شغوفون بمشاركة المعرفة ومساعدة المصورين على تنمية مهاراتهم من خلال محتوى عالي الجودة.
  </p>


<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 w-full max-w-6xl mb-5">
 
    <div className="flex flex-col justify-center items-center border-[1.5px] border-[#262626] rounded-[14px] bg-[#161616] backdrop-blur-[30px] p-3">
      <div className="text-3xl text-orange-500 mb-2"><FaUsers /></div> 
      <div className="text-3xl font-bold mb-2 text-[#FA9C1D]">+2مليون
</div>
      <div className="text-sm text-neutral-500">قارئ شهرياً</div>
    </div>

   
    <div className="flex flex-col justify-center items-center border-[1.5px] border-[#262626] rounded-[14px] bg-[#161616] backdrop-blur-[30px] p-3">
      <div className="text-3xl text-orange-500 mb-2"><IoNewspaper /></div>
      <div className="text-3xl font-bold mb-2 text-[#FA9C1D]">+500</div>
      <div className="text-sm text-neutral-500">
مقالة منشورة</div>
    </div>

    
    <div className="flex flex-col justify-center items-center border-[1.5px] border-[#262626] rounded-[14px] bg-[#161616] backdrop-blur-[30px] p-3">
      <div className="text-3xl text-orange-500 mb-2"><FaPenNib /></div>
      <div className="text-3xl font-bold mb-2 text-[#FA9C1D]">+50</div>
      <div className=" text-sm text-neutral-500">كاتب خبير</div>
    </div>

    
    <div className="flex flex-col justify-center items-center border-[1.5px] border-[#262626] rounded-[14px] bg-[#161616] backdrop-blur-[30px] p-3">
      <div className="text-3xl text-orange-500 mb-2"><BsBookHalf /></div>
      <div className="text-3xl font-bold mb-2 text-[#FA9C1D]">+15</div>
      <div className="text-sm text-neutral-500">تصنيف</div>
    </div>
  </div>
  <div className="w-screen -mx-4 bg-[#141414] backdrop-blur-[30px] py-16 navBorder mb-24">
    <div className="max-w-6xl mx-auto px-4 ">
      <h2 className="text-3xl font-bold mb-4 text-center">قيمنا</h2>
      <p className="text-neutral-400 mb-12 text-center">
        المبادئ التي توجه كل ما نقوم بإنشائه
      </p>

   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 w-full max-w-6xl mb-5 mt-16 ">
 
    <div className="flex flex-col justify-center items-center border-[1.5px] border-[#262626] rounded-[14px] bg-[#161616] backdrop-blur-[30px] p-3 hover:bg-[#2D1F14] hover:border-[#5D2E0F] 
              transition-all duration-300">
      <div className="text-3xl text-orange-500 mb-2 py-3"><FaBullseye /></div> 
      <div className="text-lg font-bold text-white mb-2 hover:text-[#FF6900] group">الجودة أولاً
</div>
      <div className="text-sm text-neutral-500">محتوى مدروس ومكتوب بخبرة</div>
    </div>

   
    <div className="flex flex-col justify-center items-center border-[1.5px] border-[#262626] rounded-[14px] bg-[#161616] backdrop-blur-[30px] p-3 hover:bg-[#2D1F14] hover:border-[#5D2E0F] 
              transition-all duration-300 ">
      <div className="text-3xl text-orange-500 mb-2"><FaBolt /></div>
      <div className="text-lg font-bold text-white mb-2">تركيز عملى</div>
      <div className="text-sm text-neutral-500">
أمثلة واقعية يمكنك تطبيقه اليوم</div>
    </div>

    
    <div className="flex flex-col justify-center items-center border-[1.5px] border-[#262626] rounded-[14px] bg-[#161616] backdrop-blur-[30px] p-3 hover:bg-[#2D1F14] hover:border-[#5D2E0F] 
              transition-all duration-300">
      <div className="text-3xl text-orange-500 mb-2"><FaHandshakeSimple /></div>
      <div className="text-lg font-bold text-white mb-2">المجتمع</div>
      <div className=" text-sm text-neutral-500">تعلم مع الاف المصورين</div>
    </div>

    
    <div className="flex flex-col justify-center items-center border-[1.5px] border-[#262626] rounded-[14px] bg-[#161616] backdrop-blur-[30px] p-3 hover:bg-[#2D1F14] hover:border-[#5D2E0F] 
              transition-all duration-300">
      <div className="text-3xl text-orange-500 mb-2"><FaArrowsRotate /></div>
      <div className="text-lg font-bold text-white mb-2">دائماً محدث</div>
      <div className="text-sm text-neutral-500">
أحدث الاتجاهات وأفضل الممارسات</div>
    </div>
  </div>
  </div>
</div>

<div className="w-full min-h-screen flex flex-col items-center text-center pt-24 bg-[#0D0C0A] text-white">


<div className="inline-flex items-center gap-2 mb-16 
                bg-[#25160B] backdrop-blur-[30px] borderAbout buttonRounded p-2">



  <span className="text-sm font-medium px-2 text-[#ff7b1d] ">
فريقنا  </span>
</div>
  
  <h1 className="text-5xl font-bold mb-4">
تعرف على كتابنا    <br />
   
  </h1>


  <p className="text-lg text-neutral-400  mb-6 max-w-3xl mx-auto">
  فريقنا من المصورين والكتاب ذوي الخبرة شغوفون بمشاركة معرفتهم مع المجتمع
  </p>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl mb-16 mt-16 mx-auto">
  
{data.posts.map((post) => (
  <div
    key={post.id}
    className="flex flex-col justify-center items-center border-[1.5px] border-[#262626] rounded-[14px] bg-[#161616] backdrop-blur-[30px] p-6 hover:border-[#ff7b1d] group"
  >
    <div className="w-24 h-24 rounded-full border-2 border-gray-500 overflow-hidden mb-4 group-hover:border-[#ff7b1d] transition-colors duration-300">
      <img
        src={post.author.avatar}
        alt={post.author.name}
        className="w-full h-full object-cover"
      />
    </div>

    <div className="text-xl font-bold text-white mb-1">
      {post.author.name}
    </div>

    <div className="text-sm text-[#ff7b1d] mb-3">
      {post.author.role}
    </div>

    <div className="flex gap-4 text-xl text-gray-500">
      <ul className="flex gap-2 list-none p-0">
        {[FaLinkedin, FaSquareGithub, BsTwitterX].map((Icon, index) => {

          let hoverBg = "";

          if (Icon === FaLinkedin) hoverBg = "hover:bg-blue-600";
          else if (Icon === FaSquareGithub) hoverBg = "hover:bg-gray-700";
          else if (Icon === BsTwitterX) hoverBg = "hover:bg-orange-500";

          return (
            <li
              key={index}
              className={`text-[20px] h-10 w-10 rounded-[14px] flex items-center justify-center
              bg-[#262626] transition-all duration-300 cursor-pointer
              ${hoverBg} hover:text-white`}
            >
              <Icon />
            </li>
          );
        })}
      </ul>
    </div>
  </div>
))}


</div>
</div>
  <div className="w-screen -mx-4 bg-[#F99A04] backdrop-blur-[30px] py-32 navBorder ">
    <div className="max-w-6xl mx-auto px-4 ">
      <h2 className="text-3xl font-bold mb-4 text-center">لديك أسئلة؟ دعنا نتحدث!</h2>
      <p className="text-white mb-12 text-center">
       نحب أن نسمع منك. سواء كان لديك سؤال حول محتوانا، أو تريد المساهمة، أو تريد فقط إلقاء التحية، لا تتردد في التواصل.
      </p>
      <div className="flex gap-4 mt-4 d-flex justify-content-center align-items-center">
        <button className="flex items-center gap-2 bg-[#171717] text-white px-4 py-2 rounded-3xl border[1.5px] transition-all">
          <FaEnvelope />   تواصل معنا
        </button>
<button className="flex items-center gap-2 
                   text-white 
                   border-[1.5px] border-white 
                   px-4 py-2 rounded-b-3xl
                   transition-all duration-300
                   hover:bg-white hover:text-black">
  تفصح المقالات
</button>
      </div>
  
  </div>
</div>
</div>
  )
}
