import { Typography,
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,} from "@material-tailwind/react"
import Image from "next/image"

export default function TabsCustom({data}) {
    return (
        <Tabs value="Cyber Intelligence & Security" orientation="vertical" placement="top" >
            <TabsHeader 
                className="bg-transparent w-[300px] mb-4 lg:mr-20" 
                indicatorProps={{
                    className: "bg-purple-900/10 shadow-none !text-gray-900",
                }}>
                {data.map(({ label, value }) => (
                <Tab key={value} value={value} className="!justify-start py-3">
                    {label}
                </Tab>
                ))}
            </TabsHeader>
            <TabsBody>
                {data.map(({ value, image }) => (
                <TabPanel key={value} value={value} className="p-0">
                    <Image src={image} key={value} width={350} height={350} />
                </TabPanel>
                ))}
            </TabsBody>
        </Tabs> 
        
    )
}