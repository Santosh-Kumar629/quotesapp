const quotes = document.getElementById("quotes");
        const author = document.getElementById("author");
        const newQ = document.getElementById("newQ");
        let realData = "";
        let quotesData = "";
        const getNewQuotes=()=>{
            let rnum = Math.floor(Math.random()*20);
            quotesData = realData[rnum];
            quotes.innerText = `${quotesData.text}`;
            quotesData.author==null?(author.innerText="unknown"):(author.innerText=`${quotesData.author}`);
        };
        const getQuotes = async() =>{
            const api = "https://type.fit/api/quotes";
            try{
                let data = await fetch(api);
                realData = await data.json();
                getNewQuotes();
            }catch(error){}
        }
        newQ.addEventListener("click",getNewQuotes);
        getQuotes();