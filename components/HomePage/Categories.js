import Link from "next/link";
function Categories() {
	return (
		<div
			className="min-h-screen max-w-screen-xl mx-auto px-5 py-16 bg-white"
			id="categories"
		>
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

					<Link className="btn btn-outline" href="/jobs/electrician">
						View Jobs
					</Link>

					<Link href="/candidates/electrician" className="btn ">
						View Candidates
					</Link>
				</div>
				<div className="flex flex-col gap-2 m-12">
					<img src="/plumber.svg" className=" p-4 " alt="Plumber" />
					<div className="inline-block  rounded-md bg-[#9F01FF] transition duration-200 ease-in-out border--[#9F01FF] px-4 py-3 text-center text-sm font-semibold uppercase text-white">
						Plumber
					</div>
					<Link href="/jobs/plumber" className="btn btn-outline">
						View Jobs
					</Link>
					<Link href="/candidates/plumber" className="btn ">
						View Candidates
					</Link>
				</div>
				<div className="flex flex-col gap-2 m-12">
					<img src="/mechanic.svg" className=" p-4 " alt="Mechanic" />
					<div className="inline-block  rounded-md bg-[#9F01FF] transition duration-200 ease-in-out border--[#9F01FF] px-4 py-3 text-center text-sm font-semibold uppercase text-white">
						Mechanic
					</div>
					<Link href="/jobs/mechanic" className="btn btn-outline">
						View Jobs
					</Link>
					<Link href="/candidates/mechanic" className="btn ">
						View Candidates
					</Link>
				</div>
				<div className="flex flex-col gap-2 m-12">
					<img src="/cook.svg" className=" p-4 " alt="Cook" />
					<div className="inline-block  rounded-md bg-[#9F01FF] transition duration-200 ease-in-out border--[#9F01FF] px-4 py-3 text-center text-sm font-semibold uppercase text-white">
						Cook
					</div>
					<Link href="/jobs/cook" className="btn btn-outline">
						View Jobs
					</Link>
					<Link href="/candidates/cook" className="btn ">
						View Candidates
					</Link>
				</div>
				<div className="flex flex-col gap-2 m-12">
					<img src="/peon.svg" className=" p-4 " alt="Peon" />
					<div className="inline-block  rounded-md bg-[#9F01FF] transition duration-200 ease-in-out border--[#9F01FF] px-4 py-3 text-center text-sm font-semibold uppercase text-white">
						Peon
					</div>
					<Link href="/jobs/peon" className="btn btn-outline">
						View Jobs
					</Link>
					<Link href="/candidates/peon" className="btn ">
						View Candidates
					</Link>
				</div>
				<div className="flex flex-col gap-2 m-12">
					<img src="/driver.svg" className=" p-4 " alt="Driver" />
					<div className="inline-block  rounded-md bg-[#9F01FF] transition duration-200 ease-in-out border--[#9F01FF] px-4 py-3 text-center text-sm font-semibold uppercase text-white">
						Driver
					</div>
					<Link href="/jobs/driver" className="btn btn-outline">
						View Jobs
					</Link>
					<Link href="/candidates/driver" className="btn ">
						View Candidates
					</Link>
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
					<Link href="/jobs/housekeeping" className="btn btn-outline">
						View Jobs
					</Link>
					<Link href="/candidates/housekeeping" className="btn ">
						View Candidates
					</Link>
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
					<Link href="/jobs/siteworkers" className="btn btn-outline">
						View Jobs
					</Link>
					<Link href="/candidates/siteworkers" className="btn ">
						View Candidates
					</Link>
				</div>
				{/* <div className="flex flex-col gap-2 m-12">
					<img
						src="/security-guard.svg"
						className=" p-4 "
						alt="Security Guard"
					/>
					<Link href="/jobs/securityguard" className="btn btn-outline">View Jobs</Link>
					<Link href="/candidates/securityguard"  className="btn ">View Candidates</Link >
				</div> */}
			</div>
		</div>
	);
}
export default Categories;
