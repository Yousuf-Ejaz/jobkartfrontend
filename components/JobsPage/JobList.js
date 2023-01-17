import { useState, useEffect } from "react";
import Card from "./Card";
function JobList({ jobCategory }) {
	const [data, setData] = useState(null);
	const [isLoading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		let url = `http://localhost:3030/jobs/?CATEGORY=${jobCategory}`;
		if (jobCategory === undefined) url = `http://localhost:3030/jobs`;
		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				setData(data);
				setLoading(false);
			});
	}, []);

	if (isLoading) return <p>Loading...</p>;
	if (!data) return <p>No profile data</p>;

	console.log(data.jobs);

	return (
		<div>
			<h1>
				{data.jobs.map((item) => {
					return (
						<div key={item._id}>
							<Card item={item} title={item.title} />
						</div>
					);
				})}
			</h1>
		</div>
	);
}
export default JobList;
// "http://localhost:3030/jobs"
