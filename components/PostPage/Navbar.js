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
						<ul className="menu menu-horizontal px-4 font-bold ">
							<li>
								<a
									className="hover:text-green-500  active:bg-black"
									href="#contact-us"
								>
									Contact Us
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Navbar;
