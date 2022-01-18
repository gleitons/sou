// function verImagem() {
//     AgoraAguarde.innerHTML = `Agora Aguarde!`
//     euTedisse.innerHTML = `Carregando...`
//     bemPesada.innerHTML = `Eu te Disse, ela é bem Pesada...`
//     var  img = document.querySelector('img#imagemPesada')
//     img.setAttribute('src', 'imagem/bem-pesasa.gif') 
   
    
// }

function randomImagenindex() {

    const nAleatorio = (Math.random() * 119).toFixed(0,2);
    var  trocaImage = document.querySelector('img#trocaImage')

    const selecaoStick = (Math.random() * 7).toFixed(0,2);
    const frasesR = (Math.random() * 141).toFixed(0,2);


    const randomFrase = frases(parseInt(frasesR));

    
    
    


    if (selecaoStick == 1){
        if (nAleatorio <= 68) {
            trocaImage.setAttribute('src', `random/${nAleatorio}.webp`);
        } else {
            const nAleatorio = (Math.random() * 68).toFixed(0,2);
            trocaImage.setAttribute('src', `random/${nAleatorio}.webp`);
        }
        

    } else if (selecaoStick == 2){
        if (nAleatorio <= 118) {
            trocaImage.setAttribute('src', `random/bebe_${nAleatorio}.webp`);
        } else {
            const nAleatorio = (Math.random() * 118).toFixed(0,2);
            trocaImage.setAttribute('src', `random/bebe_${nAleatorio}.webp`);
        }
        
    } else if (selecaoStick == 3){
        if (nAleatorio <= 93) {
            trocaImage.setAttribute('src', `random/meme_${nAleatorio}.webp`);
        } else {
            const nAleatorio = (Math.random() * 93).toFixed(0,2);
            trocaImage.setAttribute('src', `random/meme_${nAleatorio}.webp`);
        }
        
    } 
    else if (selecaoStick == 4){
        if (nAleatorio <= 119) {
            trocaImage.setAttribute('src', `random/memegatos_${nAleatorio}.webp`)
        } else {
            const nAleatorio = (Math.random() * 119).toFixed(0,2);
            trocaImage.setAttribute('src', `random/memegatos_${nAleatorio}.webp`)
        }
        
    } 
    else if (selecaoStick == 5){
        if (nAleatorio <= 119) {
            trocaImage.setAttribute('src', `random/memegatos2_${nAleatorio}.webp`);
        } else {
            const nAleatorio = (Math.random() * 119).toFixed(0,2);
            trocaImage.setAttribute('src', `random/memegatos2_${nAleatorio}.webp`);
        }
    } 
    else if (selecaoStick == 6){
        if (nAleatorio <= 119) {
            trocaImage.setAttribute('src', `random/animals2_${nAleatorio}.webp`);
        } else {
            const nAleatorio = (Math.random() * 119).toFixed(0,2);
            trocaImage.setAttribute('src', `random/animals2_${nAleatorio}.webp`);
        }
        
    } 
    else if (selecaoStick == 7){
        if (nAleatorio <= 83) {
            trocaImage.setAttribute('src', `random/ale_${nAleatorio}.webp`);
        } else {
            const nAleatorio = (Math.random() * 83).toFixed(0,2);
            trocaImage.setAttribute('src', `random/ale_${nAleatorio}.webp`);
        }
        
    } else {
        if (nAleatorio <= 119) {
            trocaImage.setAttribute('src', `random/animals_${nAleatorio}.webp`);
        } else {
            const nAleatorio = (Math.random() * 119).toFixed(0,2);
            trocaImage.setAttribute('src', `random/animals_${nAleatorio}.webp`);
        }
    }
    


    //imagePesada.innerHTML = `${imrandom}`
    frasesLoucas.innerHTML = `${randomFrase}`
    
    
}
// function voltaMesscima() {
//     randomImagen()
//     const idImageFL = document.getElementById('frasesLoucas');
//     idImageFL.classList.remove('DNone');

//     return idImageFL;
    
// }

function randomImagen() {
    
    const nAleatorio = (Math.random() * 119).toFixed(0,3);
    var  trocaImage = document.querySelector('img#trocaImage');    

    const selecaoStick = (Math.random() * 7).toFixed(0,2);
    const frasesR = (Math.random() * 247).toFixed(0,3);   


    const randomFrase = frases(parseInt(frasesR));

    frasesLoucas.innerHTML = `${randomFrase}`
    frasesLoucasB.innerHTML = `${randomFrase}`
    fraseHash.innerHTML = `${randomFrase}`


    if (selecaoStick == 1){
        if (nAleatorio <= 69) {
            trocaImage.setAttribute('src', `random/${nAleatorio}.webp`);
        } else {
            const nAleatorio = (Math.random() * 69).toFixed(0,2);
            trocaImage.setAttribute('src', `random/${nAleatorio}.webp`);
        }
        

    } else if (selecaoStick == 2){
        if (nAleatorio <= 118) {
            trocaImage.setAttribute('src', `random/bebe_${nAleatorio}.webp`);
        } else {
            const nAleatorio = (Math.random() * 118).toFixed(0,3);
            trocaImage.setAttribute('src', `random/bebe_${nAleatorio}.webp`);
        }
        
    } else if (selecaoStick == 3){
        if (nAleatorio <= 93) {
            trocaImage.setAttribute('src', `random/meme_${nAleatorio}.webp`);
        } else {
            const nAleatorio = (Math.random() * 93).toFixed(0,2);
            trocaImage.setAttribute('src', `random/meme_${nAleatorio}.webp`);
        }
        
    } 
    else if (selecaoStick == 4){
        if (nAleatorio <= 119) {
            trocaImage.setAttribute('src', `random/memegatos_${nAleatorio}.webp`)
        } else {
            const nAleatorio = (Math.random() * 119).toFixed(0,3);
            trocaImage.setAttribute('src', `random/memegatos_${nAleatorio}.webp`)
        }
        
    } 
    else if (selecaoStick == 5){
        if (nAleatorio <= 119) {
            trocaImage.setAttribute('src', `random/memegatos2_${nAleatorio}.webp`);
        } else {
            const nAleatorio = (Math.random() * 119).toFixed(0,3);
            trocaImage.setAttribute('src', `random/memegatos2_${nAleatorio}.webp`);
        }
    } 
    else if (selecaoStick == 6){
        if (nAleatorio <= 119) {
            trocaImage.setAttribute('src', `random/animals2_${nAleatorio}.webp`);
        } else {
            const nAleatorio = (Math.random() * 119).toFixed(0,2);
            trocaImage.setAttribute('src', `random/animals2_${nAleatorio}.webp`);
        }
        
    } 
    else if (selecaoStick == 7){
        if (nAleatorio <= 83) {
            trocaImage.setAttribute('src', `random/ale_${nAleatorio}.webp`);
        } else {
            const nAleatorio = (Math.random() * 83).toFixed(0,2);
            trocaImage.setAttribute('src', `random/ale_${nAleatorio}.webp`);
        }
        
    } else {
        if (nAleatorio <= 119) {
            trocaImage.setAttribute('src', `random/animals_${nAleatorio}.webp`);
        } else {
            const nAleatorio = (Math.random() * 119).toFixed(0,2);
            trocaImage.setAttribute('src', `random/animals_${nAleatorio}.webp`);
        }
    }
    


    //imagePesada.innerHTML = `${imrandom} ${randomFrase}`
    fraseHash.innerHTML = `${randomFrase}`
    //voltaMesscima();
}
function outraideia() {
    location.reload();
}

function removeDiv() {
    const idImageFL = document.getElementById('frasesLoucas');
    idImageFL.addEventListener('click', 
    idImageFL.classList.add('DNone'));

    
}
function removeDivB() {
    const idImageFL = document.getElementById('frasesLoucasB');
    idImageFL.addEventListener('click', 
    idImageFL.classList.add('DNone'));
}




function frases(Snumero) {
    const frasesOpen =  ["Falaram para eu devia seguir os meus sonhos, então eu virei pro lado e continuei dormindo. ", 
    "Eu sou uma pessoa extremamente tolerante, desde que tudo saia exatamente como eu quero. 😅", 
    "Tudo que vai, volta. Menos as canetas que eu emprestei na sala de aula…", 
    "Os seus segredos estão seguros comigo. Eu não estava nem escutando…",
    "Ser adulto é como estar constantemente tentando dobrar um lençol de elásticos.",
    "Três palavras que me resumem: tô com fome! 🤤🤤",
    "Juro que não te deixei no vácuo… É que eu respondi por telepatia. 🤔🤗",
    "Quem curte balada é adolescente, adulto gosta é de dormir com os boletos pagos.",
    "Nasci para ser selvagem… Mas só até 10 horas da noite.",
    "Se eu concordasse com você, os dois estaríamos errados.",

    "Não siga as minhas pegadas, eu também estou perdido.",
    "Um sonho: ganhar dinheiro dormindo.",
    "A insônia te torna bom de matemática porque você passa a noite inteira tentando calcular quando tempo vai poder dormir. 😣",
    "Eu ando por aí como se estivesse tudo bem, mas no fundo, a minha meia está escorregando dentro do sapato. 😥",
    "O dinheiro não é tudo. Não se esqueça também do ouro, dos diamantes, da platina e das propriedades.",
    "Se eu fico com preguiça até de andar, imagina de correr atrás de alguém. 😁",
    "Se o cérebro fosse uma rede social, será que as pessoas iam começar a usar? 😋",
    "- Dói, né? - O quê? - Deitar no sofá e lembrar que esqueceu o controle.",
    "Se você não consegue rir de si mesmo, eu posso fazer isso por você. 😂",
    "Tem coisas nessa vida que eu apenas visualizo e não respondo.",


    "Eu fui procurar o que era melhor pra mim e acabei abrindo a geladeira. 🍕🍔🥪",

    "O bom senso é como desodorante. As pessoas que mais precisam nunca usam.",

    "Eu achava que era uma pessoa indecisa, mas agora não tenho a certeza. 🤨😮",

   " Podemos começar o final de semana de novo? É que eu estava distraído… 😏",

    "Os trabalhos em grupo me ajudaram a entender por quê o Batman trabalha sozinho.",

    "O mal da galinha é achar que todo galo canta pra ela. 😉",

   " Se eu ganhasse o prêmio de pessoa mais preguiçosa, tinha que pedir pra alguém ir pegar.",
    "Eu sou um exemplo para os outros… Um mau exemplo, é claro.",

    "O problema é que todo mundo quer um relacionamento sério e eu sou uma pessoa muito engraçada. 😎",

    "Você não vale o tempo que eu passei perto da tomada carregando a bateria do celular.",

    "Peguei no gelo que você me deu e fiz uma caipirinha! 🍸",


    "O segredo é amar a próxima, porque a anterior não merecia! 🤣",

    "Não é que eu seja teimoso, eu só estou sempre certo.",

    "Uma vez eu tentei ser normal… Foram os piores 2 minutos da minha vida!",

    "Na vida, assim como na geladeira: o que está no interior é que importa. 💕",
    "Fofoqueira? Eu sou historiadora da vida alheia! 🤓📚",

    "Se você é uma dessas pessoas que não tem sorte, quando vir a luz no fim do túnel… Corra, pois é um trem.",

    "Inveja de você? Inveja eu sinto do meu cachorro, que come, passeia e dorme o dia inteiro.",

    "Uma história de terror em três palavras: hoje é segunda. 😱😱😱",

    "Fácil é fazer miojo... Viver é complicado!",

    "Você passa o dia com sono, aí quando deita na cama fica com vontade de fazer um bolo, escrever um livro e aprender cinco idiomas novos.",

    "Precisamos inventar um dia novo entre sábado e domingo.",

    "Na minha situação atual, se eu for cortar uma cebola, é ela que chora. 😆😅🤣",

    "Quem inventou o trabalho não tinha o que fazer.",

    "Aqui o rosto é de gatinha, mas a fúria é de leão! 🦁",

    "Tudo passa… Nem que seja por cima de você... 😜",

    "Muita interessante a sua opinião, só tem uma coisa: eu não pedi.",

    "Os primeiros cinco dias da semana são sempre os mais complicados.",

    "Metade de mim é preguiça… E a outra metade também. 💤💤💤",

    "Você fala que é “procrastinação”, mas eu prefiro chamar de “motivação seletiva”.",

    "Estado civil: num relacionamento à distância com a minha cama. ",

    "Namore alguém que espere por você como eu espero pela sexta-feira. 😍🥰",

    "O rostinho pode ser de moça, mas a dor nas costas é de idosa.",

    "Saudade de ir no barzinho com os amigos e passar várias vergonhas, né, minha filha? 🤩",

    "Batatinha quando nasce, se esparrama pelo chão… Eu quando me apaixono, quebro a cara e o coração.",

    "Algumas pessoas são como nuvens: é só irem embora e o dia fica lindo.",

    "Descobri um lugar ótimo para você ficar: na sua. 😒",

    "Se quer falar de mim, fala na cara. Nas costas pode fazer uma massagem.",

    "Meu cupido anda mais preguiçoso que eu! 🥱😥",

    
    "Uma série que eu estou assistindo? A série de erros que cometi na minha vida. 🙃",

    "Hoje estou muito ocupada... Fazendo vários nadas.",

    "As pessoas esquecem mais de mim que da letra do hino nacional.",

    "Quem ri por último, não entendeu a piada.",

    "Só tem uma coisa pior que acordar cedo: feriado no domingo!",

    "Será que Deus me desenhou no Paint? 😛",

    "Meu cupido deve ser gari porque ele só me traz lixo.",

    "Antes eu era arrogante, mas hoje em dia sou perfeito.",

    "A preguiça é a mãe de todos os vícios e, como mãe, ela merece ser respeitada!",

    "Lembre-se sempre de que você é único. Assim como todo mundo.",

    "Tem gente que gosta tanto de Carnaval, que vive o ano inteiro de máscara. 🤡",

    "Eu estou precisando de umas férias de 6 meses… Duas vezes por ano!",

    "Sabe aqueles dias em que você acorda cheio de energia para arrumar a casa? Nunca aconteceu comigo, mas deve ser ótimo. 😌",

    "Quem é casado há quarenta anos com dona Maria não entende de casamento, entende de dona Maria. De casamento entendo eu, que tive seis.",

    "Aí você vai na cozinha de madrugada cantando música de Deus... Pra disfarçar o medo do capeta!",


    "Hoje está um dia maravilhoso para você me deixar em paz. 😄",

    "Você se chama Google? Porque você é tudo que eu procuro.",

    "Livrai-me do todo mal: amado, olhado e humorado, amém.",

    "Chato - Indivíduo que tem mais interesse em nós do que nós temos nele.",
    "Estou começando a achar que a minha metade da laranja já virou suco. 🍊🧡",

    "O problema das mentes fechadas é que elas geralmente vêm acompanhadas de uma boca aberta.",

    "Se ferradura desse sorte, burro não puxava carroça!",

    "Era um menino tão mau que só se tornou radiologista para ver a caveira dos outros.",

    "Desculpa o meu atraso, é que eu não queria vir.",

    "Na frase “ele acordou cedo”, o sujeito se encontra… Com sono.",

    "Tá feliz? Sobe na balança que isso passa! 😚",

    "Não mando indiretas. Apenas falo algumas realidades discretamente na cara da pessoa sem a mínima intenção de que ela perceba.",

    "Infelizmente, eu não vou poder ir... Porque não quero!",

    "No dia em que a sua opinião for um bolo de chocolate, eu vou querer.",

    "Ironia é igual blush: não sabe, não usa.",
    "Voltar para você? Desculpa, mas eu não achei o meu coração no lixo. 😷",

    "No teatro da vida, o papel de trouxa é meu. 🤡🤡🤡",

    "Eu posso ser 100% saudade, mas sou 200% orgulho.",

    "Só existem dois tipos de pessoas: as que concordam comigo e as que estão erradas.",

    "Querida matemática: por favor, seja adulta e resolva os seus problemas sozinha.",

    "O cachorro do meu marido não faz nada que eu peço… É por isso que eu prefiro gatos.",
    "A sua opinião é muito importante para mim. Por isso guarde-a até o dia que eu pedir para você!",

    "Algumas pessoas são perfeitas como vinho. Ficam melhores com uma rolha na boca.",

    "Apenas seis pessoas sofrem quando a economia está ruim: eu, tu, ele, nós, vós e eles.",

    "Acredite, dias melhores estão por vir! Eles se chamam, sábado, domingo e feriado.",
    "Estou fazendo uma nova dieta. É a dieta da fé. Como de tudo e espero que o milagre seja realizado.",
    "O alcoolismo mata lentamente, bebo pra não morrer de repente.",

    "Eu até tenho controle, o problema é que tô sem pilha.",
    "É melhor chegar atrasado nesta vida do que adiantado na outra.",

    "Em pane de avião ninguém é ateu.",

    "O preço é uma prece... Pague pra ver.",

    "Na frase “eu adoro segunda-feira” o sujeito ou é louco, ou é aposentado ou tá de férias.",

    "Não preciso ativar minha localização. Todo mundo sabe que eu tô na sua.",

    "Hoje é seu aniversário? Porque você está de parabéns.",

   " O meu maior problema é que meu namorado mora muito longe. Eu moro aqui e ele mora no futuro.",

    "Você acredita em amor à primeira vista ou vai ter que passar por aqui mais vezes?",

    "Você tem uma colher aí? Hoje eu estou dando sopa.",

    "Você concorda que 'agente' junto é erro de português e 'a gente' separado é erro do destino?",

    "Seu nome é mentira? Porque você é muito linda para ser verdade.",

    "Você trabalho no Google? Porque você tem tudo que eu procuro.",

    "Tantos erros que cometemos na vida. O que custa eu ser mais um?",

    "Toda pessoa pública é antes uma privada.",
    "Se ferradura desse sorte burro não puxava carroça!",

    "Em briga de saci qualquer chute é uma voadora.",

    "Quem cedo madruga passa o dia com sono.",

    "Prefiro ser um bêbado conhecido do que um alcoólatra anônimo.",

    "Meu ponto fraco tem nome, endereço e um sorriso lindo.",

    "Se eu te cortei da minha vida existe uma grande chance de você ter me dado a tesoura.",

    "Tem gente que gosta tanto de Carnaval, que passa o ano inteiro de máscara.",

    "Quanto tempo eu vou ter que usar capacete para me proteger da queda que eu tenho por você?",

    "Apaixonada, saquei minha arma, minha alma, minha calma: só você não sacou nada ainda.",

    "Não deixe de perdoar os seus inimigos - nada os irrita tanto.",

    "O mundo pode ser um palco. Mas o elenco é um horror.",

    "Um homem entra em um restaurante francês e pergunta para o garçom: \“você tem pernas de sapo?\" O garçom olha ofendido para o cliente e diz: \“não, eu sempre andei desse jeito\”.",

    "Um casal vai ao cinema. O homem diz: \“dois ingressos, por favor\”. \"Hobbit?\” pergunta o jovem da bilheteria. Não, essa é minha esposa.",

    "Dizem que é ofensivo falar com a boca cheia. Pessoalmente, eu acho pior falar com a cabeça vazia.",

    "Como você chega em uma garota em um bar? Pegue alguns cubos de gelo e triture na frente dela.Depois diga: \“Agora que quebrei o gelo, posso te pagar uma bebida?\”",

    "Um homem vai a uma loja da Samsung para comprar um novo celular. \“Modelo?\”, pergunta a atendente Não, eu sou encanador, mas muito obrigado.",

    "Se um pato perde a pata ele fica manco ou viúvo?",

    "Por que o quadro negro é verde e o milho verde é amarelo?",

    "Se as pessoas vieram dos macacos, por que ainda existem macacos?",

    "Como um vinho pode ser seco, sendo líquido?",

    "O que veio primeiro: a cor laranja ou a fruta?",

    "Em briga de saci qualquer chute é uma voadora.",

    "Se ferradura desse sorte burro não puxava carroça!",
    "Quem cedo madruga passa o dia com sono.",
    "Dívida para mim é sagrada. Deus lhe pague!",
    "Será que a cabeça de alguém já explodiu de tanto pensar?",
    "Me mata mas não fala que precisa conversar mais tarde.",
    "Mandei mensagem tem quinze minutos e ela não me respondeu. Será que aconteceu alguma coisa?",
    "Mas tá certinho, né? Precisa mudar alguma coisa? Refazer algo?",
    "Vou terminar aqui, aí vou ali fazer aquilo e depois vou fazer aquelas três coisas e depois...",
    "Nossa, mas não vou chegar em 20 minutos NUNCA.",
    "Minha cabeça vai explodir de tanto que pensei naquilo.",
    "Eu queria tanto ser daquelas pessoas que não planejam nada e deixam a vida levar.",
    "Será que eu tranquei a porta? E se eu não tranquei?",
    "Se minha vida dependesse de ter que dormir cedo eu já estaria morta.",
    "\"Realmente não funciono sobre pressão\", já sentindo o braço formigar.",
    "Como que pode dormir doze horas e acordar completamente cansado?",
    "Tô tranquilo. Sério, tô tranquilo MESMO. Sério, dessa vez vai ser diferente. Tranquilão aqui",
    "Acabei de ver a pessoa mais inteligente quando estava na frente do espelho.",
    " Eu perderia peso, mas odeio perder.",
    " Eu sigo a citação, “Sempre seja verdadeiro consigo mesmo” porque eu apenas minto para os outros!",
    " Eu gostaria de poder silenciar as pessoas na vida real.",
    " Não procuro problemas. Os problemas geralmente me encontram.",
    " Prezados problemas … Por favor, dê-me algum desconto … Sou seu cliente regular.",
    " Siga meu conselho, eu não uso mesmo.",
    " Nunca ria das escolhas de sua esposa. Você é um deles.",
    " O amor pode ser cego, mas o casamento é uma verdadeira revelação.",
    " Você nunca pode comprar amor, mas ainda assim terá que pagar por ele.",
    " Sou tão pobre que não consigo nem prestar atenção!",
    " Sou muito preguiçoso para deixar de ser preguiçoso.",
    " Eu realmente quero trabalhar muito. Mas ser preguiçoso é muito divertido.",
    " Se eu ganhasse o prêmio por preguiça, mandaria alguém buscar para mim.",
    " Não sou preguiçoso, estou no modo de economia de energia.",
    " Não sou preguiçoso, prefiro o termo “participação seletiva”.",
    " Não sou preguiçoso, apenas muito relaxado.",
    " Não estou fugindo do trabalho duro, tenho preguiça de correr.",
    " A preguiça é a mãe de todos os maus hábitos, mas em última análise ela é mãe e devemos respeitá-la!",
    " Nunca desista de seus sonhos, continue dormindo.",
    " Comprar é uma arte. Eu sou um artista. Respeite, por favor.",
    " Eu realmente preciso de um dia entre sábado e domingo.",
    " Eu amo meu trabalho apenas quando estou de férias.",
    " Sempre chego tarde ao escritório, mas compenso saindo mais cedo.",
    " 3 palavras mais bonitas para uma mulher casada do que EU TE AMO: Sem Culinária Hoje.",
    " Atrás de todo homem de sucesso há uma mulher surpresa.",
    " Atrás de cada grande homem há uma mulher revirando os olhos.",
    " O homem é a cabeça, mas a mulher é o pescoço. E ela pode virar a cabeça do jeito que quiser.",
    " Você pode estar certo ou pode ser o marido.",
    " Na minha casa eu sou o chefe, minha esposa é apenas quem toma as decisões.",
    " Desculpas das mulheres: Sinto muito, mas foi sua culpa.",
    " Sim, claro que sou atlético… Navego na Internet todos os dias.",
    " Hoje de manhã quando eu estava dirigindo minha Ferrari, o alarme me acordou.",
    " Quero que alguém me dê um empréstimo e depois me deixe sozinho.",
    " Quanto mais rico você fica, mais cara se torna a felicidade.",
    " Sempre sonhei em ser milionário como meu tio! Ele também está sonhando.",
    " Falar sozinho porque sou meu próprio consultor.",
    " Claro que falo comigo mesmo. Às vezes preciso de conselhos de especialistas.",
    " Falo comigo mesmo porque gosto de lidar com uma classe melhor de pessoas.",
    " Eu não preciso de um cabeleireiro, meu travesseiro me dá um novo penteado todas as manhãs.",
    " Eu juro que meu travesseiro poderia ser um cabeleireiro. Sempre acordo com os penteados mais esquisitos.",
    " Não sou louco, prefiro o termo mentalmente hilário.",
    " A coisa mais difícil que já tentei foi ser normal.",
    " Fora de minha mente. Volto em cinco minutos.",
    " Olá! Whatsapp está me usando.",
    "​​Ei, você está lendo meu status de novo?",
    " A vida é muito curta. Não desperdice lendo meu status do Whatsapp.",
    " Ei você, sim, estou falando com você, por que diabos você está lendo meu status?",
    " Ei você, sim você. O único lendo isso. Quer saber um segredo? Você é linda. Nunca desista.",
    " Se você está lendo isso, tenho certeza de que não tem nada para fazer na vida.",
    " Então você está verificando meu status.",
    " Meu “visto pela última vez em” foi apenas para verificar o seu “visto pela última vez em”.",
    " Diga isso na minha cara, não através do seu status.",
    " Pare de verificar meu status melhor se você tiver o seu próprio.",
    " ESPERE! Você tem hora marcada para ver meu status.",
    " Nem sempre disponível. Tente sua sorte.",
    " Felicidade é quando “visto pela última vez em” muda para “online” e depois para “digitação”",
    " Bateria fraca, perturbe mais tarde.",
    " Pode parecer que não estou fazendo nada, mas na minha cabeça estou muito ocupado.",
    " Não banque o estúpido comigo, sou melhor nisso!",
    " Assim que param de falar com você, começam a falar sobre você.",
    " A vida dá obstáculos, mas sou um atleta. Então é divertido.",
    " A vida me ensinou muitas lições, mas também encerrei essas aulas.",
    " Eu realmente deveria fazer algo com minha vida … talvez amanhã.",
    " Fiz uma enorme lista de coisas para fazer hoje. Eu simplesmente não consigo descobrir quem vai fazer isso.",
    " Quando uma porta se fecha, outra porta deve ser aberta, mas se isso não acontecer, entre pela janela.",
    " Se o plano A falhar, lembre-se de que você tem 25 letras restantes.",
    " Às vezes, a vida lhe dá uma segunda chance porque talvez na primeira vez você não estivesse pronto.",
    " Sempre dê 100%, a menos que esteja doando sangue.",
    " Fui lembrado de que meu tipo de sangue é SEJA POSITIVO!",
    " Tenho sangue tipo O positivo, do qual me lembro por permanecer ‘otimista positivo’.",
    " Eu nasci para ser pessimista. Meu tipo de sangue é B negativo.",
    " Não é culpa do espelho se você não gosta do seu reflexo.",
    " Sou apenas um espelho para você, Você é bom, eu sou o melhor, Você é ruim, eu sou o pior.",
    " Não tenho tempo para odiar as pessoas que me odeiam porque estou ocupado amando as pessoas que me amam.",
    " Venha viver no meu coração e não pague aluguel.",
    " Caro stress, vamos terminar.",
    " Eu gostaria de ter um botão de exclusão na minha vida. Para apagar algumas pessoas, algumas memórias e alguns sentimentos.",
    " Eu gostaria de me desculpar com alguém a quem NÃO ofendi. Por favor, paciente, entrarei em contato com você em breve.",
    " Ter um filho faz de você um pai; Tendo dois, você é um árbitro.",
    " Alguém já percebeu que “ESTUDAR” é uma mistura de ESTUDO e MORRER?",
    " Estou física, emocional e mentalmente exausto.",
    " Fisicamente Mentalmente Emocionalmente CANSADO.",
    " Vida: Além da gravidade, nada me mantém no chão.",
    " Esperar até o filme começar a comer sua pipoca, a coisa mais difícil do mundo.",
    " Toda vez que tiro uma foto fico com fome porque ouço ‘queijo’, então começo a pensar em um bom sanduíche de queijo.",
    " Meus hobbies são café da manhã, almoço e jantar.",
    " Uma boa risada e um sono longo são as duas melhores curas para qualquer coisa.",
    " Nunca julgue o livro por seu filme.",
    " É sempre a pessoa errada que lhe ensina as coisas certas na vida.",
    " Eu sei quem eu sou, você não precisa explicar.",
    " Eu sou uma doce menina lil, mas se você me deixa louco, lembre-se que sempre tenho um bolso cheio de loucos esperando para sair!!",
    " Relaxe, é fim de semana, só não pisque ou tudo vai acabar."


    ];



    return frasesOpen[Snumero];
}