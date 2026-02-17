import { Container, Row, Col } from 'react-bootstrap'
import { FaYoutube, FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {



  return (
    
       <footer className="text-sm text-neutral-500">
   
      <div className="bg-[#1a1a18] backdrop-blur-[30px] navBorder p-6">
        <Container>
          <Row className="gx-5">
          
            <Col md={3}>
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 bg-[#F74F00] text-white rounded flex items-center justify-center font-bold">
                  <h4>ع</h4>
                </div>
                <h4 className="text-white m-0">عدسه</h4>
              </div>

              <p className="mt-3 mb-4">
                مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار
                المحترفين ونصائح عملية لتطوير مهاراتكم
              </p>

              <ul className="flex gap-2 list-none p-0">
                {[FaYoutube, FaLinkedin, FaSquareGithub, BsTwitterX].map(
                  (Icon, index) => (
                    <li
                      key={index}
                      className="text-[20px] h-10 w-10 border border-[#181818]
                                 rounded-[14px] flex items-center justify-center
                                 bg-[#161616] backdrop-blur-[30px]
                                 transition-all duration-300
                                 hover:bg-[#F74F00] hover:text-white hover:scale-110 cursor-pointer"
                    >
                      <Icon />
                    </li>
                  )
                )}
              </ul>
            </Col>

         
            <Col md={3}>
              <h4 className="text-white mb-3">استكشف</h4>
              <p className="hover:text-[#F74F00] transition cursor-pointer">
                الرئيسية
              </p>
              <p className="hover:text-[#F74F00] transition cursor-pointer">
                المدونة
              </p>
              <p className="hover:text-[#F74F00] transition cursor-pointer">
                من نحن
              </p>
            </Col>

          
            <Col md={3}>
              <h4 className="text-white mb-3">التصنيفات</h4>
              <p className="hover:text-[#F74F00] transition cursor-pointer">
                إضاءة
              </p>
              <p className="hover:text-[#F74F00] transition cursor-pointer">
                مناظر طبيعية
              </p>
              <p className="hover:text-[#F74F00] transition cursor-pointer">
                تقنيات
              </p>
            </Col>

         
            <Col md={3}>
              <h4 className="text-white mb-3">ابقى على اطلاع</h4>
              <p>اشترك للحصول على أحدث المقالات والتحديثات</p>

              <input
                type="email"
                placeholder="ادخل بريدك الالكترونى"
                className="w-full mt-3 bg-[#161616] backdrop-blur-[30px]
                           border border-[#262626] inputFiled
                           px-4 py-3 text-neutral-400 outline-none
                           focus:border-[#F74F00] transition"
              />

              <button
                className="w-full mt-3 bg-[#F74F00] text-white
                           px-8 py-4 text-sm buttonRounded
                           hover:opacity-90 transition"
              >
                اشتراك
              </button>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="bg-[#1a1a18] backdrop-blur-[30px] ">
        <Container>
          <div className="flex justify-between items-center p-4 flex-wrap gap-3">
            <p>
              © 2026 عدسة
              <FontAwesomeIcon
                icon={faHeart}
                className="text-orange-500 mx-1"
              />
              جميع الحقوق محفوظة.
            </p>

            <div className="flex gap-4">
              <p className="hover:text-[#F74F00] transition cursor-pointer">
                سياسة الخصوصية
              </p>
              <p className="hover:text-[#F74F00] transition cursor-pointer">
                شروط الخدمة
              </p>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  )
}
