import styles from "./../../styles/Seeker.module.css";
function JobSeeker() {
	return (
		<div className={`${styles.bg} h-[70vh] flex`} id="hww">
			<div className={` w-1/2 hero`}>
				<div className="text-6xl mb-16 font-bold text-center text-white ">
					How we work for Job Seekers
				</div>
			</div>
			<div className="grid grid-rows-2 w-6/12 grid-cols-2 gap-8  text-center p-10">
				<div className="bg-white flex pt-2 justify-center mask mask-squircle transition duration-200 ease-in-out">
					<div className="self-center">
						<img
							src="/register.svg"
							className="w-20 "
							alt="Register"
						/>
						<div className="uppercase font-semibold text-[#9F01FF]">
							register
						</div>
					</div>
				</div>
				<div className="bg-white flex justify-center mask mask-squircle transition duration-200 ease-in-out ">
					<div className="self-center">
						<img
							src="/view-jobs.svg"
							className="w-20 justify-center"
							alt="View Jobs"
						/>
						<div className="uppercase font-semibold text-[#9F01FF]">
							view jobs
						</div>
					</div>
				</div>
				<div className="bg-white flex justify-center mask mask-squircle transition duration-200 ease-in-out ">
					<div className="self-center">
						<img
							src="/apply.svg"
							className="w-20 justify-center"
							alt="Apply"
						/>
						<div className="uppercase font-semibold text-[#9F01FF]">
							apply
						</div>
					</div>
				</div>
				<div className="bg-white flex justify-center mask mask-squircle transition duration-200 ease-in-out ">
					<div className="self-center">
						<img
							src="/get-hired.svg"
							className="w-20 justify-center"
							alt="Get Hired"
						/>
						<div className="uppercase font-semibold text-[#9F01FF]">
							get hired
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default JobSeeker;
