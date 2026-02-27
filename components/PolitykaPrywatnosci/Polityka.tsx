import styles from './Polityka.module.scss'

const Polityka = () => {
  return (
    <div className={styles.container}>
      <h1>POLITYKA PRYWATNOŚCI I KLAUZULA INFORMACYJNA SERWISU DREWELT.PL</h1>

      <p>
        Wypełniając obowiązek informacyjny, o którym mowa w art. 13 Rozporządzenia Parlamentu Europejskiego i Rady (UE)
        2016/679 z dnia 27 kwietnia 2016 r. (RODO), informujemy, iż:
      </p>

      <ol>
        <li>
          <strong>Administrator Danych Osobowych</strong>
          <p>
            Administratorem danych osobowych przekazywanych nam zarówno w treści wiadomości e-mail, w formie papierowej,
            bądź ustnej jest <strong>Firma Drewet Piotr Wiśniewski</strong>.
          </p>
        </li>

        <li>
          <strong>Cele i podstawy prawne przetwarzania danych</strong>
          <p>Dane osobowe będą przetwarzane zgodnie z RODO wyłącznie w celu:</p>
          <ul>
            <li>
              w jakim zostały nam przesłane (np. w celu realizacji umowy, przygotowania oferty, złożenia zamówienia itp.)
              — <strong>podstawa prawna:</strong> art. 6 ust. 1 lit. b RODO,
            </li>
            <li>
              wypełnienia obowiązku prawnego ciążącego na Administratorze (np. realizacja obowiązku wynikającego z
              przepisów prawa podatkowego) — <strong>podstawa prawna:</strong> art. 6 ust. 1 lit. c RODO,
            </li>
            <li>
              innych uzasadnionych interesów Administratora (tj. dochodzenie i obrona przed roszczeniami) —{' '}
              <strong>podstawa prawna:</strong> art. 6 ust. 1 lit. f RODO,
            </li>
            <li>udzielenia odpowiedzi na przesłaną wiadomość oraz archiwizacji korespondencji.</li>
          </ul>
        </li>

        <li>
          <strong>Okres przechowywania danych</strong>
          <p>
            Dane będą przetwarzane przez okres niezbędny do realizacji celu, jak i okres przedawnienia ewentualnych
            roszczeń związanych z realizacją celu, w jakim zostały nam przekazane.
          </p>
        </li>

        <li>
          <strong>Charakter podania danych</strong>
          <p>
            Podanie danych osobowych ma charakter dobrowolny, jednak ich brak może uniemożliwić realizację celu, w jakim
            zostały nam przekazane.
          </p>
        </li>

        <li>
          <strong>Prawa osób, których dane dotyczą</strong>
          <p>Przysługuje Państwu:</p>
          <ul>
            <li>prawo dostępu do treści swoich danych oraz prawo ich sprostowania, usunięcia, ograniczenia przetwarzania,</li>
            <li>prawo do przenoszenia danych,</li>
            <li>prawo wniesienia sprzeciwu,</li>
            <li>
              prawo do cofnięcia zgody w dowolnym momencie bez wpływu na zgodność z prawem przetwarzania, którego
              dokonano na podstawie zgody przed jej cofnięciem,
            </li>
            <li>
              prawo wniesienia skargi do organu nadzorczego, gdy uznają Państwo, iż przetwarzanie Państwa danych
              osobowych narusza obowiązujące przepisy.
            </li>
          </ul>
        </li>

        <li>
          <strong>Odbiorcy danych</strong>
          <p>
            Podane dane osobowe mogą być udostępniane innym odbiorcom, tj. agencjom marketingowym, biurom rachunkowym,
            dostawcom usług logistycznych i IT, podwykonawcom naszych usług, którzy przetwarzać będą Państwa dane
            osobowe na zlecenie Administratora i wyłącznie zgodnie z jego zaleceniami we wskazanym celu i zakresie (
            <strong>powierzenie danych osobowych</strong> na podstawie art. 28 ust. 3 RODO).
          </p>
        </li>

        <li>
          <strong>Informacja o przekazywaniu danych i profilowaniu</strong>
          <p>
            Podane przez Państwa dane osobowe nie będą przekazywane do państwa trzeciego, ani nie będą przetwarzane w
            sposób zautomatyzowany, w tym również w formie profilowania.
          </p>
        </li>
      </ol>
    </div>
  )
}

export default Polityka