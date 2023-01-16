function Categories() {
	return (
		<div className="min-h-screen  mx-14 px-5 py-16 bg-white" id="categories">
			<div className="text-5xl mb-16 font-bold text-center text-[#9F01FF] ">
				Categories
			</div>
			<div className="grid grid-cols-4  gap-4">
				<div className="flex flex-col gap-2 m-12">
					<img
						src="/electrician.svg"
						className=" p-4 "
						alt="Electrician"
					/>
					<div className="inline-block  rounded-md bg-[#9F01FF] transition duration-200 ease-in-out border--[#9F01FF] px-4 py-3 text-center text-sm font-semibold uppercase text-white">
						Electrician
					</div>
					<button className="btn btn-outline">View Jobs</button>
					<button className="btn ">View Candidates</button>
				</div>
				<div className="flex flex-col gap-2 m-12">
					<img src="/plumber.svg" className=" p-4 " alt="Plumber" />
					<div className="inline-block  rounded-md bg-[#9F01FF] transition duration-200 ease-in-out border--[#9F01FF] px-4 py-3 text-center text-sm font-semibold uppercase text-white">
						Plumber
					</div>
					<button className="btn btn-outline">View Jobs</button>
					<button className="btn ">View Candidates</button>
				</div>
				<div className="flex flex-col gap-2 m-12">
					<img src="/mechanic.svg" className=" p-4 " alt="Mechanic" />
					<div className="inline-block  rounded-md bg-[#9F01FF] transition duration-200 ease-in-out border--[#9F01FF] px-4 py-3 text-center text-sm font-semibold uppercase text-white">
						Mechanic
					</div>
					<button className="btn btn-outline">View Jobs</button>
					<button className="btn ">View Candidates</button>
				</div>
				<div className="flex flex-col gap-2 m-12">
					<img src="/cook.svg" className=" p-4 " alt="Cook" />
					<div className="inline-block  rounded-md bg-[#9F01FF] transition duration-200 ease-in-out border--[#9F01FF] px-4 py-3 text-center text-sm font-semibold uppercase text-white">
						Cook
					</div>
					<button className="btn btn-outline">View Jobs</button>
					<button className="btn ">View Candidates</button>
				</div>
				<div className="flex flex-col gap-2 m-12">
					<img src="/peon.svg" className=" p-4 " alt="Peon" />
					<div className="inline-block  rounded-md bg-[#9F01FF] transition duration-200 ease-in-out border--[#9F01FF] px-4 py-3 text-center text-sm font-semibold uppercase text-white">
						Peon
					</div>
					<button className="btn btn-outline">View Jobs</button>
					<button className="btn ">View Candidates</button>
				</div>
				<div className="flex flex-col gap-2 m-12">
					<img src="/driver.svg" className=" p-4 " alt="Driver" />
					<div className="inline-block  rounded-md bg-[#9F01FF] transition duration-200 ease-in-out border--[#9F01FF] px-4 py-3 text-center text-sm font-semibold uppercase text-white">
						Driver
					</div>
					<button className="btn btn-outline">View Jobs</button>
					<button className="btn ">View Candidates</button>
				</div>
				<div className="flex flex-col gap-2 m-12">
					<img
						src="/house-keeping.svg"
						className=" p-4 "
						alt="House-keeping"
					/>
					<div className="inline-block  rounded-md bg-[#9F01FF] transition duration-200 ease-in-out border--[#9F01FF] px-4 py-3 text-center text-sm font-semibold uppercase text-white">
						House-keep
					</div>
					<button className="btn btn-outline">View Jobs</button>
					<button className="btn ">View Candidates</button>
				</div>
				<div className="flex flex-col gap-2 m-12">
					<img
						src="/construction-site-worker.svg"
						className=" p-4 "
						alt="Construction-site worker"
					/>
					<div className="inline-block  rounded-md bg-[#9F01FF] transition duration-200 ease-in-out border--[#9F01FF] px-4 py-3 text-center text-sm font-semibold uppercase text-white">
						Miner
					</div>
					<button className="btn btn-outline">View Jobs</button>
					<button className="btn ">View Candidates</button>
				</div>
				{/* <div className="flex flex-col gap-2 m-12">
					<img
						src="/security-guard.svg"
						className=" p-4 "
						alt="Security Guard"
					/>
					<button className="btn btn-outline">View Jobs</button>
					<button className="btn ">View Candidates</button>
				</div> */}
			</div>
		</div>
	);
}
export default Categories;
