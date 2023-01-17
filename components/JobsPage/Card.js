import ApplyJob from "../ApplyJob/ApplyJob";

function Card({ item, title }) {
	console.log("rrrrrrrrrrrr");
	console.log(item);
	console.log("1111111111111111");

	return title !== undefined ? (
		<>
			<div className="card card-side bg-base-100 shadow-xl">
				<figure>
					<div>
						<img
							src={`https://chart.googleapis.com/chart?cht=qr&chl=category%3A%20%22${item.category}%22%0Adescription%3A%20%22${item.description}%22%0Alocation%3A%20%22${item.location}%22%0AnumberOfPositions%3A%20${item.numberOfPositions}%0AofferedSalary%3A%20${item.offeredSalary}%0ArecruiterEmailId%3A%20%22${item.recruiterEmailId}%22%0ArecruiterPhoneNumber%3A%20%22${item.recruiterPhoneNumber}%22%0Atitle%3A%20%22${item.title}%22%0A_id%3A%20%22${item._id}%22&chs=200x200&choe=UTF-8&chld=L|2`}
							rel="nofollow"
							alt="qr code"
							className="pl-6 pt-6"
						/>
						<a
							href="www.qr-code-generator.com/"
							border="0"
							style={{ cursor: "default" }}
							rel="nofollow"
						></a>
					</div>
				</figure>
				<div className="card-body">
					<h2 className="card-title uppercase">{title}</h2>
					<p>
						<span className="font-semibold">Location:</span>{" "}
						{item.location}
					</p>

					<p>
						<span className="font-semibold">No. of Positions:</span>{" "}
						{item.numberOfPositions}
					</p>

					<p>
						<span className="font-semibold">Offered Salary:</span>{" "}
						{item.offeredSalary}
					</p>

					<div className="card-actions justify-end">
						<div className="dropdown  dropdown-left">
							<label tabIndex={0} className="btn m-1">
								Apply
							</label>
							<div
								tabIndex={0}
								className="dropdown-content card card-compact w-96 p-2 shadow bg-primary text-primary-content"
							>
								<div className="card-body">
									<h3 className="card-title">
										If you haven't registered yet, please
										register before applying.
									</h3>
									<p>
										<ApplyJob jobId={item._id} />
									</p>
								</div>
								<div className="card-body"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<br />
		</>
	) : (
		<></>
	);
}
export default Card;
