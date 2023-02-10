// == Imports globaux
import React from 'react';
import { Link } from 'react-router-dom';

// == Import propre au component
import './styles.css';

// Page de connexion
const SignIn = () => {
	return (
		<div className="signin-container">
			<div className="right-container">
				<span>Dys en image qui fait quelque chose</span>
			</div>
			<div className="left-container">
				<form action="" method="post" className="form-example">
					<div className="form-example">
						<label htmlFor="name">Pseudo ou mail ? </label>
						<input type="text" name="name" id="name" required />
					</div>
					<div className="form-example">
						<label htmlFor="email">Mot de passe </label>
						<input type="email" name="email" id="email" required />
					</div>
					<div>
						<input type="checkbox" id="remind-me" name="remind-me" />
						<label htmlFor="remind-me">Se souvenir de moi</label>
						<span>Mot de passe oublié ?</span>
					</div>
					<div className="form-example">
						<input type="submit" value="Se connecter" />
					</div>
				</form>
				<div className="facebookOUGoogle">
					<button>Facebook</button>
					<button>Google</button>
				</div>
				<div>
					<span>Pas encore inscrit ? <Link to="/signup">S&apos;inscrire ici.</Link></span>
				</div>
			</div>
		</div>
	);
};

export default SignIn;