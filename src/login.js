import { Link } from "react-router-dom";
import React, { useState } from "react";

const Login = () => {
	//フック変数を宣言
	const [email, setEmail] = useState("");
	const [pass, setPass] = useState("");

	let baseUrl = "https://api-for-missions-and-railways.herokuapp.com";
	
	//ログイン処理
	async function login(){
		let parameter = {
			"email":email,
			"password":pass
		}
		let jsonParameter = JSON.stringify(parameter);
		let token;
		//サインインする
		await fetch(baseUrl + "/signin",{
			method:"POST",
			body: jsonParameter
		}).then(
			response => response.json()
		).then(function(responseJson){
			token = responseJson.token;
		}).catch(function(error){
			console.log(error);
		});
		//トークンを用いて名前を取り出す。
		fetch(baseUrl + "/users",{
			method:"GET",
			headers:{
				Authorization: "Bearer " + token
			}
		})
		.then(res => res.json())
		.then(function(json){
			console.log(json);
		}).catch(function(error){
			console.log(error);
		});	
	}

	const onClickDisplayValue = () => {
		login();
	}	

	return (
		<>
			<h1>ログインページ</h1>
			<div>
				{/* point3 */}
				<p>メールアドレス<input
					type="text"
					value={email}
					onChange={(event) => setEmail(event.target.value)}
				/></p>
				<p>パスワード<input
					type="text"
					value={pass}
					onChange={(event) => setPass(event.target.value)}
				/></p>
				<button onClick={onClickDisplayValue}>登録</button>
			</div>
			<p id="msg"></p>
			<div>
				新規登録は<Link to={`/signUp/`}>こちら</Link>
			</div>
			<div>
				<Link to={`/`}>ホームに戻る</Link>
			</div>
		</>
	);
};

export default Login;