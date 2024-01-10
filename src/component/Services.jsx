import React from 'react'
import './css/service.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import { Autoplay, EffectCube, Pagination } from 'swiper/modules';
import tank1 from '../assets/hyd.JPG'
import tank2 from '../assets/bihar.jpeg'
import plant1 from '../assets/pipeline.jpeg'
import plant2 from '../assets/pipeline1.jpeg'
import structure2 from '../assets/structure2.JPG'
import man1 from '../assets/man1.jpeg'
import man2 from '../assets/man2.jpeg'
import equip1 from '../assets/equip.jpeg'
import pip1 from '../assets/pipe1.jpeg'
import pip2 from '../assets/pipe2.jpeg'
import pip3 from '../assets/pipe3.jpeg'

function Services() {
  return (
    <div className="container service-div">
        <div className="row service-row">
            <div className="col-md-12 col-lg-12 col-sm-12">
                <div className="ribbon">
                <div className="ribbon-stitches-top"></div>
                <div className="ribbon-content"><p><b>10 Years Of Excellence In Mechanic Field</b></p></div>
                <div className="ribbon-stitches-bottom"></div>
                </div>

            </div>
            <div className="col-md-12 col-lg-12 col-sm-12">
            <div className="loader2">
                <div className="blackhole">
                    <div className="blackhole-circle"></div>
                    <div className="blackhole-disc"></div>
                </div>

                <div className="curve">
                    <svg viewBox="0 0 500 500">
                    <path id="loading" d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97"></path>
                    <text width="400">
                        <textPath href="#loading">
                        Atthi Engineering Works
                        </textPath>
                        
                    </text>
                    </svg>
                </div>
                </div>
                
            </div>
            
        </div>
        <div className="row stick1">
            <center>
                <h1 className='mb-5'>Our Services</h1>
            </center>
            <div className="ser col-md-4 col-lg-4 col-sm-12  mb-5">
                <>
                <Swiper
                    effect={'cube'}
                    grabCursor={true}
                    cubeEffect={{
                    shadow: true,
                    slideShadows: true,
                    shadowOffset: 20,
                    shadowScale: 0.94,
                    }}
                    loop = {true}
                    autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                    }}
                    pagination={true}
                    modules={[EffectCube, Pagination , Autoplay]}
                    className="mySwiper swiper1"
                >
                    <SwiperSlide>
                    <img src={tank1}  alt="tank1"/>
                    </SwiperSlide>
                    <SwiperSlide>
                    <img src={tank2}  alt="tank2"/>
                    </SwiperSlide>
                    <SwiperSlide>
                    <img src={tank1}  alt="tank3"/>
                    </SwiperSlide>
                    <SwiperSlide>
                    <img src={tank2}  alt="tank4"/>
                    </SwiperSlide>
                </Swiper>
                </>
            </div>
            <div className="ser col-md-8 col-lg-8 col-sm-12  mb-5">
            <center>
                <h1 className='mt-3 mb-3 text-secondary'>Tankage</h1>
            </center>
                <i>At ATTHI ENGINEERING WORKS, our "Tanking" services encompass the design and construction of reliable and robust structures for the containment of various liquids and gases. We specialize in creating customized tanking solutions that prioritize safety, durability, and efficiency.</i>
                <ul>
                    <li><h4>Liquid Storage Tanks:</h4>Our liquid storage tanks are meticulously designed and constructed to meet the diverse needs of industries. Whether it's water, chemicals, or other industrial liquids, ATTHI ENGINEERING WORKS provides tailored solutions for the secure containment of liquids.</li>
                    <li><h4>Gas Storage Tanks:
                    </h4>For industries requiring specialized gas storage solutions, our Gas Storage Tanks are engineered with precision. We understand the unique requirements for storing gases and design our tanks to ensure safety, compliance, and efficient containment.</li>
                    <li><h4>Customized Tank Solutions:</h4>Our engineering team collaborates closely with clients to understand their specific needs, ensuring that the tanking solutions align seamlessly with their operational demands.</li>
                    <li><h4>Structural Integrity:</h4>The structural integrity of our tanks is a top priority. ATTHI ENGINEERING WORKS utilizes advanced materials and engineering techniques to ensure that our tanks are not only durable but also capable of withstanding environmental conditions and external pressures.</li>
                </ul>
            </div>
            
            <br /><br />
            <div className="ser col-md-4 col-lg-4 col-sm-12  mb-5">
                <>
                <Swiper
                    effect={'cube'}
                    grabCursor={true}
                    cubeEffect={{
                    shadow: true,
                    slideShadows: true,
                    shadowOffset: 20,
                    shadowScale: 0.94,
                    }}
                    loop = {true}
                    autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                    }}
                    pagination={true}
                    modules={[EffectCube, Pagination , Autoplay]}
                    className="mySwiper swiper1"
                >
                    <SwiperSlide>
                    <img src={structure2} alt='str1'/>
                    </SwiperSlide>
                    <SwiperSlide>
                    <img src={structure2} alt='str2'/>
                    </SwiperSlide>
                    <SwiperSlide>
                    <img src={structure2} alt='str3'/>
                    </SwiperSlide>
                    <SwiperSlide>
                    <img src={structure2} alt='str4'/>
                    </SwiperSlide>
                </Swiper>
                </>
            </div>
            <div className="ser col-md-8 col-lg-8 col-sm-12  mb-5">
            <center>
                <h1 className='mt-3 mb-3 text-secondary'>Structurals</h1>
            </center>
                <i>At ATTHI ENGINEERING WORKS, Our commitment to engineering excellence and reliability positions us as a trusted partner in delivering structural solutions that stand the test of time. Here's an insight into our Structurals services:</i>
                <ul>
                    <li><h4>Precision in Design and Fabrication:</h4>ATTHI ENGINEERING WORKS places a strong emphasis on precision in the design and fabrication of structural components. Whether it's for industrial plants, commercial buildings, or specialized facilities, our team ensures that each structural element is meticulously crafted to meet the specific requirements of the project.</li>
                    <li><h4>Durability and Strength:
                    </h4>Our Structurals services prioritize durability and strength, utilizing high-quality materials and advanced engineering techniques to guarantee the longevity and reliability of the structures we build.</li>
                    <li><h4>Versatility in Applications:</h4>Our expertise in Structurals extends to a wide range of applications, from supporting heavy machinery in manufacturing plants to constructing frameworks for complex industrial facilities.</li>
                    <li><h4>Engineering to Industry Standards:</h4>We ensure compliance with relevant codes and regulations, providing our clients with the assurance that our solutions meet or exceed the required safety and performance criteria.</li>
                </ul>
            </div>
            
            <div className="ser col-md-4 col-lg-4 col-sm-12  mb-5">
                <>
                <Swiper
                    effect={'cube'}
                    grabCursor={true}
                    cubeEffect={{
                    shadow: true,
                    slideShadows: true,
                    shadowOffset: 20,
                    shadowScale: 0.94,
                    }}
                    loop = {true}
                    autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                    }}
                    pagination={true}
                    modules={[EffectCube, Pagination , Autoplay]}
                    className="mySwiper swiper1"
                >
                    <SwiperSlide>
                    <img src={man1} alt='manpower1'/>
                    </SwiperSlide>
                    <SwiperSlide>
                    <img src={man2} alt='manpower2'/>
                    </SwiperSlide>
                    <SwiperSlide>
                    <img src={man1} alt='manpower3'/>
                    </SwiperSlide>
                    <SwiperSlide>
                    <img src={man2} alt='manpower4'/>
                    </SwiperSlide>
                </Swiper>
                </>
            </div>
            <div className="ser col-md-8 col-lg-8 col-sm-12  mb-5">
            <center>
                <h1 className='mt-3 mb-3 text-secondary'>Manpower Supply</h1>
            </center>
                <i>At ATTHI ENGINEERING WORKS, Our "Manpower Supply" service is crafted to provide our clients with a skilled and adaptable workforce, ensuring that your projects are executed with the highest level of proficiency.</i>
                <ul>
                    <li><h4>Skilled Workforce:</h4>ATTHI ENGINEERING WORKS prides itself on the ability to supply a skilled and highly trained workforce for various projects across industries. Whether your needs include engineering, fabrication, installation, or project management, our skilled professionals are equipped to meet the unique demands of your project.</li>
                    <li><h4>Adaptability and Flexibility:
                    </h4>Understanding the dynamic nature of projects, our Manpower Supply services are designed to be adaptable and flexible.</li>
                    <li><h4>Industry Expertise:</h4> From engineers and technicians to project managers and safety professionals, ATTHI ENGINEERING WORKS supplies personnel who bring a wealth of knowledge to the table. This expertise is essential for addressing the specific challenges of your industry.</li>
                    <li><h4>Project-Specific Training:</h4>To ensure that our workforce aligns seamlessly with the unique requirements of your project, we provide project-specific training.</li>
                </ul>
            </div>
            
            <div className="ser col-md-4 col-lg-4 col-sm-12  mb-5">
                <>
                <Swiper
                    effect={'cube'}
                    grabCursor={true}
                    cubeEffect={{
                    shadow: true,
                    slideShadows: true,
                    shadowOffset: 20,
                    shadowScale: 0.94,
                    }}
                    loop = {true}
                    autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                    }}
                    pagination={true}
                    modules={[EffectCube, Pagination , Autoplay]}
                    className="mySwiper swiper1"
                >
                    <SwiperSlide>
                    <img src={equip1} alt='equip1'/>
                    </SwiperSlide>
                    <SwiperSlide>
                    <img src={equip1} alt='equip2'/>
                    </SwiperSlide>
                    <SwiperSlide>
                    <img src={equip1} alt='equip3'/>
                    </SwiperSlide>
                    <SwiperSlide>
                    <img src={equip1} alt='equip4'/>
                    </SwiperSlide>
                </Swiper>
                </>
            </div>
            <div className="ser col-md-8 col-lg-8 col-sm-12  mb-5">
            <center>
                <h1 className='mt-3 mb-3 text-secondary'>Equipment Erection</h1>
            </center>
                <i>At ATTHI ENGINEERING WORKS, our prowess in "Equipment Erection" goes beyond mere assembly. We specialize in the seamless installation and erection of complex industrial equipment, ensuring precision, safety, and operational excellence. </i>
                <ul>
                    <li><h4>Precision Erection Services:</h4>Our team of skilled professionals brings a wealth of experience to the table, ensuring that each piece of equipment is erected with meticulous attention to detail and in accordance with industry standards.</li>
                    <li><h4>Seamless Assembly:
                    </h4>From heavy machinery to intricate industrial equipment, our Equipment Erection services encompass the seamless assembly of components. We take pride in our ability to ensure that every part fits precisely, optimizing the overall functionality and reliability of the equipment.</li>
                    <li><h4>Adherence to Timelines:</h4>Our Equipment Erection services are designed to meet project schedules, ensuring that equipment is erected efficiently, contributing to the overall project timeline.</li>
                    <li><h4>Safety Protocols:</h4>Safety is a non-negotiable aspect of our Equipment Erection services. Our team follows rigorous safety protocols to create a secure working environment during the erection process. </li>
                </ul>
            </div>
            <div className="ser col-md-4 col-lg-4 col-sm-12  mb-5">
                <>
                <Swiper
                    effect={'cube'}
                    grabCursor={true}
                    cubeEffect={{
                    shadow: true,
                    slideShadows: true,
                    shadowOffset: 20,
                    shadowScale: 0.94,
                    }}
                    loop = {true}
                    autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                    }}
                    pagination={true}
                    modules={[EffectCube, Pagination , Autoplay]}
                    className="mySwiper swiper1"
                >
                    <SwiperSlide>
                    <img src={pip1} alt="pipe1"/>
                    </SwiperSlide>
                    <SwiperSlide>
                    <img src={pip2} alt="pipe2"/>
                    </SwiperSlide>
                    <SwiperSlide>
                    <img src={pip3} alt="pipe3"/>
                    </SwiperSlide>
                    <SwiperSlide>
                    <img src={pip2}  alt="pipe4"/>
                    </SwiperSlide>
                </Swiper>
                </>
            </div>
            <div className="ser col-md-8 col-lg-8 col-sm-12  mb-5">
            <center>
                <h1 className='mt-3 mb-3 text-secondary'>Piping</h1>
            </center>
                <i>At ATTHI ENGINEERING WORKS, our expertise in "Piping" extends across a diverse spectrum of applications, from intricate high-pressure systems to general piping solutions. We specialize in the design, fabrication, and installation of piping systems that meet the highest industry standards.</i>
                <ul>
                    <li><h4>High-Pressure Piping Excellence:</h4>ATTHI ENGINEERING WORKS is a recognized leader in the field of high-pressure piping, particularly in specialized environments like atomic plants. Our team possesses the skills and knowledge needed to design, fabricate, and install high-pressure piping systems with precision and reliability.</li>
                    <li><h4>Diverse Piping Solutions:
                    </h4>Beyond high-pressure systems, we offer a wide range of piping solutions tailored to various industries. Whether for process industries, manufacturing, or infrastructure, our Piping services cover a spectrum of applications, demonstrating our versatility and adaptability.</li>
                    <li><h4>Materials Expertise:</h4>ATTHI ENGINEERING WORKS leverages materials expertise to select the most suitable options for each application, ensuring resistance to corrosion, durability, and compliance with industry standards.</li>
                    <li><h4>Efficient Flow Design:</h4>Our engineers employ advanced design principles to optimize flow patterns, minimize pressure drops, and enhance the overall efficiency of the piping systems we install.</li>
                </ul>
            </div>
            <div className="ser col-md-4 col-lg-4 col-sm-12  mb-5">
                <>
                <Swiper
                    effect={'cube'}
                    grabCursor={true}
                    cubeEffect={{
                    shadow: true,
                    slideShadows: true,
                    shadowOffset: 20,
                    shadowScale: 0.94,
                    }}
                    loop = {true}
                    autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                    }}
                    pagination={true}
                    modules={[EffectCube, Pagination , Autoplay]}
                    className="mySwiper swiper1"
                >
                    <SwiperSlide>
                    <img src={plant1} alt='plant1'/>
                    </SwiperSlide>
                    <SwiperSlide>
                    <img src={plant2} alt='plant2'/>
                    </SwiperSlide>
                    <SwiperSlide>
                    <img src={plant1} alt='plant3'/>
                    </SwiperSlide>
                    <SwiperSlide>
                    <img src={plant2} alt='plant4'/>
                    </SwiperSlide>
                </Swiper>
                </>
            </div>
            
            <div className="ser col-md-8 col-lg-8 col-sm-12  mb-5">
            <center>
                <h1 className='mt-3 mb-3 text-secondary'>Pipeline Installation Service</h1>
            </center>
                <i>Our expertise in pipeline installation spans various industries, delivering reliable solutions that stand the test of time. Here's a detailed overview of our Pipeline Installation Service:</i>
                <ul>
                    <li><h4>Meticulous Planning and Design:</h4>Our Pipeline Installation Service begins with meticulous planning and design. Our team of experts thoroughly evaluates project requirements, conducts site assessments, and develops a comprehensive installation plan.</li>
                    <li><h4>Versatile Application Expertise:</h4>ATTHI ENGINEERING WORKS brings versatile application expertise to every pipeline installation project. Whether it's for transporting liquids, gases, or chemicals, our installation services cater to the unique needs of diverse industries, including manufacturing, energy, and infrastructure.</li>
                    <li><h4>Quality Material Selection:</h4>Our experienced team carefully selects high-quality materials, considering factors such as corrosion resistance, durability, and compliance with industry standards.</li>
                    <li><h4>Efficient Construction and Installation:</h4>Our skilled technicians execute pipeline installation with precision and efficiency.</li>
                </ul>
            </div>
            
        </div>
        <br /> <br /> <br />
    </div>
  )
}

export default Services
