import Navbar from "../../components/JobsPage/Navbar";
import Footer from "../../components/HomePage/Footer";
import Link from "next/link";
import Head from "next/head";
import JobList from "../../components/JobsPage/JobList";
function register() {
	return (
		<>
			<Head>
				<title>Jobkart - Housekeeping</title>
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
						House Keeping
					</div>
					<div className="mx-6">
						<JobList jobCategory="MAID" />
					</div>
				</div>
				<Footer />
			</main>
		</>
	);
}
export default register;
