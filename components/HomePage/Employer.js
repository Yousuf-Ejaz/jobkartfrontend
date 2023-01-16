function Employer() {
	return (
		<div className={` h-[70vh] flex`}>
			<div className="grid grid-rows-2 w-6/12 grid-cols-3 gap-8  text-center p-10">
				<div className="bg-[#CE0197] flex pt-2 justify-center mask mask-squircle transition duration-200 ease-in-out">
					<div className="self-center">
						<img
							src="/register-w.svg"
							className="w-20 "
							alt="Register"
						/>
						<div className="uppercase font-semibold text-white">
							register
						</div>
					</div>
				</div>
				<div className="bg-[#CE0197] flex justify-center mask mask-squircle transition duration-200 ease-in-out ">
					<div className="self-center">
						<img
							src="/view-jobs-w.svg"
							className="w-20 justify-center"
							alt="View Jobs"
						/>
						<div className="uppercase font-semibold text-white">
							view jobs
						</div>
					</div>
				</div>
				<div className="bg-[#CE0197] flex justify-center mask mask-squircle transition duration-200 ease-in-out ">
					<div className="self-center ">
						<img
							src="/post-openings.svg"
							className="w-20 justify-center mx-auto"
							alt="Get Hired"
						/>
						<div className="uppercase font-semibold text-white">
							post openings
						</div>
					</div>
				</div>
				<div className="bg-[#CE0197] flex justify-center mask mask-squircle transition duration-200 ease-in-out ">
					<div className="self-center">
						<img
							src="/apply-w.svg"
							className="w-20 justify-center"
							alt="Apply"
						/>
						<div className="uppercase font-semibold text-white">
							apply
						</div>
					</div>
				</div>
				
				<div className="bg-[#CE0197] flex justify-center mask mask-squircle transition duration-200 ease-in-out ">
					<div className="self-center">
						<img
							src="/get-hired-w.svg"
							className="w-20 justify-center"
							alt="Get Hired"
						/>
						<div className="uppercase font-semibold text-white">
							get hired
						</div>
					</div>
				</div>
			</div>
			<div className={` w-1/2 hero`}>
				<div className="text-6xl mb-16 font-bold text-center text-[#9F01FF] ">
					How we work for Employers
				</div>
			</div>
		</div>
	);
}
export default Employer;
