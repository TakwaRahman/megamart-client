import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { useLocation, useNavigate } from "react-router";

const Register = () => {
    const { signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/allProducts";

    const handleGoogleSignIn = async () => {
        try {
            const res = await signInWithGoogle();

            const user = {
                name: res.user.displayName,
                email: res.user.email,
                image: res.user.photoURL,
            };

            // 1. Save user in DB
            await fetch("http://localhost:3000/users", {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(user),
            });

            // 2. Get JWT token
            const tokenRes = await fetch("http://localhost:3000/jwt", {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify({ email: user.email }),
            });

            const tokenData = await tokenRes.json();

            if (tokenData.token) {
                localStorage.setItem("token", tokenData.token);
            }

            // 3. Navigate
            navigate(from, { replace: true });

        } catch (err) {
            console.log(err);
        }
    };

    return (
        <button onClick={handleGoogleSignIn}>
            Continue with Google
        </button>
    );
};

export default Register;