import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
  const [state, handleSubmit] = useForm(process.env.FORM);

  if (state.succeeded) {
    return (
      <div>
        <button href="#" type="submit">
          back
        </button>

        <p>Thanks for your submission!;</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-black text-white h-50 w-50 justify-center items-center"
    >
      <label htmlFor="email" className="text-red-300">
        Email Address
      </label>
      <input id="email" className="text-red-300" type="email" name="email" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <label htmlFor="email" className="text-red-300">
        mess
      </label>
      <textarea className="text-red-300" id="message" name="message" />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
      <ValidationError errors={state.errors} />
    </form>
  );
}
