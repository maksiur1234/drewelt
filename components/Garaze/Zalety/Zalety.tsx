import styles from '@/components/Garaze/Zalety/Zalety.module.scss'
import Image from 'next/image'

const Zalety = () => {
  return (
    <>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block justify-center">
          <div className="max-w-[1300px] mx-auto p-4 sm:p-6 flex flex-col gap-4">
            <p className="text-sm sm:text-xl">W katalogu producenta znajdują się dwa główne warianty konstrukcyjne:</p>
            <ul className="list-disc list-inside text-sm sm:text-xl">
            <li>wiaty wolnostojące ustawiane w dowolnym punkcie działki, gwarantujące pełną swobodę manewrowania oraz wygodne wysiadanie z pojazdu;</li>
            <li>wiaty przyścienne montowane bezpośrednio do ściany budynku mieszkalnego lub gospodarczego, co pozwala optymalnie zagospodarować dostępną przestrzeń przy zachowaniu spójności z bryłą domu.</li>
            </ul>
            <h2 className="text-3xl font-medium text-[#2e7d32] mb-4">Wiaty z drewna BSH i poliwęglanu</h2>
            <p className="text-sm sm:text-xl">Trwałość carportów opiera się na sprawdzonych materiałach budowlanych. Drewno klejone warstwowo BSH pozwala zachować duże rozpiętości między słupami, co gwarantuje bezproblemowe otwieranie drzwi samochodu bez ryzyka uderzenia w słup. Z kolei dach z poliwęglanu komorowego grubości 10 milimetrów z filtrem UV znosi obciążenie śniegiem i gradobicie, chroniąc wnętrze auta przed nadmiernym nagrzewaniem.</p>
            <div className="max-w-5xl w-full overflow-hidden mx-auto rounded-2xl shadow-xl border-4 border-solid border-[#1e7a1f40]">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm sm:text-xl">
                  <thead>
                    <tr className="bg-[#2e7d32]">
                      <th className="p-4 text-left font-bold text-white"><strong>Parametr techniczny</strong></th>
                      <th className="p-4 text-left font-bold text-white"><strong>Drewno klejone BSH</strong></th>
                      <th className="p-4 text-left font-bold text-white"><strong>Poliwęglan komorowy 10 mm</strong></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white">
                      <td className="p-4 align-top font-bold border-b border-[#1e7a1f40] text-[#1a1a1a]"><strong>Odporność na czynniki atmosferyczne</strong></td>
                      <td className="p-4 align-top font-bold border-b border-[#1e7a1f40] text-[#1a1a1a]">Brak podatności na paczenie dzięki technologii klejenia lamel</td>
                      <td className="p-4 align-top font-bold border-b border-[#1e7a1f40] text-[#1a1a1a]">Wytrzymałość na nacisk do 100 kg na metr kwadratowy</td>
                    </tr>
                    <tr className="bg-[#1e7a1f0d]">
                      <td className="p-4 align-top font-bold border-b border-[#1e7a1f40] text-[#4a4a4a]"><strong>Właściwości użytkowe</strong></td>
                      <td className="p-4 align-top font-bold border-b border-[#1e7a1f40] text-[#4a4a4a]">Umożliwia duże rozpiętości bez podpór pośrednich</td>
                      <td className="p-4 align-top font-bold border-b border-[#1e7a1f40] text-[#4a4a4a]">Blokuje promieniowanie UV, zapobiega nagrzewaniu auta</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-4 align-top font-bold border-b border-[#1e7a1f40] text-[#1a1a1a]"><strong>Dostępne warianty</strong></td>
                      <td className="p-4 align-top font-bold border-b border-[#1e7a1f40] text-[#1a1a1a]">Naturalne usłojenie drewna zabezpieczone impregnatem</td>
                      <td className="p-4 align-top font-bold border-b border-[#1e7a1f40] text-[#1a1a1a]">Wersje wykończenia: przezroczysta, mleczna, przydymiona</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className={styles.container}>
        <div className={styles.item}>
          <p className={styles.itemTitle}>
              ❄ ZIMA BEZ SKROBANIA 
          </p>
          <p className={styles.itemDescription}>
            Płyta poliwęglanowa chroni przed szronem i śniegiem. Nie skorbiesz szyb - wsiadasz i jedziesz.
          </p>
        </div>
        <div className={styles.item}>
          <p className={styles.itemTitle}>
              ☀ OCHRONA LAKIERU UV
          </p>
          <p className={styles.itemDescription}>
              Dach blokuje szkodliwe promieniowanie. Auto nie nagrzewa się, a lakier nie płowieje.
          </p>
        </div>
        <div className={styles.item}>
          <p className={styles.itemTitle}>
              🍂 CZYSTA KAROSERIA
          </p>
          <p className={styles.itemDescription}>
              Chroni przed zanieczyszczeniami, które niszczą powłokę lakierniczą.
          </p>
        </div>
      </div>
      <div className={`${styles.container} flex-col`}>
        <p className={`${styles.cardTitle} text-center`}>Zadaszenie z poliwęglanu jest dostępne w wersji:</p>
        <div className={styles.items}>
            <div className={styles.item}>
                 <p className={styles.itemTitle}>
                     Przezroczystej
                 </p>
                <div className={styles.imageWrapper}>
                    <Image fill src={'/wersje-materialow/przezroczysty.png'} style={{ objectFit: 'cover' }} alt='Przezroczyste materiały' />

                </div>
            </div>
            <div className={styles.item}>
                    <p className={styles.itemTitle}>
                        Mlecznej
                    </p>
                <div className={styles.imageWrapper}>
                    <Image fill src={'/wersje-materialow/mleczny.png'} style={{ objectFit: 'cover' }} alt='Mleczne materiały' />
                </div>
            </div>
            <div className={styles.item}>
                    <p className={styles.itemTitle}>
                        Przydymionej
                    </p>
                <div className={styles.imageWrapper}>
                    <Image fill src={'/wersje-materialow/przydymiony.png'} style={{ objectFit: 'cover' }} alt='Przydymione materiały' />
                </div>
            </div>
        </div>
      </div>

    </>
  )
}

export default Zalety
