import MainImg from '../assets/about-main-img.jpg'
import img2 from '../assets/contact-bg.jpg'
import headphone from '../assets/yellow-headphone.png'
import devices from '../assets/devices.jpg'



const AboutUs = () => {
  return (
    <div>
		<div className="bg-gray-bg h-96 flex justify-between">
			<span className="text-white text-8xl font-bold opacity-70 m-auto self-center">About Us</span>
			<img src={MainImg} alt="" className="h-96 float-right rounded-l-full"/>
		</div>

		<div className="bg-gold-web-golden">
			<div className="text-center py-8 text-6xl font-extrabold opacity-70">OUR STORY</div>
			<div className="text-center px-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate velit numquam hic ut maxime aut quidem tempore a, molestias officia laudantium. Ad illo veniam expedita quis obcaecati libero optio quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus repellat enim asperiores quas officiis a, soluta eius voluptates quam magnam consequatur, doloremque doloribus sit quia commodi tempora. Eveniet, cupiditate aspernatur? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis voluptatem reiciendis ratione fugiat veritatis consequuntur! Assumenda ex a, facilis voluptatibus repudiandae harum, praesentium officia ipsam, delectus nam qui architecto alias.</div>
			
			<div>
				<div className="flex flex-none p-8">
					<div className="w-4/5 basis-1/3"><img src={img2} alt="" className="rounded-l-full"/></div>
					<div className="bg-gray-bg text-white text-center p-8 text-sm basis-2/3">
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ea tempora delectus ad a quia illo atque, hic maxime itaque amet adipisci incidunt ratione earum magnam? Deleniti corporis similique dolorum.
						</p> <br></br>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum reprehenderit suscipit maxime perspiciatis repellendus, dicta optio culpa voluptatum quidem repudiandae odit nemo. Tempore, mollitia nemo impedit quaerat nam nesciunt aspernatur.
						</p>
					</div>
				</div>
				<div className="flex px-8 pb-8 justify-around">
					<span className="w-1/2 bg-black text-white p-4 opacity-75">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, eos temporibus sit excepturi velit voluptatem provident autem animi eligendi esse necessitatibus magni, saepe illo quae id consectetur non! Laborum, tenetur. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quod facilis dolore vitae nihil assumenda ipsum non obcaecati quae fugit ipsam sit, nemo, porro totam, voluptatum natus dolor est voluptatem!</span>
					<img src={devices} alt="" className="w-64 rounded-full"/>
				</div>

				<div className="bg-black text-gold-web-golden flex p-8 justify-around">
					<img src={headphone} alt="" className="w-48" />
					<span className="w-2/3 font-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex veritatis, praesentium esse harum officiis deleniti velit vel repellat expedita molestias ipsam quia. Obcaecati aperiam saepe beatae asperiores consequuntur placeat laboriosam? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto repellat iste magnam error ad quia molestiae aliquid rem deleniti accusantium, ipsa hic, vitae consequuntur enim quisquam velit libero sit necessitatibus.</span>

				</div>
			</div>

		</div>
        
      
    </div>
  )
}

export default AboutUs
