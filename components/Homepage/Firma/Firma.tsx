import FirmaObraz from './FirmaObraz'

import styles from '@/components/Homepage/Firma/Firma.module.scss'

const Firma = () => {
  return (
    <>

        <div className={styles.container}>
            <div className={styles.item}>
                <h2>Rzemiosło w cenie prefabrykatu</h2>

                <p>
                    Nie składamy "gotowców" z taśmy. Każdy element docinamy ręcznie i dopasowujemy indywidualnie do Twojego domu - co do milimetra
                </p>

                <p>
                    <strong>Efekt?</strong> Otrzymujesz unikalną konstrukcję o wysokim standardzie, konkurencyjną cenowo wobec drogich systemów alumniowych. Płacisz za solidne drewno i pracę rąk, nie za marketing wielkich fabryk.
                </p>
            </div>

            <div className={styles.item}>
                <h2>Konstrukcja na dekady, nie na sezony</h2>

                <p>
                    Drewno ot materiał wieczny, jeśli jest odpowiednio traktowane. Używamy wyselekcjonowanego surowca i profesjonalnych metod konserwacji, które tworzą pancerz przed wilgocią, słońcem i szkodnikami.
                </p>

                <p>
                    Nasze wiaty i tarasy stoją stabilnie latami, podzczas gdy tanie zamienniki wymagają wymiany. Budujesz raz, korzystasz prez pokolenia.
                </p>
            </div>

            <div className={styles.item}>
                <h2>Partnerstwo, a nie tylko "wykonawstwo"</h2>

                <p>
                    Cenimy Twój czas i nerwy. Jesteśmy terminowi - jeśli mówimy, że będziemy we wtorek, jesteśmy we wtorek. Przeporawdzimy Cię przez cały proces "za rękę". Masz wątpliowści?
                </p>
                
                <p>
                    Odpoiwadamy na każde pytanie i doradzamy najlepsze rozwiązania, zanim wybijemy pierwszy gwóźdź. Żadnych niespodzianek przy rozliczeniu.
                </p>
            </div>
        </div>
        <FirmaObraz />
    </>
  )
}

export default Firma
