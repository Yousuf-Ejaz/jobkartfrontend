import styles from "./../../styles/Hero.module.css";
function Hero() {
	return (
		<div className={`${styles.bg} hero min-h-screen bg-base-200`} id="home">
			<div className="hero-content text-center">
				<div className="max-w-6xl">
					<h1 className="text-6xl font-bold text-white">
						Join your hands together. Not to beg, but to welcome new
						opportunities!
					</h1>

					<div className="flex justify-center uppercase my-12 font-medium text-sm text-[#9F01FF] border-2 mx-auto w-fit rounded-xl border-white backdrop-blur-md bg-white/30">
						<div className="m-4">
							<div className="inline-block rounded-xl bg-[#9F01FF] px-4 py-3 text-center text-base font-semibold uppercase text-white mb-3 w-56">
								Employer
							</div>
							<ul className="menu bg-base-100 w-56 p-2 rounded-box">
								<li>
									<a>Available candidates</a>
								</li>
								<li>
									<a>Post New Job</a>
								</li>
							</ul>
						</div>
						<div className="m-4">
							<div className="inline-block rounded-xl bg-[#9F01FF] px-4 py-3 text-center text-base font-semibold uppercase text-white mb-3 w-56">
								Job Seeker
							</div>
							<ul className="menu bg-base-100 w-56 p-2 rounded-box">
								<li>
									<a>Register</a>
								</li>
								<li>
									<a>Apply Now</a>
								</li>
							</ul>
						</div>
					</div>
					<button className="btn btn-wide rounded-full text-[#9F01FF] bg-white border-white hover:bg-white hover:border-white font-bold text-lg">
						Explore
					</button>
				</div>
			</div>
		</div>
	);
}
export default Hero;
