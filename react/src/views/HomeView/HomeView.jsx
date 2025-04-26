import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import styles from './HomeView.module.css';

export default function HomeView() {
  const user = useContext(UserContext);

  return (
    <div>
      <main className={styles.main}>
        <section className={styles.hero}>
          <h1>Find Your Furry Friend Today!</h1>
          <p>Welcome to Gimme Shelter, where we're dedicated to finding forever homes for animals in need.</p>
          <p>Join us in our mission to rescue, rehabilitate, and rehome pets.</p>
        </section>

        <section className={styles.featuredPets}>
          <h2>FEATURED PETS</h2>
          <div className={styles.petFeatureCards}>
            <div className={styles.petFeatureCard}>
              <div className={styles.petFeatureImage}>
                <img src="https://hips.hearstapps.com/clv.h-cdn.co/assets/16/18/gettyimages-586890581.jpg?crop=0.668xw:1.00xh;0.219xw,0&resize=980:*" alt="Pet 1" />
                <span className={styles.petBadge}>PET OF THE MONTH</span>
              </div>
              <div className={styles.petFeatureInfo}>
                <h3>Max</h3>
                <p>Max is a lovable golden retriever who loves nothing more than snuggling up for belly rubs and playing fetch in the park.
                  With his fluffy coat and wagging tail, Max is sure to capture your heart. But what makes Max truly special is his story -
                  he was once a shelter dog who was overlooked and waiting for a forever home. But with the help of our rescue team, Max was given a second chance at happiness.
                  Now, he's looking for a family to shower him with love and attention.
                  Will you be the one to give Max the forever home he deserves?</p>
              </div>
            </div>
            <div className={styles.petFeatureCard}>
              <div className={styles.petFeatureImage}>
                <img src="https://www.river1467.com.au/wp-content/uploads/sites/29/2024/06/european-shorthair-8601492_640.jpg" alt="Pet 2" />
                <span className={styles.petBadge}>PET OF THE MONTH</span>
              </div>
              <div className={styles.petFeatureInfo}>
                <h3>Whiskers</h3>
                <p>Whiskers is a sassy and playful cat who loves to get into mischief. With her soft, grey fur and twitching whiskers, Whiskers is a ball of energy and curiosity.
                  But beneath her feisty exterior, Whiskers has a soft spot for snuggles and treats. Our rescue team found Whiskers wandering the streets alone,
                  but now she's looking for a cozy home where she can curl up in her favorite spot and purr the day away.
                  Whiskers would thrive in a quiet home with a patient owner who can appreciate her independent spirit.
                  If you're looking for a furry friend who will keep you on your toes, Whiskers might be the perfect fit!
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.bottomText}>
          <p>Thank you for considering adopting a pet from us! Every animal deserves a loving home.</p>
        </section>
      </main>
    </div>
  );
}
