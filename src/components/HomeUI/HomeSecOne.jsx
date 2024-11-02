const HeroSection = () => {
    return (
      <section className="relative bg-blue-500 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">Votre partenaire financier au quotidien</h1>
            <p className="text-xl mb-8">
            Simplifiez votre vie bancaire avec BSIC-Bank. Bénéficiez d&apos;une gamme complète de services adaptés à vos besoins, d&apos;un accompagnement personnalisé et d&apos;une sécurité maximale.
            </p>
            <a
              href="/signup"
              className="bg-white text-blue-500 font-bold py-3 px-6 rounded-full hover:bg-indigo-100 transition duration-300"
            >
              Devenir Membre
            </a>
          </div>
        </div>
      </section>
    );
  };
  
  export default HeroSection;
  