import React from "react";
import { FaPenNib } from "react-icons/fa";
import { BsBookHalf } from "react-icons/bs";
import { IoNewspaper } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import data from "../data/project.json";
import { FaBullseye } from "react-icons/fa";
import { FaSliders } from "react-icons/fa6";
import { FaMountainSun } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { FaSun } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import ImageCard from "../../components/ImageCard"
import { Container, Row, Col } from "react-bootstrap";
import photo1 from "../../src/assets/photo1.jpg";
import photo2 from "../../src/assets/photo2.jpg";
import photo3 from "../../src/assets/photo3.jpg";





export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center pt-24 bg-[#0D0C0A] text-white">

    
      <div className="inline-flex items-center gap-2 mb-16 
                      bg-[#25160B] backdrop-blur-[30px] borderAbout buttonRounded p-2">
        <span className="text-sm font-medium px-2 text-[#ff7b1d]">
          مرحباً بك في عدسة
        </span>
      </div>

      <h1 className="text-5xl font-bold text-white mb-6">
        اكتشف <span className="text-[#ff7b1d]">فن</span> التصوير الفوتوغرافي
      </h1>

      <p className="text-lg text-neutral-400 mb-6 max-w-3xl mx-auto">
        مدونة انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.
      </p>

      <div className="flex gap-4 mb-5 mt-5">
        <button className="px-8 py-3 buttonRounded bg-[#F16511] text-white">
          استكشف المقالات
        </button>
        <button className="px-8 py-3 buttonRounded border border-gray-500 text-white 
                           hover:bg-[#2C180A] hover:border-[#F16511] transition-colors duration-300">
          اعرف المزيد
        </button>
      </div>

  
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 w-full max-w-6xl mb-5">
        <div className="flex flex-col justify-center items-center border-[1.5px] border-[#262626] rounded-[14px] bg-[#161616] backdrop-blur-[30px] p-3">
          <div className="text-3xl text-orange-500 mb-2"><FaUsers /></div> 
          <div className="text-3xl font-bold mb-2 text-[#FA9C1D]">+2مليون</div>
          <div className="text-sm text-neutral-500">قارئ شهرياً</div>
        </div>
        <div className="flex flex-col justify-center items-center border-[1.5px] border-[#262626] rounded-[14px] bg-[#161616] backdrop-blur-[30px] p-3">
          <div className="text-3xl text-orange-500 mb-2"><IoNewspaper /></div>
          <div className="text-3xl font-bold mb-2 text-[#FA9C1D]">+500</div>
          <div className="text-sm text-neutral-500">مقالة منشورة</div>
        </div>
        <div className="flex flex-col justify-center items-center border-[1.5px] border-[#262626] rounded-[14px] bg-[#161616] backdrop-blur-[30px] p-3">
          <div className="text-3xl text-orange-500 mb-2"><FaPenNib /></div>
          <div className="text-3xl font-bold mb-2 text-[#FA9C1D]">+50</div>
          <div className="text-sm text-neutral-500">كاتب خبير</div>
        </div>
        <div className="flex flex-col justify-center items-center border-[1.5px] border-[#262626] rounded-[14px] bg-[#161616] backdrop-blur-[30px] p-3">
          <div className="text-3xl text-orange-500 mb-2"><BsBookHalf /></div>
          <div className="text-3xl font-bold mb-2 text-[#FA9C1D]">+15</div>
          <div className="text-sm text-neutral-500">تصنيف</div>
        </div>
      </div>


      <h2 className="w-full max-w-6xl mt-16 text-right text-3xl font-bold mb-4">
        مقالات مختارة
      </h2>

      <div className="w-full max-w-6xl flex items-center justify-between mb-2 ">
        <p className="text-neutral-400 text-right">
          محتوى منتقى لبدء رحلة تعلمك
        </p>
        <button className="px-8 py-3 rounded bg-[#F16511] text-white">
          عرض الكل
        </button>
      </div>

    
      {data.posts.slice(0, 3).map((post) => (
        <div
          key={post.id}
          className="w-full max-w-6xl mt-12 bg-[#161616] border border-dark rounded-2xl overflow-hidden flex flex-col md:flex-row mb-12"
        >
          
          <div className="w-full md:w-[516px] h-[400px] flex-shrink-0">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

       
          <div className="flex-1 p-10 flex flex-col justify-between text-right gap-6">

           
            <div className="inline-flex items-center gap-2
                            bg-[#25160B] backdrop-blur-[30px] 
                            borderAbout buttonRounded px-3 py-1 w-auto max-w-max">
              <span className="text-sm font-medium text-[#ff7b1d]">
                {post.category} · {post.readTime}
              </span>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">{post.title}</h3>
              <p className="text-neutral-400 leading-relaxed mb-6">{post.excerpt}</p>
            </div>

          
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full border-2 border-gray-500 overflow-hidden group-hover:border-[#ff7b1d] transition-colors duration-300">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-white font-medium">{post.author.name}</span>
                  <span className="text-[#A1A1A1] text-sm">{post.date}</span>
                </div>
              </div>

              <button className="px-6 py-2 text-[#F16511]">
                اقرأ المقال
              </button>
            </div>

          </div>
           
        </div>
      ))}
      
 <div className="w-screen -mx-4 bg-[#141414] backdrop-blur-[30px] py-16 navBorder mb-24 text-center">
   <div className="inline-flex items-center gap-2 mb-16 
                      bg-[#25160B] backdrop-blur-[30px] borderAbout buttonRounded p-2 ">
        <span className="text-sm font-medium px-2 text-[#ff7b1d]">
          التصنيفات
        </span>
      </div>
  <div className="max-w-6xl mx-auto px-4 text-center">
    <h2 className="text-3xl font-bold mb-4">استكشف حسب الموضوع</h2>
    <p className="text-neutral-400 mb-12">
     اعثر على محتوى مصمم حسب اهتماماتك


    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-6xl mx-auto mt-16">
  <div className="flex flex-col border-[1.5px] border-[#262626] rounded-[14px] 
                bg-[#161616] backdrop-blur-[30px] p-6 
                transition-all duration-300 group 
                hover:bg-[#F99A00] hover:border-[#F99A00] text-right">

  <div className="inline-flex items-center justify-center 
                  bg-[#25160B] backdrop-blur-[30px] 
                  p-2 w-fit mb-6 rounded-lg 
                  transition-all duration-300
                  group-hover:bg-[#FBAB33] ml-auto">
    <FaSun className="text-3xl text-orange-500 
                           transition-all duration-300
                           group-hover:text-white" />
  </div>
  <div className="text-lg font-bold text-white mb-2 
                  transition-all duration-300
                  group-hover:text-white">
    إضاءة
  </div>

  <div className="text-sm text-neutral-400 
                  transition-all duration-300
                  group-hover:text-white">
    3 مقالة
  </div>
</div>


  <div className="flex flex-col border-[1.5px] border-[#262626] rounded-[14px] 
                bg-[#161616] backdrop-blur-[30px] p-6 
                transition-all duration-300 group 
                hover:bg-[#F99A00] hover:border-[#F99A00] text-right">

  <div className="inline-flex items-center justify-center 
                  bg-[#25160B] backdrop-blur-[30px] 
                  p-2 w-fit mb-6 rounded-lg 
                  transition-all duration-300
                  group-hover:bg-[#FBAB33] ml-auto">
    <FaUser className="text-3xl text-orange-500 
                           transition-all duration-300
                           group-hover:text-white" />
  </div>
  <div className="text-lg font-bold text-white mb-2 
                  transition-all duration-300
                  group-hover:text-white">
   
بورتريه
  </div>

  <div className="text-sm text-neutral-400 
                  transition-all duration-300
                  group-hover:text-white">
    3 مقالة
  </div>
</div>


  <div className="flex flex-col border-[1.5px] border-[#262626] rounded-[14px] 
                bg-[#161616] backdrop-blur-[30px] p-6 
                transition-all duration-300 group 
                hover:bg-[#F99A00] hover:border-[#F99A00] text-right">

  <div className="inline-flex items-center justify-center 
                  bg-[#25160B] backdrop-blur-[30px] 
                  p-2 w-fit mb-6 rounded-lg 
                  transition-all duration-300
                  group-hover:bg-[#FBAB33] ml-auto">
    <FaMountainSun className="text-3xl text-orange-500 
                           transition-all duration-300
                           group-hover:text-white" />
  </div>
  <div className="text-lg font-bold text-white mb-2 
                  transition-all duration-300
                  group-hover:text-white">
   مناظر طبيعية
  </div>

  <div className="text-sm text-neutral-400 
                  transition-all duration-300
                  group-hover:text-white">
    2 مقالة
  </div>
</div>


  <div className="flex flex-col border-[1.5px] border-[#262626] rounded-[14px] 
                bg-[#161616] backdrop-blur-[30px] p-6 
                transition-all duration-300 group 
                hover:bg-[#F99A00] hover:border-[#F99A00] text-right">

  <div className="inline-flex items-center justify-center 
                  bg-[#25160B] backdrop-blur-[30px] 
                  p-2 w-fit mb-6 rounded-lg 
                  transition-all duration-300
                  group-hover:bg-[#FBAB33] ml-auto">
    <FaSliders className="text-3xl text-orange-500 
                           transition-all duration-300
                           group-hover:text-white" />
  </div>


  <div className="text-lg font-bold text-white mb-2 
                  transition-all duration-300
                  group-hover:text-white">
    تقنيات
  </div>


  <div className="text-sm text-neutral-400 
                  transition-all duration-300
                  group-hover:text-white">
    5 مقالة
  </div>

</div>
  <div className="flex flex-col border-[1.5px] border-[#262626] rounded-[14px] 
                bg-[#161616] backdrop-blur-[30px] p-6 
                transition-all duration-300 group 
                hover:bg-[#F99A00] hover:border-[#F99A00] text-right">

  <div className="inline-flex items-center justify-center 
                  bg-[#25160B] backdrop-blur-[30px] 
                  p-2 w-fit mb-6 rounded-lg 
                  transition-all duration-300
                  group-hover:bg-[#FBAB33] ml-auto">
  <FaSun className="text-3xl text-orange-500 
                           transition-all duration-300
                           group-hover:text-white" />
  </div>
  <div className="text-lg font-bold text-white mb-2 
                  transition-all duration-300
                  group-hover:text-white">
    معدات
  </div>

  <div className="text-sm text-neutral-400 
                  transition-all duration-300
                  group-hover:text-white">
    3 مقالة
  </div>
</div>
  </div>
  </div>
  </div>





   <div className="inline-flex gap-2 mb-16 
                      bg-[#25160B] backdrop-blur-[30px] borderAbout buttonRounded p-2 text-right ">
        <span className="text-sm font-medium px-2 text-[#ff7b1d] ">
          التصنيفات
        </span>
      </div>
  
      <h2 className="w-full max-w-6xl mt-16 text-right text-3xl font-bold mb-6">
       أحدث المقالات
      </h2>

      <div className="w-full max-w-6xl flex items-center justify-between mb-6 ">
        <p className="text-neutral-400 text-right">
محتوى جديد طازج من المطبعة

        </p>
        <button className="px-8 py-3 rounded text-[#F16511]">
عرض جميع المقالات      
  </button>
      </div>
<Container className="py-5">
  <Row className="g-5">
    {data.posts
      .filter(post => [4, 5, 6].includes(post.id)) 
      .map(post => (
        <Col md={4} key={post.id}>
          <ImageCard project={post} />
        </Col>
      ))
    }
  </Row>
</Container>
   



      <div className=" bg-[#141414] backdrop-blur-[30px] py-20 px-20 navBorder mb-20 buttonRounded mt-12">
  <div className="max-w-6xl mx-auto px-4 text-center">
   
   
                    <div className="flex justify-center mb-6">
      <div className="h-12 w-12 bg-[#F74F00] text-white rounded-lg flex items-center justify-center text-xl">
        <FaEnvelope />
      </div>
    </div>
  
    <h2 className="text-3xl font-bold mb-4"> اشترك في
      <span className="text-[#FAAA20]"> نشرتنا الإخبارية
 </span>
    </h2>

    <p className="text-neutral-400 mb-10 max-w-2xl mx-auto ">
      احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك الإلكتروني
    </p>


    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 mt-12 ">
      
      <input
        type="email"
        placeholder="أدخل بريدك الإلكتروني"
        className="w-full sm:w-[350px] px-4 py-3 rounded-lg 
                   bg-[#161616] border border-[#262626] 
                   text-white placeholder-neutral-500 
                   focus:outline-none focus:border-[#F16511] transition-all duration-300"
      />

      <button className="px-8 py-3 rounded bg-[#F16511] text-white 
                         hover:bg-[#ff7b1d] transition-all duration-300">
        اشترك الآن
      </button>

    </div>

 
    <div className="flex flex-col items-center gap-4">

    
      <div className="flex -space-x-3">
        <img
          src={photo1}
          className="w-10 h-10 rounded-full border-2 border-[#141414]"
        />
        <img
          src={photo2}
          className="w-10 h-10 rounded-full border-2 border-[#141414]"
        />
        <img
          src={photo3}
          className="w-10 h-10 rounded-full border-2 border-[#141414]"
        />
        <p className="text-neutral-400 text-sm text-center">
        انضم لـ <span className="text-white font-semibold"> +10,000 مصور  </span>
        بدون إزعاج ·    إلغاء الاشتراك في أي وقت
      </p>
      </div>

      

    </div>

  </div>
</div>


    </div>
    
  );
}
