import { motion } from "framer-motion";

const Contacts = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1>Контакти</h1>
      <p>
        Ми готові відповісти на ваші запитання та зв'язатися з вами. Зв'яжіться
        з нами, використовуючи наступні контактні дані:
      </p>

      <div>
        <h2>Наша адреса:</h2>
        <p>Вул. Прикладна, 123, Київ</p>
      </div>

      <div>
        <h2>Електронна пошта:</h2>
        <p>
          <a href="mailto:info@example.com">info@example.com</a>
        </p>
      </div>

      <div>
        <h2>Телефон:</h2>
        <p>
          <a href="tel:+123456789">+12 345 67 89</a>
        </p>
      </div>
    </motion.div>
  );
};

export default Contacts;
