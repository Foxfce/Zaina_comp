import { motion } from 'motion/react'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { EyeletCurtain, HorizonBlind, InteriorFilm, MotorSystem, RollerBlind, SkyLight, VerticalBlind, VinylTile } from '@/icons/iconIndex'
import React, { useEffect } from 'react'
import {  useParams } from 'react-router-dom'

const tabs = [
  {
    name: 'Blind',
    value: 'wooden-blinds',
    icon: HorizonBlind,
    content: (
      <>
        <span className='text-foreground font-semibold'>Surprise!</span> Here&apos;s something unexpected—a fun fact, a
        quirky tip, or a daily challenge. Come back for a new surprise every day!
      </>
    )
  },
  {
    name: 'Roller Blind',
    value: 'roller-blinds',
    icon: RollerBlind,
    content: (
      <>
        <span className='text-foreground font-semibold'>Surprise!</span> Here&apos;s something unexpected—a fun fact, a
        quirky tip, or a daily challenge. Come back for a new surprise every day!
      </>
    )
  },
  {
    name: 'Vertical Blind',
    value: 'vertical-blinds',
    icon: VerticalBlind,
    content: (
      <>
        <span className='text-foreground font-semibold'>Surprise!</span> Here&apos;s something unexpected—a fun fact, a
        quirky tip, or a daily challenge. Come back for a new surprise every day!
      </>
    )
  },
  {
    name: 'Eyelet Curtain',
    value: 'eyelet-curtains',
    icon: EyeletCurtain,
    content: (
      <>
        <span className='text-foreground font-semibold'>Product</span> Text here
      </>
    )
  },
  {
    name: 'Interior Film',
    value: 'interior-films',
    icon: InteriorFilm,
    content: (
      <>
        <span className='text-foreground font-semibold'>Product</span> Text here
      </>
    )
  },
  {
    name: 'Vinyl Tile',
    value: 'vinyl-tiles',
    icon: VinylTile,
    content: (
      <>
        <span className='text-foreground font-semibold'>Product</span> Text here
      </>
    )
  },
  {
    name: 'Skylight',
    value: 'skylight',
    icon: SkyLight,
    content: (
      <>
        <span className='text-foreground font-semibold'>Product</span> Text here
      </>
    )
  },
  {
    name: 'Motor System',
    value: 'motor-system',
    icon: MotorSystem,
    content: (
      <>
        <span className='text-foreground font-semibold'>Product</span> Text here
      </>
    )
  }
]

const ProductTab = () => {
  const productLink = useParams();
  const [activeTab, setActiveTab] = React.useState(productLink.product);

  useEffect(()=>{
    setActiveTab(productLink.product);
  },[productLink])

  const handleClickLink = () => {

  };

  return (
    <div className='w-full max-w-sm md:max-w-md lg:max-w-full'>
      <Tabs value={activeTab} onValueChange={setActiveTab} className='gap-4 w-full'>
        {/* <TabsList className='flex flex-wrap sm:flex-nowrap justify-center bg-background relative rounded-none p-0 h-full'> */}
        <TabsList className='grid grid-cols-4 grid-rows-2  gap-6 w-full bg-background relative rounded-none p-0 h-full lg:grid-cols-8 lg:grid-rows-1 '>
          {tabs.map(({ icon: Icon, name, value }) => (
              <TabsTrigger
                onClick={handleClickLink}
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
          <TabsContent key={tab.value} value={tab.value}>
            {/* Past tab content here you can delete <p> tag */}
            <p className='text-muted-foreground text-sm'>{tab.content}</p>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

export default ProductTab