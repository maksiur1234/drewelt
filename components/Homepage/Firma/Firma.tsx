import FirmaObraz from './FirmaObraz'

import styles from '@/components/Homepage/Firma/Firma.module.scss'

const Firma = () => {
  return (
    <>

        <div className={styles.container}>
            <div className={styles.item}>
                <h2>Rzemiosło w cenie prefabrykatu</h2>

                <p>
                    Nie składamy "gotowców". Każda konstrukcja jest przygotowana indywidualnie według ustaleń z Tobą, wycinana co do centymetra, ręcznie impregnowana i malowana na wybrany kolor.
                </p>

                <p>
                    <strong>Efekt?</strong> Otrzymujesz unikalną wytrzymałą konstrukcję o wysokim standardzie, konkurencyjną cenowo wobec delikatnych systemów aluminiowych. Płacisz za solidne drewno i pracę rąk, nie za marketing wielkich fabryk.
                </p>
            </div>

            <div className={styles.item}>
                <h2>Konstrukcja na dekady, nie na sezony</h2>

                <p>
                    Drewno to materiał wieczny, jeśli jest odpowiednio traktowane. Używamy wyselekcjonowanego surowca i profesjonalnych metod konserwacji, które tworzą pancerz przed wilgocią, słońcem i szkodnikami na co <strong>najmniej 5 lat.</strong>
                </p>

                <p>
                    Nasze wiaty i tarasy stoją stabilnie latami, podczas gdy tanie zamienniki wymagają wymiany. Budujesz raz, korzystasz przez pokolenia.
                </p>
            </div>

            <div className={styles.item}>
                <h2>Partnerstwo, a nie tylko "wykonawstwo"</h2>

                <p>
                    Cenimy Twój czas i nerwy. Jesteśmy terminowi – jeśli mówimy, że będziemy we wtorek, jesteśmy we wtorek. Przeprowadzimy Cię przez cały proces "za rękę". Masz wątpliwości?
                </p>
                
                <p>
                    Odpowiadamy na każde pytanie i proponujemy najlepsze rozwiązania.
                </p>

                <p>
                    <strong>Wszystko ustalone z góry. Żadnych niespodzianek przy rozliczeniu.</strong>
                </p>
            </div>
        </div>
        {/* <FirmaObraz /> */}
    </>
  )
}

export default Firma
