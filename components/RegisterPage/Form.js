import React, { useState } from "react";
import axios from "axios";

function Form() {
	const [formData, setFormData] = useState({
		username: "",
		phoneNumber: "",
		aadharNumber: "",
		category: "",
		YOE: "",
		otherSkills: "",
		currentLocation: "",
		availability: "",
		messageForRecruiter: "",
	});

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			let newUser = {
				username: formData.username,
				phoneNumber: formData.phoneNumber,
				aadharNumber: formData.aadharNumber,
				category: formData.category,
				YOE: formData.YOE,
				otherSkills: formData.otherSkills,
				currentLocation: formData.currentLocation,
				availability: formData.availability,
				messageForRecruiter: formData.messageForRecruiter,
			};
			console.log(newUser);

			axios
				.post("http://localhost:3030/user/register", newUser)
				.then((response) => {
					console.log("SUBMITTTING USER PROFILE", response);
					const data = response.data;
					setFormData({ data });
					alert("Your profile is now visible to Recruiters");

					setFormData({
						username: "",
						phoneNumber: "",
						aadharNumber: "",
						category: "Choose Category",
						YOE: "",
						otherSkills: "",
						currentLocation: "",
						availability: "",
						messageForRecruiter: "",
					});
				})
				.catch((error) => {
					console.log(error);
					// alert("Invalid Input");
				});
			// handle success
		} catch (err) {
			console.error(err);
		}
	};

	const {
		username,
		phoneNumber,
		aadharNumber,
		category,
		YOE,
		otherSkills,
		currentLocation,
		availability,
		messageForRecruiter,
	} = formData;

	return (
		<form onSubmit={handleSubmit}>
			<label>
				<input
					type="text"
					name="username"
					placeholder="Username"
					value={username}
					onChange={handleChange}
					className="input input-bordered input-secondary w-full mb-3"
					required
				/>
			</label>
			<br />
			<label>
				<span
					className={`label-text-alt text-red-500 ${
						phoneNumber.length >= 10 || phoneNumber.length == 0
							? `hidden`
							: ``
					}`}
				>
					* Enter a 10 digit number
				</span>
				<input
					type="text"
					name="phoneNumber"
					placeholder="Phone Number"
					maxLength="10"
					value={phoneNumber}
					onChange={handleChange}
					className="input input-bordered input-secondary w-full mb-3"
					required
				/>
			</label>
			<br />
			<label>
				<span
					className={`label-text-alt text-red-500 ${
						aadharNumber.length >= 12 || aadharNumber.length == 0
							? `hidden`
							: ``
					} `}
				>
					* Enter a 12 digit number {aadharNumber.length}
				</span>
				<input
					type="text"
					name="aadharNumber"
					placeholder="Aadhar Number"
					value={aadharNumber}
					onChange={handleChange}
					className="input input-bordered input-secondary w-full mb-3"
					maxLength="12"
					required
				/>
			</label>
			<br />
			<select
				className="select select-bordered select-secondary w-full mb-3"
				as="select"
				name="category"
				defaultValue="Choose Category"
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
			<label>
				<input
					type="text"
					name="YOE"
					placeholder="Years of Experience"
					value={YOE}
					onChange={handleChange}
					className="input input-bordered input-secondary w-full mb-3"
					required
				/>
			</label>
			<br />
			<label>
				<input
					type="text"
					name="otherSkills"
					placeholder="Any Other Skill?"
					value={otherSkills}
					onChange={handleChange}
					className="input input-bordered input-secondary w-full mb-3"
				/>
			</label>
			<br />
			<label>
				<input
					type="text"
					name="currentLocation"
					placeholder="Current Location"
					value={currentLocation}
					onChange={handleChange}
					className="input input-bordered input-secondary w-full mb-3"
					required
				/>
			</label>
			<br />
			<label>
				<input
					type="text"
					name="availability"
					placeholder="Date of Availability (YYYY/MM/DD)"
					value={availability}
					onChange={handleChange}
					className="input input-bordered input-secondary w-full mb-3"
					required
				/>
			</label>
			<br />
			<textarea
				className="textarea textarea-secondary w-full mb-3"
				placeholder="Anything you want to share with the recruiter..."
				as="textarea"
				value={messageForRecruiter}
				name="messageForRecruiter"
				onChange={handleChange}
			></textarea>
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
