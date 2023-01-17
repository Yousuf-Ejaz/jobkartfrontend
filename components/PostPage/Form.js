import React, { useState } from "react";
import axios from "axios";

function Form() {
	const [formData, setFormData] = useState({
		title: "",
		recruiterEmailId: "",
		recruiterPhoneNumber: "",
		category: "Choose Category",
		description: "",
		location: "",
		offeredSalary: "",
		numberOfPositions: "",
	});

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			let newUser = {
				title: formData.title,
				recruiterEmailId: formData.recruiterEmailId,
				recruiterPhoneNumber: formData.recruiterPhoneNumber,
				category: englishCategory,
				description: formData.description,
				location: formData.location,
				offeredSalary: formData.offeredSalary,
				numberOfPositions: formData.numberOfPositions,
			};
			console.log(newUser);

			axios
				.post("http://localhost:3030/jobs", newUser)
				.then((response) => {
					console.log("Posting your Job", response);
					const data = response.data;
					setFormData({ data });
					alert("Job Posted");

					setFormData({
						title: "",
						recruiterEmailId: "",
						recruiterPhoneNumber: "",
						category: "Choose Category",
						description: "",
						location: "",
						offeredSalary: "",
						numberOfPositions: "",
					});
				})
				.catch((error) => {
					console.log(error);
				});
			// handle success
		} catch (err) {
			console.error(err);
		}
	};

	const {
		title,
		recruiterEmailId,
		recruiterPhoneNumber,
		category,
		description,
		location,
		offeredSalary,
		numberOfPositions,
	} = formData;

	return (
		<form onSubmit={handleSubmit}>
			<label>
				<input
					type="text"
					name="title"
					placeholder="Your Name / Company Name"
					value={title}
					onChange={handleChange}
					className="input input-bordered input-secondary w-full mb-3"
					required
				/>
			</label>
			<br />

			<label>
				<input
					type="email"
					name="recruiterEmailId"
					placeholder="Email"
					value={recruiterEmailId}
					onChange={handleChange}
					className="input input-bordered input-secondary w-full mb-3"
					required
				/>
			</label>
			<br />
			<label>
				<span
					className={`label-text-alt text-red-500 ${
						recruiterPhoneNumber.length >= 10 ||
						recruiterPhoneNumber.length == 0
							? `hidden`
							: ``
					}`}
				>
					* Enter a 10 digit number
				</span>
				<input
					type="text"
					name="recruiterPhoneNumber"
					placeholder="Contact Number"
					value={recruiterPhoneNumber}
					maxLength="10"
					onChange={handleChange}
					className="input input-bordered input-secondary w-full mb-3"
				/>
			</label>
			<br />
			<select
				className="select select-bordered select-secondary w-full mb-3"
				as="select"
				name="category"
				value={category}
				onChange={handleChange}
				required
			>
				<option disabled>Choose Category</option>
				<option> ELECTRICIAN </option>
				<option> PLUMBER </option>
				<option> MECHANIC </option>
				<option> COOK </option>
				<option> PEON </option>
				<option> DRIVER </option>
				<option> MAID </option>
				<option> LABOUR </option>
				<option> SECURITY GUARD </option>
				<option> OTHERS </option>
			</select>
			<br />
			<textarea
				className="textarea textarea-secondary w-full mb-3"
				placeholder="Short Description"
				as="textarea"
				value={description}
				name="description"
				onChange={handleChange}
			></textarea>
			<br />
			<label>
				<input
					type="text"
					name="location"
					placeholder="Location"
					value={location}
					onChange={handleChange}
					className="input input-bordered input-secondary w-full mb-3"
					required
				/>
			</label>
			<br />
			<label>
				<input
					type="text"
					name="offeredSalary"
					placeholder="Offered Salary (Per Month)"
					value={offeredSalary}
					onChange={handleChange}
					className="input input-bordered input-secondary w-full mb-3"
					required
				/>
			</label>
			<br />
			<label>
				<input
					type="text"
					name="numberOfPositions"
					placeholder="Number of Positions"
					value={numberOfPositions}
					onChange={handleChange}
					className="input input-bordered input-secondary w-full mb-3"
					required
				/>
			</label>
			<br />

			<div className="text-right">
				<button
					type="submit"
					className="btn btn-primary btn-wide mb-6 inline-block"
				>
					Register
				</button>
			</div>
		</form>
	);
}

export default Form;
