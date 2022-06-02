import { Link } from "react-router-dom";
/* point1 */
import React, { useState } from "react";

const SignUp = () => {

    /* point2 */
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    /* ↓表示ボタンをクリックした時の処理 */
    const onClickDisplayValue = () => {
        var url = "https://api-for-missions-and-railways.herokuapp.com/users";
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                "name": name,
                "email": email,
                "password": pass
            }),
        }).then(response => response.json())
        .then(responseJson => {
            console.log(responseJson);
            let msg;
            if(responseJson.ErrorCode !== undefined){
                 msg = responseJson.ErrorMessageJP + "：入力内容を今一度ご確認ください。";
            }
            else{
                 msg = "登録に成功しました。<br>トークン：" + responseJson.token;
            }
            let msg_area = document.getElementById("msg");
            msg_area.textContent = msg;
        }).catch(error => this.setState({
                isLoading: false,
                message: 'Something bad happened ' + error
        }));
    }

    return (
        <>
            <h1>新規登録ページ</h1>
            <div>
                {/* point3 */}
                <p>氏名<input
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                /></p>
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
                <p>ログインは<Link to={`/login/`}>こちら</Link></p>
                <p><Link to={`/`}>ホームに戻る</Link></p>
            </div>
        </>
    );
};

export default SignUp;