import styles from "./HomePage.module.css";
import ShopIntro from "../../components/ShopIntro/ShopIntro";
import Footer from "../../components/Footer/Footer";

export default function HomePage() {
  return (
    <>
    <div className={styles.introDiv}>
      <ShopIntro />
    </div>
    <Footer />
    </>
  );
}
