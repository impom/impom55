import { useState } from "react";
import { auth } from "../config/firebase";
import {createUserWithEmailAndPassword, reload} from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { getAuth, signOut } from "firebase/auth";


export const Auth = () => {
const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

//	console.log(auth?.currentUser?.email)

	const signIn = async() => {
			try{
				await signInWithEmailAndPassword(auth, email, password);
				window.alert('Sign In Successfull');
				document.getElementById("user").innerHTML = auth?.currentUser?.email + "			I Failed NNN Bro !! Thanks for checking my website";

			} catch(err) {
				console.error(err);
				alert("Sign in failed");
			}
		};

	const signUp = async () => {
		try {
		await createUserWithEmailAndPassword(auth, email, password);
		window.alert("Account created Successfully");
		document.getElementById("user").innerHTML = "Humm ebar sign in koro nonu ;)"
	} catch (err){
			console.error(err);
			window.alert("Failed to create account");
		}
	};

	const signingOut = async() => {
		try{
						if(auth?.currentUser?.email == undefined){
							alert("Sign in to karrle bc");
							
			}

			else{signOut(auth , email, password);
			alert("Signed Out Successfully");
			window.location.reload();
			}

		} catch(err){
			console.error(err);
			alert("Sign Out Failed");
		}
	};
	
	
	return (
	<div>
		<input placeholder="email" onChange={(e) => setEmail(e.target.value)} />
		<input placeholder="pass" onChange={(e) => setPassword(e.target.value)} />
		<button onClick={signUp}>Sign Up</button>
		<button onClick={signIn}>Sign In</button>
		<button onClick={signingOut}>Sign Out</button>
		<p id="user">Sign up kor sala :) Valid Email ar 6 digit password diye</p>
	</div>
	);
}