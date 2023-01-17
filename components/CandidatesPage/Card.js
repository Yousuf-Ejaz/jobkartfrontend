function Card({ item }) {
	return item !== undefined ? (
		<>
			<div className="card card-side bg-base-100 shadow-xl">
				<figure>
					<div className="flex items-center">
						<img
							src={`https://chart.googleapis.com/chart?cht=qr&chl=_id%3A%20%22${item._id}%22%0Acategory%3A%20%22${item.category}%22%0AotherSkills%3A%20%22${item.otherSkills}%22%0Ausername%3A%20%22${item.username}%22%0AphoneNumber%3A%20%22${item.phoneNumber}%22%0AaadharNumber%3A%20%22${item.aadharNumber}%22%0AYOE%3A%20${item.YOE}%0AcurrentLocation%3A%20%22${item.currentLocation}%22%0Aavailability%3A%20${item.availability}%0AmessageForRecruiter%3A%20%22${item.messageForRecruiter}%22&chs=200x200&choe=UTF-8&chld=L|2`}
							rel="nofollow"
							alt="qr code"
							cclassName="pl-8 pt-6"
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
					<h2 className="card-title uppercase">{item.username}</h2>
					<p>{item.messageForRecruiter}</p>
					<p>
						<span className="font-semibold">Current Location:</span>{" "}
						{item.currentLocation}
					</p>

					<p>
						<span className="font-semibold">
							Date of Availability:
						</span>{" "}
						{item.availability.slice(0, 10)}
					</p>

					<p>
						<span className="font-semibold">
							Years of Experience:
						</span>{" "}
						{item.YOE}
					</p>

					<div className="card-actions justify-end">
						<div className="dropdown">
							<label tabIndex={0} className="btn m-1">
								Hire Me!
							</label>
							<div
								tabIndex={0}
								className="dropdown-content card card-compact w-64 p-2 shadow bg-primary text-primary-content"
							>
								<div className="card-body">
									<h3 className="card-title">
										Sounds Wonderful!
									</h3>
									<p>
										{`You can contact the recruiter at: +91${item.phoneNumber}`}
									</p>
								</div>
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
