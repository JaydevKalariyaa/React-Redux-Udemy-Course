import NewsletterSignup from "../components/NewsletterSignup";
import PageContent from "../components/PageContent";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function NewsletterPage() {
  return (
    <PageContent title="Join our awesome newsletter!">
      <NewsletterSignup />
    </PageContent>
  );
}

export default NewsletterPage;

export async function action({ request }) {
  const data = await request.formData();
  const email = data.get("email");

  // send to backend newsletter server ...
  console.log(email);
  toast.success("Signup successful!");
  return { message: "Signup successful!" };
}
