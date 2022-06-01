import { Link } from "react-router-dom";
/* point1 */
import React, { useState } from "react";

const SignUp = () => {

    /* point2 */
    const [email, setEmail] = useState("");
    const [decideEmail, setDecideEmail] = useState("");
    const [pass, setPass] = useState("");
    const [decidePass, setDecidePass] = useState("");

    /* ↓表示ボタンをクリックした時の処理 */
    const onClickDisplayValue = () => {
        const mark = "●";
        let hiddenPass = mark.repeat(pass.length);
        let makedEmail = email + "@mail.com";
        setDecideEmail(hiddenPass);
        setDecidePass(makedEmail);
    }

    return (
        <>
            <h1>新規登録ページ</h1>
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
                <button onClick={onClickDisplayValue}>表示</button>
                {/* 表示部分 */}
                <p>パスワード：{decidePass}</p>
                <p>メールアドレス：{decideEmail}</p>
            </div>
            <div>
                <p>ログインは<Link to={`/login/`}>こちら</Link></p>
                <p><Link to={`/`}>ホームに戻る</Link></p>
            </div>
            <input type="text"></input>
        </>
    );
};

export default SignUp;