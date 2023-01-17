import Link from "next/link";
import styles from "./../../styles/Hero.module.css";

function Hero() {
	return (
		<div className={`${styles.bg} hero min-h-screen bg-base-200`} id="home">
			<div
				className="hero min-h-screen"
				style={{
					backgroundImage: `url("https://placeimg.com/1000/800/arch")`,
				}}
			>
				<div className="hero-overlay bg-opacity-60"></div>
				<div className="hero-content text-center text-neutral-content">
					<div className="max-w-md"></div>
				</div>
			</div>

			<div className="hero-content text-center ">
				<div className="max-w-6xl">
					<h1 className="text-6xl font-bold text-white">
						Join your hands together. Not to beg, but to welcome new
						opportunities!
					</h1>

					<div className="flex justify-center uppercase my-12 font-medium text-sm text-[#9F01FF] border-2 mx-auto w-fit rounded-xl border-white backdrop-blur-md bg-white/30">
						<div className="m-4">
							<div className="inline-block rounded-xl bg-[#9F01FF] px-4 py-3 text-center text-base font-extrabold tracking-wider uppercase text-white mb-3 w-56">
								Employer
							</div>
							<ul className="menu bg-base-100 w-56 p-2 rounded-box">
								<li>
									<Link href="/candidates">
										Available candidates
									</Link>
								</li>
								<li>
									<Link href="/jobs/post">Post New Job</Link>
								</li>
							</ul>
						</div>
						<div className="m-4">
							<div className="inline-block rounded-xl bg-[#9F01FF] px-4 py-3 text-center text-base font-extrabold tracking-wider uppercase text-white mb-3 w-56">
								Job Seeker
							</div>
							<ul className="menu bg-base-100 w-56 p-2 rounded-box">
								<li>
									<Link href="/user/register">Register</Link>
								</li>
								<li>
									<Link href="/#categories">Apply Now</Link>
								</li>
							</ul>
						</div>
					</div>
					<Link
						href="/#categories"
						className="btn btn-wide rounded-full text-gray-600 bg-white border-white hover:bg-white hover:border-white font-bold text-lg"
					>
						Explore
					</Link>
				</div>
			</div>
		</div>
	);
}
export default Hero;
