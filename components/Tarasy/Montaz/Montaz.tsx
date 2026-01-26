import styles from '@/components/Tarasy/Montaz/Montaz.module.scss'
import GaleriaContent from '@/components/Zadaszenia/Galeria/GaleriaContent/GaleriaContent'

const Montaz = () => {
    const zadaszeniaNaLukach = [
        '/tarasy/taras-1.png',
        '/tarasy/taras-2.png',
        '/tarasy/taras-3.png',
        '/tarasy/taras-4.png',
    ]

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        Montaż desek tarasowych z kompozytu i akcesoria – trwałość bez kompromisów
      </h2>
      
      <p className={styles.text}>
        Każdy projekt realizowany przez Drewelt obejmuje nie tylko dostawę <strong>desek tarasowych z kompozytu</strong>, ale także pełen zestaw akcesoriów montażowych. W skład systemu wchodzą klipsy plastikowe z wkrętami ze stali nierdzewnej, listy kątowe, zaślepki i inne elementy, które zapewniają stabilność i estetykę konstrukcji. Dzięki przemyślanemu systemowi montażu, deski kompozytowe można szybko, a także bezproblemowo zamontować <strong>na balkonach, tarasach ogrodowych czy przy basenach.</strong> Ich konstrukcja umożliwia późniejsze odwrócenie, co znacząco wydłuża żywotność całej powierzchni, a także pozwala zachować świeży wygląd przez lata.
      </p>

      <h2 className={styles.title}>
        Jak złożyć zamówienie na tarasowe deski kompozytowe?
      </h2>

      <p className={styles.text}>
        Zamówienie deski kompozytowe na taras można złożyć w prosty sposób. Wystarczy przesłać: zdjęcia miejsca inwestycji, wymiary, dane kontaktowe, a zespół Drewelt przygotuje indywidualną wycenę i koncepcję. Działamy kompleksowo: od doradztwa technicznego, przez dobór materiałów, aż po montaż. Klient otrzymuje od  pełne wsparcie każdym etapie realizacji, a kontakt z doradcą jest szybki i rzeczowy. Cenimy sobie transparentność i jakość obsługi, dlatego każde zamówienie traktowane jest indywidualnie.
      </p>

      <h2 className={styles.title}>
        Zainspiruj się i zapytaj o budowę tarasów ogrodowych
      </h2>

      <p className={styles.text}>
        Na naszej stronie internetowej znajdziesz galerię realizacji, która pokazuje różnorodność projektów i zastosowań <strong>desek tarasowych kompozytowych.</strong> Każdy projekt to dowód na to, że praktyczność może iść w parze z eleganckim designem. Zachęcamy do kontaktu i przesłania zapytania – doradzimy, przygotujemy ofertę oraz pomożemy stworzyć przestrzeń, która będzie cieszyć przez lata.
      </p>

      <div className={styles.galeria}>
        <GaleriaContent
            title='Tarasy z deski kompozytowej'
            obrazki={zadaszeniaNaLukach}
        />
      </div>
      
    </div>
  )
}

export default Montaz
