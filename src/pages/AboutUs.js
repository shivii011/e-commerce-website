import MainImg from '../assets/about-main-img.jpg'
import { AboutData, imgData } from '../utils/AboutData'



const AboutUs = () => {
  return (
    <div>
		<div className="bg-gray-bg h-32 flex justify-between md:h-64 lg:h-96">
			<span className="text-white text-3xl font-extrabold opacity-70 m-auto self-center md:text-6xl lg:text-8xl">About Us</span>
			<img src={MainImg} alt="" className="h-32 float-right rounded-l-full md:h-64 lg:h-96"/>
		</div>

		<div className="bg-gradient-to-r from-green to-blue">
			<div className="text-center py-6 text-3xl font-extrabold opacity-70 md:text-5xl lg:text-6xl font-mainBold text-white">
				OUR STORY
			</div>
			<div className="text-center font-main px-6 text-white">
				<p className="font-mainBold">
					Global electronic component distributor and trusted supply chain partner.
				</p> <br />
				<p className="pb-6 xl:w-11/12 mx-auto">
					As a global electronic component distributor, Velocity Electronic's dynamic strategic sourcing team is trusted to support growth and customer needs for high-tech organizations that are constantly increasing the pace of innovation.
					We integrate innovative electronic component supply chain solutions to boost your bottom line and reduce cost of inventory ownership.
					We reduce or eliminate the financial impact of excess electronic component inventory and recover your capital from material loss.
				</p>
			</div>
		</div>
		<div>
			<div className='bg-white text-center py-16 px-4'>
				<div className="font-main text-green sm:text-xl">
					Reliable, integrated, innovative solutions for
				</div>
				<div className="font-mainBold text-blue text-xl sm:text-5xl pb-8">
					ELECTRONIC COMPONENTS
				</div>
				<div className="sm:flex sm:gap-4">
					{AboutData.map((data) => (
						<div key={data.id} className="bg-green text-white px-2 my-4 sm:py-4 sm:shadow-2xl">
							<div className="font-mainBold py-2 sm:text-xl">
								{data.heading}
							</div>
							<div className="font-main py-2 sm:text-lg">
								{data.desc}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
		<div>
			<div className="text-blue text-center font-mainBold text-2xl sm:text-5xl">
				MEMORABLE MENTIONS
			</div>
			<div className="xl:flex gap-12">
				{imgData.map((data) => (
					<div className="my-8 text-center px-4 xl:flex mx-auto xl:gap-8">
						<div className="w-80 mx-auto py-6 lg:w-[200px]">
							<img src={data.img} alt="" className="" />
						</div>
						<div className="xl:text-justify xl:w-[300px] xl:self-center md:w-[500px] md:mx-auto">
							<div className="font-mainBold text-green text-xl pb-4">
								{data.heading}
							</div>
							<div className="font-main text-blue">
								{data.text}
							</div>
						</div>
						
					</div>
				))}
			</div>
		</div>
	</div>

			


  )
}

export default AboutUs