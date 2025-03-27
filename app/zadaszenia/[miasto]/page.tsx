export default function MiastoPage({ params }: { params: any }) {
  const { miasto } = params;

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-800 capitalize mb-6">
        {miasto.replace(/-/g, " ")}
      </h1>
      
      <div className="bg-gray-50 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Zadaszenie Tarasu w {miasto.replace(/-/g, " ")}
        </h2>
        <p className="text-lg leading-relaxed text-gray-600 mb-6">
          Zadaszenia tarasu w {miasto.replace(/-/g, " ")} stanowią nie tylko
          praktyczne rozwiązanie chroniące przed warunkami atmosferycznymi, ale
          również istotny element architektoniczny, który wpływa na estetykę i
          charakter przestrzeni zewnętrznej. Są one kluczowym komponentem w
          projektowaniu nowoczesnych domów i ogrodów, oferując mieszkańcom
          komfort i ochronę, a jednocześnie podkreślając indywidualny styl danej
          nieruchomości. Wybór odpowiedniego zadaszenia tarasowego może
          całkowicie odmienić wygląd zewnętrzny domu, tworząc przytulne i
          funkcjonalne przestrzenie do relaksu, spotkań rodzinnych czy towarzyskich.
        </p>
        
        <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Dlaczego warto zainwestować w zadaszenie tarasu?
          </h3>
          <p className="text-lg text-gray-600 mb-4">
            Inwestycja w zadaszenie tarasu w {miasto.replace(/-/g, " ")} przynosi
            szereg korzyści, które znacząco wpływają na komfort i funkcjonalność
            życia codziennego. Przede wszystkim, zadaszenie to skuteczna ochrona
            przed zmiennymi warunkami pogodowymi – zarówno intensywnym słońcem
            latem, jak i deszczem czy śniegiem w innych porach roku. Dzięki temu
            taras staje się przestrzenią, z której można korzystać niemal przez
            cały rok, niezależnie od kaprysów pogody. Dodatkowo zadaszenie tarasu
            zwiększa wartość estetyczną nieruchomości, nadając jej nowoczesny i
            elegancki wygląd. Jest to również sposób na podniesienie wartości
            samej nieruchomości, co może być istotne w perspektywie długoterminowej.
            Zadaszenie zapewnia także dodatkową izolację termiczną i ochronę przed
            promieniowaniem UV, co przekłada się na zwiększenie komfortu użytkowania
            przestrzeni tarasu. Zadaszenie w {miasto.replace(/-/g, " ")} jest również
            praktycznym rozwiązaniem dla osób ceniących sobie prywatność, gdyż
            pełni funkcję bariery chroniącej przed wzrokiem sąsiadów.
          </p>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Zadaszenie tarasu najwyższej jakości
          </h3>
          <p className="text-lg text-gray-600 mb-6">
            Do realizacji zadaszeń używamy drewna BSH, czyli suchego świerku
            klejonego warstwowo, które jest znane ze swojej wytrzymałości,
            trwałości oraz odporności na warunki atmosferyczne. Ponadto nasze
            zadaszenia są pokrywane poliwęglanem komorowym, który zapewnia
            doskonałą ochronę przed promieniowaniem UV, jednocześnie zachowując
            lekkość konstrukcji. Każde zadaszenie tarasu jest projektowane i
            wykonane z myślą o spełnieniu indywidualnych potrzeb klienta, obejmując
            nie tylko wymiary i kształt, ale także wybór kolorystyki. Dzięki
            dwukrotnemu malowaniu i impregnowaniu, nasze zadaszenia są odporne na
            czynniki zewnętrzne i charakteryzują się długowiecznością.
          </p>
        </div>
      </div>
    </div>
  );
}
