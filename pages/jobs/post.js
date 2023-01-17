import Form from "../../components/PostPage/Form";
import Navbar from "../../components/PostPage/Navbar";
import Footer from "../../components/HomePage/Footer";
import Link from "next/link";
import Head from "next/head";
function post() {
	return (
		<>
			<Head>
				<title>Jobkart - Post</title>
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
					<div className="uppercase font-bold text-2xl mb-6">
						Let job seekers know you need them
					</div>
					<div className="mx-6">
						<Form />
					</div>
				</div>
				<Footer />
			</main>
		</>
	);
}
export default post;
