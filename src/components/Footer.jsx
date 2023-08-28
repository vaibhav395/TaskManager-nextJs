"use client";
const Footer = () => {
    return (
        <footer className="bg-blue-400 h-40 shadow-xl p-7">
            <div className="flex justify-between p-4">
                <div className="text-center">
                    <h1 className="font-bold mb-3">Welcome to your Work manager</h1>
                    <p>Effortless task management: Quick links, support, and essential info in our user-friendly footer.</p>
                </div>

                <div className="text-center ">
                    <h1 className="font-bold pb-3">Important Links</h1>
                    <ul className="flex justify-between">
                        <li className="mr-1 hover:font-semibold"><a href="#">Facebook</a></li>
                        <span>||</span>
                        <li className="mr-1 ml-1 hover:font-semibold"><a href="https://www.linkedin.com/in/vaibhav-thareja-685133217">LinkedIn</a></li>
                        <span>||</span>
                        <li className="ml-1 hover:font-semibold"><a href="https://www.instagram.com/vaibhav_thareja_05/">Instagram</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;