import { useState, useEffect } from "react";
import Card from "./Card";
function JobList({ jobCategory }) {
	const [data, setData] = useState(null);
	const [isLoading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		let url = `http://localhost:3030/jobs/candidates/?CATEGORY=${jobCategory}`;
		if (jobCategory === undefined)
			url = `http://localhost:3030/user/getAllUsers`;
		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				setData(data);
				setLoading(false);
			});
	}, []);

	if (isLoading) return <p>Loading...</p>;
	if (!data) return <p>No profile data</p>;

	console.log(data.candidates);

	return (
		<div>
			<h1>
				{data.candidates.map((item) => {
					return (
						<div key={item._id}>
							<Card item={item} />
						</div>
					);
				})}
			</h1>
		</div>
	);
}
export default JobList;
// "http://localhost:3030/jobs"
