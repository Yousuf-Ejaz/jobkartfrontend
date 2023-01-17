import Link from "next/link";
import axios from "axios";
import { useState, useEffect } from "react";

function ApplyJob(props) {
	const [aadharNumber, setAadharNumber] = useState("");
	const handleChange = (e) => {
		let itemValue = e.target.value;
		setAadharNumber(itemValue);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		axios
			.post(`http://localhost:3030/jobs/${props.jobId}/apply`, {
				aadharNumber,
			})
			.then((response) => {
				console.log(response);
				if (response.status === 200) {
					const data = response.data;
					console.log(data);
					alert(`Your application has been sent.--`);
				}
			})
			.catch((error) => {
				alert(`Please register before applying!`);
				console.log(error);
			});

		setAadharNumber("");
	};
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label>
					<input
						type="text"
						name="aadharNumber"
						placeholder="Enter your Aadhar Number"
						value={aadharNumber}
						onChange={handleChange}
						className="input input-bordered input-secondary w-full mb-3 text-black"
						maxLength="12"
						required
					/>
				</label>
				<div className="text-left">
					<button type="submit" className="btn inline-block">
						Register
					</button>
				</div>
			</form>
		</div>
	);
}
export default ApplyJob;
