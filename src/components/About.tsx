import { assets } from '../assets/mockup/assets'
import { motion } from "motion/react"
import CompanyVideo from './CompanyVideo'
import { Link } from 'react-router-dom'
import { ROUTE } from '@/constants/routes'

type Props = {}

function About({ }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0, x: 200 }}
            transition={{ duration: 0.5 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className='flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden' id="About">
            <h1 className='text-2xl sm:text-4xl font-bold mb-2'><span className='text-primary'>About</span>
                <span className='underline underline-offset-4 decoration-1 under font-light'>Our Brand</span>
            </h1>
            <p className='text-gray-500 max-w-80 text-center mb-8'>Passionate About Properties, Dedicated to Your Vision</p>

            <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
                <img src={assets.brand_img} alt="" className='w-full sm:w-1/2 max-w-lg' />

                <div className='flex flex-col items-center md:items-start mt-10 text-gray-600'>
                    <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28'>
                        <div>
                            <p className='text-4xl font-medium text-gray-800'>10+</p>
                            <p>Years of Excellence </p>
                        </div>
                        <div>
                            <p className='text-4xl font-medium text-gray-800'>12+</p>
                            <p>Projects Completed</p>
                        </div>
                        <div>
                            <p className='text-4xl font-medium text-gray-800'>20+</p>
                            <p>Mn. Sq. Ft. Delivered</p>
                        </div>
                        <div>
                            <p className='text-4xl font-medium text-gray-800'>25+</p>
                            <p>Ongoing Projects</p>
                        </div>
                    </div>
                    <p className='mt-10 max-w-lg'>&emsp;เราให้บริการออกแบบและผลิตผ้าม่านหลากหลายประเภท เช่น ม่านตาไก่ ม่านม้วน ม่านปรับแสง มู่ลี่ และอื่น ๆ ทุกชิ้นใช้วัสดุคุณภาพเกรดพรีเมี่ยม หลากหลายสไตล์ ตอบโจทย์ทุกพื้นที่</p>
                    <p className='mt-5 mb-10 max-w-lg'>&emsp;พร้อมบริการติดตั้งวอลเปเปอร์ เฟอร์นิเจอร์ลอยตัว และอุปกรณ์ตกแต่งบ้านแบบครบวงจร ราคาย่อมเยา ผลิตเองจากโรงงาน โดยทีมงานมืออาชีพ พร้อมรับประกันความพึงพอใจ</p>
                    <Link to={ROUTE.ABOUT.replace('#','')} replace={true}>
                        <button className='btn-main-2 transition-all'>Learn More</button>
                    </Link>
                </div>
            </div>
            <CompanyVideo />
        </motion.div>
    )
}

export default About