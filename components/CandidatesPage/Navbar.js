import Link from "next/link";
function Navbar() {
	return (
		<div>
			<div className="navbar bg-black text-neutral-content h-20 px-11">
				<div className="navbar-start">
					<div className="dropdown">
						<label tabIndex={0} className="btn btn-ghost lg:hidden">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h8m-8 6h16"
								/>
							</svg>
						</label>
					</div>
					<Link
						className="btn btn-ghost normal-case text-2xl"
						href="/"
					>
						JobKart
						<span className="text-xs">&#174;</span>{" "}
					</Link>
				</div>
				<div className="navbar-end">
					<div className="navbar-center hidden lg:flex">
						{/* <ul className="menu menu-horizontal px-4 font-bold ">
							<li>
								<a
									className="hover:text-green-500  active:bg-black"
									href="#contact-us"
								>
									Contact Us
								</a>
							</li>
						</ul> */}
						<ul className="menu menu-horizontal px-4 font-bold">
							<li tabIndex={0}>
								<a>
									Opportunities
									<svg
										className="fill-current"
										xmlns="http://www.w3.org/2000/svg"
										width="20"
										height="20"
										viewBox="0 0 24 24"
									>
										<path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
									</svg>
								</a>
								<ul className="p-2 text-neutral bg-neutral-content z-10">
									<li>
										<Link href="/candidates">
											All Candidates
										</Link>
									</li>
									<li>
										<Link href="/candidates/electrician">
											Electrician
										</Link>
									</li>
									<li>
										<Link href="/candidates/plumber">
											Plumber
										</Link>
									</li>
									<li>
										<Link href="/candidates/mechanic">
											Mechanic
										</Link>
									</li>
									<li>
										<Link href="/candidates/cook">
											Cook
										</Link>
									</li>
									<li>
										<Link href="/candidates/peon">
											Peon
										</Link>
									</li>
									<li>
										<Link href="/candidates/driver">
											Driver
										</Link>
									</li>
									<li>
										<Link href="/candidates/housekeeping">
											House Keeping
										</Link>
									</li>
									<li>
										<Link href="/candidates/securityguard">
											Security Guard
										</Link>
									</li>
									<li>
										<Link href="/candidates/siteworkers">
											Site Worker
										</Link>
									</li>
								</ul>
							</li>
							<li>
								<Link
									className="hover:text-green-500  active:bg-black"
									href="/#contact-us"
								>
									Contact Us
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Navbar;

{
	/* <ul className="menu menu-horizontal px-1">
	<li>
		<a>Item 1</a>
	</li>
	<li tabIndex={0}>
		<a>
			Parent
			<svg
				className="fill-current"
				xmlns="http://www.w3.org/2000/svg"
				width="20"
				height="20"
				viewBox="0 0 24 24"
			>
				<path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
			</svg>
		</a>
		<ul className="p-2 text-neutral bg-neutral-content">
			<li>
				<a>Submenu 1</a>
			</li>
			<li>
				<a>Submenu 2</a>
			</li>
		</ul>
	</li>
	<li>
		<a>Item 3</a>
	</li>
</ul>; */
}
