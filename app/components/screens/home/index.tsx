import { Heading } from "@/components/ui/icons/Heading"
import { SubHeading } from "@/components/ui/icons/SubHeading"
import { Meta } from "@/utils/meta"
import { FC } from "react"


export const Home: FC = () => {
  return (
    <Meta title="Watch movies online"
    description="Watch MovieApp movies and TV shows online or stream right to your browser."
    >
      <Heading
        title="Watch movies online"
        className="text-gray-500 mb-8 text-xl"
      />
      <div className="my-10">
      <SubHeading title="Trending now" />
      </div>
      <div>
				<SubHeading title="Best actors" />
			</div>

    </Meta>
    
  )
}
