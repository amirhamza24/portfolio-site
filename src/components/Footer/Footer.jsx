import "./Footer.css";

const Footer = () => {
    return (
        <div>
            <div>
                <hr className="border-1 border-gray-600 mt-14 mb-10" />

                <div className="w-10/12 mx-auto pb-10">
                    <div className="text-gray-500 text-sm flex flex-col md:flex-row text-center justify-between">
                    <div>
                        <p>Copyright &copy; 2023, Amir Hamza. All Rights Reserved</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
