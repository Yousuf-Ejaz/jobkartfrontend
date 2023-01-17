import Form from "../../components/RegisterPage/Form";
import Navbar from "../../components/RegisterPage/Navbar";
import Footer from "../../components/HomePage/Footer";
import Link from "next/link";
function register() {
	return (
		<div className="flex flex-col min-h-screen">
			<Navbar />
			<div className="grow w-3/4 p-6 mx-auto">
				<Link href="/">
					<button className="btn  btn-wide mb-6 ">Back</button>
				</Link>
				<div className="uppercase font-bold text-2xl mb-6">
					Add your profile to get hired
				</div>
				<div className="mx-6">
					<Form />
				</div>
			</div>
			<Footer />
		</div>
	);
}
export default register;
