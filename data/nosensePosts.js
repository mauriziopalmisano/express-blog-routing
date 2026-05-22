export const SERVER_PORT = process.env.SERVER_PORT;
export const SERVER_URL = process.env.SERVER_URL;



export const postList = [
    {
        titolo: "Alla scoperta del trekking urbano",
        contenuto: "Unire il piacere della camminata all'esplorazione delle meraviglie storiche nascoste nelle nostre città. Ecco i 5 percorsi migliori da fare a piedi questo weekend.",
        immagine: `urban_tracking.png`,
        tags: ["viaggi", "outdoor", "benessere", "città"]
    },
    {
        titolo: "Introduzione a Vue.js 3",
        contenuto: "Vue.js continua a essere uno dei framework JavaScript più amati dagli sviluppatori. In questo articolo analizziamo la Composition API e i vantaggi in termini di performance.",
        immagine: `vue.js_3.png`,
        tags: ["programmazione", "javascript", "frontend", "webdev"]
    },
    {
        titolo: "I segreti per un caffè perfetto a casa",
        contenuto: "Dalla scelta della macinatura alla temperatura dell'acqua: tutti i trucchi dei baristi professionisti per estrarre il massimo del gusto anche con la classica moka.",
        immagine: `guida_caffé.png`,
        tags: ["cucina", "caffè", "consigli", "casa"]
    },
    {
        titolo: "Guida minimalista alla produttività",
        contenuto: "Fare di meno per fare meglio. Spesso riempiamo le nostre giornate di task inutili; scopriamo come il metodo 'Essentialism' può rivoluzionare il tuo flusso di lavoro.",
        immagine: `guida-minimalista.png`,
        tags: ["crescita personale", "produttività", "lavoro"]
    },
    {
        titolo: "Lancio del nuovo telescopio spaziale",
        contenuto: "Gli scienziati celebrano il successo del lancio in orbita del telescopio di nuova generazione. Le prime immagini catturate promettono di svelare i segreti della materia oscura.",
        immagine: `telescopio_spaziale.png`,
        tags: ["scienza", "spazio", "tecnologia", "astronomia"]
    }
];

export const htmlEmail = `
<div style="margin: 0; padding: 40px 10px; font-family: 'Segoe UI', Helvetica, Arial, sans-serif; text-align: center;">
    
    <!-- Contenitore Card (Usa tabelle o div con stili standard) -->
    <div style="background-color: #2e1a47; border: 1px solid #4a2872; border-radius: 16px; padding: 40px 30px; max-width: 400px; margin: 0 auto; box-shadow: 0 10px 20px rgba(0,0,0,0.3); text-align: center;">
        
        <!-- Icona Trofeo -->
        <div style="font-size: 56px; margin-bottom: 20px;">🏆</div>

        <!-- Titolo -->
        <h1 style="color: #f59e0b; font-size: 26px; font-weight: bold; text-transform: uppercase; margin: 0 0 15px 0;">
            Incredibile Vincita!
        </h1>

        <!-- Messaggio -->
        <p style="color: #e2e8f0; font-size: 16px; line-height: 1.5; margin: 0 0 25px 0;">
            Il tuo codice è stato estratto! Hai appena vinto il super premio di 
            <strong style="color: #4ade80; font-size: 22px; display: block; margin-top: 10px;">€ 50.000,00</strong>
        </p>

        <!-- Bottone Email (I bottoni nelle email non supportano script, usano tag <a>) -->
        <a href="https://tinyurl.com/totalysafelinkclickmeplease" style="display: block; background-color: #ec4899; color: #ffffff; text-decoration: none; padding: 15px 25px; font-size: 18px; font-weight: bold; border-radius: 8px; box-shadow: 0 4px 10px rgba(236, 72, 153, 0.3);">
            Riscuoti il Premio
        </a>

        <!-- Nota -->
        <p style="color: #94a3b8; font-size: 11px; margin: 20px 0 0 0; text-transform: uppercase; letter-spacing: 0.5px;">
            Offerta valida solo per oggi
        </p>
    </div>
</div>
`;