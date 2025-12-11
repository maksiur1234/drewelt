import styles from '@/components/Homepage/Opinie/OpinieContent/OpinieContent.module.scss'

const reviews = [
  { id: 1, author: "Jan Kowalski", rating: 5, text: "Świetna obsługa! Polecam każdemu." },
  { id: 2, author: "Anna Nowak", rating: 4, text: "Bardzo dobre doświadczenie, szybko i profesjonalnie." },
  { id: 3, author: "Piotr Zieliński", rating: 5, text: "Rewelacja, na pewno wrócę ponownie!" },
];

const OpinieContent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        OPinie
      </div>
    </div>
  );
}

export default OpinieContent