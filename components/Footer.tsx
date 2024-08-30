import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
    const Year = new Date().getFullYear();

    return (
        <footer className="bg-black text-white p-10 font-playfair">
            <div className="grid lg:grid-cols-4 gap-20 sm:grid-cols-1">
                <div className="flex flex-col gap-5">
                    <p className="text-heading3-bold uppercase text-beige-3">Empearl Jewelry Store</p>
                    <p>
                        Discover exquisite jewelry that embodies timeless elegance. From sparkling
                        gemstones to classic designs, Empearl offers pieces crafted with the highest
                        quality and care. Enhance your beauty with our curated collections.
                    </p>
                </div>

                <div>
                    <ul>
                        <li className="text-[22px] font-semibold text-beige-3 py-2 uppercase">
                            Jewelry Collections
                        </li>
                        <li className="my-4">Butterfly</li>
                        <li className="my-4">Wild Flower</li>
                        <li className="my-4">Tilda's Bow</li>
                    </ul>
                </div>

                <div>
                    <ul>
                        <li className="text-[22px] font-semibold text-beige-3 py-2 uppercase">
                            About Us
                        </li>
                        <li className="my-4">Founded in 2020, Empearl is based in Belgrade, offering unique and elegant jewelry.</li>
                        <li className="my-4">We focus on exceptional craftsmanship and ethical practices in every piece we create.</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-[22px] font-semibold text-beige-3 py-2 uppercase">Contact</h2>
                    <p className="text-[16px] my-4 font-noto">Email: nevenamitic886@gmail.com</p>
                    <p className="text-[16px] my-4 font-noto">Phone: +381645895784</p>
                    <div className="flex space-x-4">
                        <a
                            className="text-white hover:text-beige-3 transform hover:scale-150 transition-all duration-150 ease-in-out"
                            href="https://github.com/NevenaMitic"
                            aria-label="GitHub"
                        >
                            <FaGithub />
                        </a>
                        <a
                            className="text-white hover:text-beige-3 transform hover:scale-150 transition-all duration-150 ease-in-out"
                            href="https://www.linkedin.com/in/nevena-mitic-0733a7191/"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedinIn />
                        </a>
                        <a
                            className="text-white hover:text-beige-2 transform hover:scale-150 transition-all duration-150 ease-in-out"
                            href="https://www.instagram.com/nevenamitic__/?next=%2Fproud.mp%2Ffeed%2F"
                            aria-label="Instagram"
                        >
                            <FaInstagram />
                        </a>
                    </div>
                </div>
            </div>

            <h6 className="text-center py-4">&copy; {Year} Empearl Jewelry Store. All rights reserved.</h6>
        </footer>
    );
};

export default Footer;
