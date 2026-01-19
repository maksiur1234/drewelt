import styles from '@/components/Zadaszenia/Realizacje/Realizacje.module.scss'
import Link from 'next/link'

const Realizacje = () => {
  return (
    <div className={styles.container}>
       <h2 className={styles.title}>
            Dlaczego te konstrukcje przetrwają lata?
        </h2>

        <p>
            W <Link href={'/galeria'}>galerii Drewelt</Link> znajdziesz przykłady konstrukcji, które pokazują, jak <strong>budowa zadaszenia tarasu z drewna</strong> może odmienić przestrzeń wokół domu. Wśród wykonanych projektów znajdują się zarówno lekkie, minimalistyczne formy, jak i bardziej rozbudowane konstrukcje z szerokimi belkami, idealnie dopasowane do architektury budynku. Każdy <strong>dach tarasu z drewna</strong> powstaje na podstawie indywidualnych pomiarów, dzięki czemu proporcje, układ słupów oraz sposób mocowania harmonizują z elewacją i otoczeniem. W realizacjach widać również różnorodność zastosowanych rozwiązań – od zadaszeń montowanych przy nowoczesnych domach z dużymi przeszkleniami, po konstrukcje tworzone przy budynkach o bardziej tradycyjnym charakterze. To potwierdza, że <strong>drewniane zadaszenie tarasu na wymiar</strong> pozwala uzyskać efekt spójny z każdym stylem architektonicznym. Jeśli chcesz, aby Twoja przydomowa przestrzeń wyglądała równie efektownie – <Link href={'/kontakt'}>skontaktuj się z nami</Link> i zamów projekt dopasowany do otoczenia.
        </p>
    </div>
  )
}

export default Realizacje
