import MainImg from '../assets/about-main-img.jpg'
import img2 from '../assets/contact-bg.jpg'
import headphone from '../assets/yellow-headphone.png'
import devices from '../assets/devices.jpg'



const AboutUs = () => {
  return (
    <div>
		{/* <div className="bg-gray-bg h-96 flex justify-between">
			<span className="text-white text-8xl font-bold opacity-70 m-auto self-center">About Us</span>
			<img src={MainImg} alt="" className="h-96 float-right rounded-l-full"/>
		</div> */}
		<div className="bg-gray-bg h-32 flex justify-between md:h-64 lg:h-96">
			<span className="text-white text-3xl font-bold opacity-70 m-auto self-center md:text-6xl lg:text-8xl">About Us</span>
			<img src={MainImg} alt="" className="h-32 float-right rounded-l-full md:h-64 lg:h-96"/>
		</div>

		<div className="bg-gold-web-golden">
			<div className="text-center py-8 text-3xl font-extrabold opacity-70 md:text-5xl lg:text-6xl">OUR STORY</div>
			<div className="text-center px-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate velit numquam hic ut maxime aut quidem tempore a, molestias officia laudantium. Ad illo veniam expedita quis obcaecati libero optio quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus repellat enim asperiores quas officiis a, soluta eius voluptates quam magnam consequatur, doloremque doloribus sit quia commodi tempora. Eveniet, cupiditate aspernatur? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis voluptatem reiciendis ratione fugiat veritatis consequuntur! Assumenda ex a, facilis voluptatibus repudiandae harum, praesentium officia ipsam, delectus nam qui architecto alias.</div>
			
			<div>
				<div className="lg:flex lg:flex-none p-8">
					<div className="lg:w-4/5 lg:basis-1/3"><img src={img2} alt="" className="lg:rounded-l-full"/></div>
					<div className="bg-gray-bg text-white text-center p-8 text-sm basis-2/3">
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ea tempora delectus ad a quia illo atque, hic maxime itaque amet adipisci incidunt ratione earum magnam? Deleniti corporis similique dolorum.
						</p> <br></br>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum reprehenderit suscipit maxime perspiciatis repellendus, dicta optio culpa voluptatum quidem repudiandae odit nemo. Tempore, mollitia nemo impedit quaerat nam nesciunt aspernatur.
						</p>
					</div>
				</div>
				<div className="md:flex px-8 pb-8 md:justify-around">
					<div className="md:w-1/2 bg-black text-white p-4 opacity-75 text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae eligendi minus exercitationem eum illo consectetur! Tempora vero provident nisi facilis quidem suscipit ad, amet totam explicabo, excepturi illo fugit modi.</div>
					<img src={devices} alt="" className="md:w-64 md:rounded-full drop-shadow-md"/>
				</div>

				<div className="bg-black text-gold-web-golden lg:flex p-8 lg:justify-around text-center">
					<img src={headphone} alt="" className="w-48 mx-auto" />
					<span className="w-2/3 font-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex veritatis, praesentium esse harum officiis deleniti velit vel repellat expedita molestias ipsam quia. Obcaecati aperiam saepe beatae asperiores consequuntur placeat laboriosam? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto repellat iste magnam error ad quia molestiae aliquid rem deleniti accusantium, ipsa hic, vitae consequuntur enim quisquam velit libero sit necessitatibus.</span>
				</div>
			</div>
		</div>
    </div>
  )
}

export default AboutUs