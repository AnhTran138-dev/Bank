import AuthForm from "@/components/auth-form";
import { getLoggedInUser } from "@/lib/actions/user.actions";

const SignUp = async () => {
  const isLogged = await getLoggedInUser();

  console.log(isLogged);

  return (
    <section className="flex-center size-full max-sm:px-6">
      <AuthForm type="sign-up" />
    </section>
  );
};

export default SignUp;
