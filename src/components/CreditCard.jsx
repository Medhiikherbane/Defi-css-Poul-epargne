import "./CreditCard.css"


export default function CreditCard () {

    return (
        <div id="cardContainer">
                <div  className="recto">
                    <figcaption>
                        <div className="header">
                            <div className="debut">
            <img className="imgLogo" src="src/assets/poul'epargne.png" alt="" />
                <h3>POUL' <br /> EPARGNE</h3>
                </div>
            <img className="imgpoul" src="src/assets/Pouletvolant.png" alt="" />
            </div> <br />
                <div className="center">
            <img className="imgsc" src="src/assets/sanscontact.png" alt="" />
            <img className="puce" src="src/assets/puce.png" alt="puce" />
                </div>
                <h1>**** **** **** 8346</h1>
            <div className="footer">
            <img className="fleche" src="src/assets/insert.png" alt="" />
                <div className="date">
                <h3>CARTE DE CREDIT DEBIT</h3> <br />
                <h3>EXPIRE A FIN</h3>
                <h3>07/28</h3>
                </div>
                <div className="fin">
                <h2>MME GALINA C. NUGGETS</h2>
            <img className="visa" src="src/assets/visa.png" alt="" />
            </div>
                </div>
                    </figcaption>
            </div>

           
        </div>
    )
}




//Texte Recto

// POUL’ EPARGNE
// 1843 9236 0046 8346
// CARTE DE CREDIT DEBIT
// EXPIRE A FIN
// 07/28
// MME GALINA C. NUGGETS


//Texte Verso

// Pondu le 12/07/2024 à 21h04
// SIGNATURE DU TITULAIRE OBLIGATOIRE
// PE LIBRE REPONSE 50299 - 93755 PLUMEBOURG CEDEX.
// Important : carte strictement personnelle, propriété de la Poul’ Épargne émettrice qui peut la retirer à tout moment. Tout poulet trouvant cette carte est prié de bien vouloir l’adresser sous pli non affranchi à l’adresse ci dessus.