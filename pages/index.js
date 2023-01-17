import Head from "next/head";
import Navbar from "../components/HomePage/Navbar";
import Hero from "../components/HomePage/Hero";
import Categories from "../components/HomePage/Categories";
import JobSeeker from "../components/HomePage/JobSeeker";
import Employer from "../components/HomePage/Employer";
import Footer from "../components/HomePage/Footer";

export default function Home() {
	return (
		<>
			<Head>
				<title>Jobkart</title>

				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			
			<main>
				<Navbar />
				<Hero />
				<Categories />
				<JobSeeker />
				<Employer />
				<Footer/>
			</main>
		</>
	);
}
