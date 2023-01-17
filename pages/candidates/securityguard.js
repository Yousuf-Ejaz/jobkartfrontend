
import Navbar from "../../components/CandidatesPage/Navbar";
import Footer from "../../components/HomePage/Footer";
import Link from "next/link";
import Head from "next/head";
import JobList from "../../components/CandidatesPage/JobList";
function register() {
	return (
		<>
			<Head>
				<title>Jobkart - Security Guard</title>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className="flex flex-col min-h-screen">
				<Navbar />
				<div className="grow w-3/4 p-6 mx-auto">
					<Link href="/">
						<button className="btn  btn-wide mb-6 ">Back</button>
					</Link>
					<div className="uppercase font-bold text-2xl mx-auto mb-6 text-center">
						Security Guard
					</div>
					<div className="mx-auto mb-6 text-center ">
						<Link
							href="/jobs/post"
							className="btn btn-wide btn-outline "
						>
							Post a new Job
						</Link>
					</div>
					<div className="mx-6">
						<JobList jobCategory="SECURITY%20GUARD" />
					</div>
				</div>
				<Footer />
			</main>
		</>
	);
}
export default register;
