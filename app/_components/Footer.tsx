const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="w-full py-8 border-t border-border text-center transition-colors duration-300 space-y-2 bg-secondary">
        <h2 className="text-xl">
          <strong className="text-primary">Ehsan</strong> Mosaddeghi
        </h2>
        <p>© {currentYear} , All rights reserved.</p>
      </footer>
      <div className="w-full h-2 bg-gradient-to-r from-blue-300 via-blue-600 to-blue-300"></div>
    </>
  );
};

export default Footer;
