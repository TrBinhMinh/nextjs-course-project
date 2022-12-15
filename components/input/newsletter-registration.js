import { useContext, useRef } from "react";
import classes from "./newsletter-registration.module.css";
import NotificationContext from "../../store/notification-context";

function NewsletterRegistration() {
  const emailInputRef = useRef();
  const context = useContext(NotificationContext);

  async function registrationHandler(event) {
    try {
      event.preventDefault();

      const emailInput = emailInputRef.current?.value;

      context.showNotification({
        title: "Signing up...",
        message: "Registering for newsletters.",
        status: "pending",
      });

      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: emailInput }),
      });
      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Something went wrong!");

      context.showNotification({
        title: "Success!",
        message: "Successfully registered for a newletter.",
        status: "success",
      });
    } catch (err) {
      context.showNotification({
        title: "Error!",
        message: err.message || "Something went wrong!",
        status: "error",
      });
    } finally {
      emailInputRef.current.value = "";
    }
  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            ref={emailInputRef}
            type="email"
            id="email"
            placeholder="Your email"
            aria-label="Your email"
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;
