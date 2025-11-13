import { motion } from 'motion/react'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { EyeletCurtainIcon, HorizonBlindIcon, InteriorFilmIcon, MotorSystemIcon, RollerBlindIcon, SkyLightIcon, VerticalBlindIcon, VinylTileIcon } from '@/icons/iconIndex'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import WoodenBlind from '../products/product-list/WoodenBlind'
import RollerBlind from '../products/product-list/RollerBlind'
import VerticalBlind from '../products/product-list/VerticalBlind'
import EyeletCurtain from '../products/product-list/EyeletCurtain'
import InteriorFilm from '../products/product-list/InteriorFilm'
import VinylTile from '../products/product-list/VinylTile'
import Skylight from '../products/product-list/Skylight'
import Motor from '../products/product-list/Motor'

const tabs = [
  {
    name: 'Blind',
    value: 'wooden-blinds',
    icon: HorizonBlindIcon,
    content: (
      <WoodenBlind />
    )
  },
  {
    name: 'Roller Blind',
    value: 'roller-blinds',
    icon: RollerBlindIcon,
    content: (
      <RollerBlind />
    )
  },
  {
    name: 'Vertical Blind',
    value: 'vertical-blinds',
    icon: VerticalBlindIcon,
    content: (
      <VerticalBlind />
    )
  },
  {
    name: 'Eyelet Curtain',
    value: 'eyelet-curtains',
    icon: EyeletCurtainIcon,
    content: (
      <EyeletCurtain />
    )
  },
  {
    name: 'Interior Film',
    value: 'interior-films',
    icon: InteriorFilmIcon,
    content: (
      <InteriorFilm />
    )
  },
  {
    name: 'Vinyl Tile',
    value: 'vinyl-tiles',
    icon: VinylTileIcon,
    content: (
      <VinylTile />
    )
  },
  {
    name: 'Skylight',
    value: 'skylight',
    icon: SkyLightIcon,
    content: (
      <Skylight />
    )
  },
  {
    name: 'Motor System',
    value: 'motor-system',
    icon: MotorSystemIcon,
    content: (
      <Motor />
    )
  }
]

const ProductTab = () => {
  const { product } = useParams();
  const [activeTab, setActiveTab] = useState(product);
  const navigate = useNavigate();

  useEffect(() => {
    if (product) {
      setActiveTab(product);
    }
  }, [product])

  const handleClickLink = (value: string) => {
    setActiveTab(value);
    const newPath = `/catalogue/${activeTab}`;
    navigate(newPath, { replace: true });
  };

  return (
    <div className='w-full max-w-sm md:max-w-md lg:max-w-full'>
      <Tabs value={activeTab} onValueChange={setActiveTab} className='gap-4 w-full'>
        {/* <TabsList className='flex flex-wrap sm:flex-nowrap justify-center bg-background relative rounded-none p-0 h-full'> */}
        <TabsList className='grid grid-cols-4 grid-rows-2  gap-6 w-full bg-background relative rounded-none p-0 h-full lg:grid-cols-8 lg:grid-rows-1 '>
          {tabs.map(({ icon: Icon, name, value }) => (
            <TabsTrigger
              onClick={() => handleClickLink(value)}
              key={value}
              value={value}
              className='flex flex-col items-center gap-2 px-2.5 sm:px-3 bg-transparent dark:data-[state=active]:bg-background relative z-5 rounded-none border-0 data-[state=active]:shadow-none md:whitespace-nowrap'
            >
              <Icon className="" />
              {name}
              {activeTab === value && <motion.div
                className='bg-accent-light absolute bottom-0 z-[-1] h-full w-full rounded-xl'
                layoutId='underline'
                transition={{
                  type: 'spring',
                  stiffness: 400,
                  damping: 40
                }}
              />}
            </TabsTrigger>
          ))}


        </TabsList>
          {tabs.map(tab => (
            <TabsContent key={tab.value} value={tab.value} className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-center w-full gap-4'>
              {/* Past tab content here you can delete <p> tag */}
              {tab.content}
            </TabsContent>
          ))}
      </Tabs>
    </div >
  )
}

export default ProductTab