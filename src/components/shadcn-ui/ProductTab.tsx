import { motion } from 'motion/react'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { EyeletCurtain, HorizonBlind, InteriorFilm, MotorSystem, RollerBlind, SkyLight, VerticalBlind, VinylTile } from '@/icons/iconIndex'
import React from 'react'

const tabs = [
  {
    name: 'Blind',
    value: 'blind',
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
    value: 'rollerBlind',
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
    value: 'verticalBlind',
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
    value: 'eyeletCurtain',
    icon: EyeletCurtain,
    content: (
      <>
        <span className='text-foreground font-semibold'>Product</span> Text here
      </>
    )
  },
  {
    name: 'Interior Film',
    value: 'interiorFilm',
    icon: InteriorFilm,
    content: (
      <>
        <span className='text-foreground font-semibold'>Product</span> Text here
      </>
    )
  },
  {
    name: 'Vinyl Tile',
    value: 'vinylTile',
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
    value: 'motorSystem',
    icon: MotorSystem,
    content: (
      <>
        <span className='text-foreground font-semibold'>Product</span> Text here
      </>
    )
  }
]

const ProductTab = () => {
  const [activeTab, setActiveTab] = React.useState('blind')
  const tabRefs = React.useRef<(HTMLButtonElement | null)[]>([])
  const [underlineStyle, setUnderlineStyle] = React.useState({ left: 0, width: 0 })

  React.useLayoutEffect(() => {
    const activeIndex = tabs.findIndex(tab => tab.value === activeTab)
    const activeTabElement = tabRefs.current[activeIndex]

    if (activeTabElement) {
      const { offsetLeft, offsetWidth } = activeTabElement

      setUnderlineStyle({
        left: offsetLeft,
        width: offsetWidth
      })
    }
  }, [activeTab])

  return (
    <div className='w-full max-w-sm md:max-w-md lg:max-w-full'>
      <Tabs value={activeTab} onValueChange={setActiveTab} className='gap-4 w-full'>
        {/* <TabsList className='flex flex-wrap sm:flex-nowrap justify-center bg-background relative rounded-none p-0 h-full'> */}
        <TabsList className='grid grid-cols-4 grid-rows-2  gap-6 w-full bg-background relative rounded-none p-0 h-full lg:grid-cols-8 lg:grid-rows-1 '>
            {tabs.map(({ icon: Icon, name, value }, index) => (
              <TabsTrigger
                key={value}
                value={value}
                ref={el => {
                  tabRefs.current[index] = el
                }}
                className='flex flex-col items-center gap-2 px-2.5 sm:px-3 bg-transparent dark:data-[state=active]:bg-background relative z-5 rounded-none border-0 data-[state=active]:shadow-none'
              >
                <Icon className="" />
                {name}
              </TabsTrigger>
            ))}

          <motion.div
            className='bg-primary absolute bottom-0 z-5 h-0.5'
            layoutId='underline'
            style={{
              left: underlineStyle.left,
              width: underlineStyle.width
            }}
            transition={{
              type: 'spring',
              stiffness: 400,
              damping: 40
            }}
          />
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