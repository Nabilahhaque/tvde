/* ==========================================
   LOGIN
========================================== */

const correctUsername = "admin/naeem";
const correctPassword = "semicolon";


const loginForm =
    document.getElementById("loginForm");


if (loginForm) {

    loginForm.addEventListener(
        "submit",
        function(e) {

            e.preventDefault();

            const username =
                document.getElementById(
                    "username"
                ).value.trim();

            const password =
                document.getElementById(
                    "password"
                ).value;


            if (
                username === correctUsername &&
                password === correctPassword
            ) {

                sessionStorage.setItem(
                    "loggedIn",
                    "true"
                );

                window.location.href =
                    "menu.html";

            } else {

                document.getElementById(
                    "loginError"
                ).innerText =
                    "Incorrect username or password.";

            }

        }
    );

}


/* ==========================================
   QUESTIONS
========================================== */

const questions = [

    {
        question:
            "Qual é a idade máxima permitida para veículos utilizados no âmbito da TVDE?",
            image: "q1.jpg",

        options: [
            "5 ANOS",
            "10 ANOS",
            "7 ANOS",
            
        ],

        answer: 2
    },


    {
        question:
            "A correta pressão dos pneus contribui para uma condução mais económica.",
             image: "q2.jpg",

        options: [
            "Verdadeiro",
            
            "Falso",
            
        ],

        answer: 0
    },
     {
     question:
            "Quando um peão atravessa numa passagem para peões, o motorista deve:",
             image: "p1.jpg",


        options: [
            "Reduzir a velocidade, mas continuar.",
            " Acelerar para passar antes do peão.",
            "Parar e deixar o peão atravessar.",
            
            
        ],

        answer: 2
    },


    {
        question:
            "Quando é permitido ultrapassar pela direita?",
              image: "q3.jpg",

        options: [
            "Quando o veículo da frente circula lentamente.",
            "Quando o veículo da frente sinaliza que vai virar à esquerda.",
            "Em qualquer situação",
            
        ],

        answer: 1
    },


    {
        question:
            "O que deve respeitar em primeiro lugar?",
             image: "q4.jpg",

        options: [
            "Os sinais luminosos.",
            "As marcas rodoviárias.",
            "As ordens da polícia.",
            
        ],

        answer: 2
    },


    {
        question:
            "A que distância deve colocar o triângulo de pré-sinalização de perigo em caso de avaria?",
             image: "q5.jpg",

        options: [
            "Pelo menos 10 metros.",
            "Pelo menos 50 metros.",
            "Pelo menos 30 metros.",
            
        ],

        answer: 2
    },

    

    {
        question:
            "A velocidade deve ser adequada:",
             image: "q6.jpg",

        options: [
            "Apenas ao limite máximo permitido.",
            "Às condições da estrada e do trânsito.",
            "À vontade do condutor.",
            
        ],

        answer: 1
    },


    {
        question:
            "Um motorista de TVDE pode conduzir com uma taxa de alcoolemia de 0,2 g/l.",
            image: "q7.jpg",


        options: [
            "Sim, se estiver em boas condições físicas.",
            "Não.",
            "Sim, because é um valor permitido.",
            
        ],

        answer: 1
    },


    {
        question:
            "O tempo de espera para passageiros com mobilidade reduzida deve ser:",
             image: "q7.jpg",

        options: [
            "Superior a 30 minutos.",
            "Superior a 15 minutos.",
            "Inferior a 15 minutos.",
            
        ],

        answer: 2
    },


    {
        question:
            "A condução sob a influência do alcool provoca no condutor a diminuição dos reflexos.",
             image: "q7.jpg",


        options: [
            "Falso",
            "Verdadeiro",
            
            
        ],

        answer: 1
    },


    {
        question:
            "Os princípios gerais do socorrismo são:",
             image: "q7.jpg",


        options: [
            "Prever, ajudar e socorrer.",
            "Parar, socorrer e alertar.",
            "Prevenir, alertar e socorrer.",
            
        ],

        answer: 2
    },


     {
        question:
            "Um motorista deve comportar-se de forma?",
             image: "q7.jpg",


        options: [
            "Agressiva.",
            "Passiva.",
            "Assertiva.",
            
            
        ],

        answer: 2
    },



    {
        question:
            "Em caso de acidente com o seu veículo, deve:",
             image: "q7.jpg",


        options: [
            "Sair rapidamente do veículo sem avisar outros condutores.",
            "Garantir a segurança no local, sinalizar e ligar para o 112.",
            "Resolver a situação sozinho, sem pedir ajuda.",
            
            
        ],

        answer: 1
    },



    {
        question:
            "Em caso de queimadura deve:",
             image: "q7.jpg",


        options: [
            "Lavar a zona afetada com água quente.",
            "Furar as bolhas existentes.",
            "Evitar tocar diretamente na área queimada.",
            
            
        ],

        answer: 2
    },




    {
        question:
            "O que deve fazer para diminuir as emissões de poluentes?",
             image: "q7.jpg",


        options: [
            "Conduzir com o motor a altas rotações.",
            "Fazer a manutenção regular do veículo.",
            "Andar sempre com o ar condicionado ligado.",
            
            
        ],

        answer: 1
    },





    {
        question:
            "Chamamos feedback:",
             image: "q7.jpg",


        options: [
            "À resposta ou reação da pessoa à mensagem.",
            "Ao início de uma conversa.",
            "À forma como utilizamos o tom de voz.",
            
            
        ],

        answer: 0
    },
     
    
      {
     question:
            "Um motorista de TVDE pode conduzir com uma taxa de alcoolemia de 0,2 g/l.",
             image: "q7.jpg",


        options: [
            "Sim, se estiver em boas condições físicas.",
            "Não. ",
            "Sim, because é um valor permitido.",
            
            
        ],

        answer: 1
    },



    {
     question:
            "Uma das funções importantes da comunicação é transmitir conhecimento.",
             image: "q7.jpg",


        options: [
            "Verdadeiro",
            "Falso ",
            
            
            
        ],

        answer: 0
    },




    {
     question:
            "Qual a velocidade máxima permitida a um automóvel ligeiro dentro de uma localidade?",
             image: "q7.jpg",


        options: [
            "50 Km/h",
            "60 Km/h ",
            "90 Km/h",
            
            
        ],

        answer: 0
    },




    {
     question:
            "Os motoristas de veículos TVDE não podem conduzir mais de 10 horas por dia, independentemente do número de plataformas para as quais exercerem a atividade.",
             image: "q7.jpg",


        options: [
            "Verdadeiro",
            "Falso ",
            
            
            
        ],

        answer: 0
    },



    {
     question:
            "O que é o ruído na comunicação?",
             image: "q7.jpg",


        options: [
            "Uma conversa entre duas pessoas.",
            "Algo que dificulta a compreensão da mensagem. ",
            "O som do rádio.",
            
            
        ],

        answer: 1
    },



    {
     question:
            "O serviço de TVDE só pode ser contratado através de plataforma eletrónica.",
             image: "q7.jpg",


        options: [
            "Verdadeiro",
            "Falso ",
            
            
            
        ],

        answer: 0
    },



    {
     question:
            "Qual é a lotação máxima permitida para veículos utilizados no serviço TVDE?",
             image: "q7.jpg",


        options: [
            "7 lugares, incluindo o motorista",
            "9 lugares, incluindo o motorista ",
            "12 lugares, incluindo o motorista",
            
            
        ],

        answer: 1
    },



    {
     question:
            "Os sinais verticais de obrigação são:",
             image: "q7.jpg",


        options: [
            "Circulares com fundo azul.",
            " Retangulares com fundo verde.",
            "Triangulares com borda vermelha.",
            
            
        ],

        answer: 0
    },

    {
     question:
            "Em que situação deve ligar para o número de emergência 112?",
             image: "q7.jpg",


        options: [
            "Para pedir informações de trânsito.",
            "Para chamar um reboque. ",
            "Sempre que houver necessidade de assistência urgente.",
            
            
        ],

        answer: 2
    },



    {
     question:
            "O que significa 'manter a distância de segurança?",
             image: "q7.jpg",


        options: [
            "Garantir a distância mínima entre veículos, de modo a evitar acidentes.",
            "Estar muito próximo do veículo da frente. ",
            
            
            
        ],

        answer: 0
    },



    {
     question:
            "O que deve fazer após utilizar um extintor?",
             image: "q7.jpg",


        options: [
            "Recarregá-lo ou substituí-lo por um novo.",
            " Guardá-lo no veículo, para a próxima utilização.",
            
            
            
        ],

        answer: 0
    },



    {
     question:
            "Qual é a idade máxima permitida para veículos utilizados no âmbito da TVDE?",
             image: "q7.jpg",


        options: [
            "5 ANOS",
            " 10 ANOS",
            "7 ANOS",
            
            
        ],

        answer: 2
    },



    {
     question:
            "Como deve proceder ao conduzir com neve ou gelo?",
             image: "q7.jpg",


        options: [
            "Aumentar a velocidade para evitar derrapagens.",
            " Travar bruscamente.",
            "Colocar correntes nos pneus e circular devagar.",
            
            
        ],

        answer: 2
    },



    {
     question:
            "Para sinalizar corretamente o local de um acidente, o motorista deve:",
             image: "q7.jpg",


        options: [
            "Ligar as luzes de perigo, vestir o colete refletor e colocar o triângulo de pré-sinalização de perigo.",
            " Abandonar o local do acidente.",
            
            
            
        ],

        answer: 0
    },



    {
     question:
            "Para mudar de via de circulação dentro de uma rotunda, o motorista deve:",
             image: "q7.jpg",


        options: [
            "Mudar de via sem sinalizar.",
            "Sinalizar e garantir que a manobra é segura. ",
            "Mudar rapidamente para sair mais depressa.",
            
            
        ],

        answer: 1
    },



    {
     question:
            "Qual é o prazo de validade do certificado de motorista TVDE?",
             image: "q7.jpg",


        options: [
            "3 anos",
            "5 anos ",
            "10 anos",
            
            
        ],

        answer: 1
    },



    {
     question:
            "Para se tornar motorista TVDE, deve do tor carta do condução da categoria B há mais de:",
             image: "q7.jpg",


        options: [
            "1 ano",
            "2 anos ",
            "3 anos",
            
            
        ],

        answer: 2
    },



    {
     question:
            "Em rotundas, pode circular na via mais à direita:",
             image: "q7.jpg",


        options: [
            "Apenas para sair na primeira saída.",
            " Sempre, independentemente da saída.",
            
            
            
        ],

        answer: 0
    },



    {
     question:
            "Quando é permitido ultrapassar pela direita?",
             image: "q7.jpg",


        options: [
            "Quando o veículo da frente circula lentamente.",
            " Quando o veículo da frente sinaliza que vai virar à esquerda.",
            "Em qualquer situação",
            
            
        ],

        answer: 1
    },



    {
     question:
            "É proibido ultrapassar:",
             image: "q7.jpg",


        options: [
            "Em lombas ou cruzamentos sem visibilidade.",
            " Quando o veículo é lento.",
            "Em autoestradas",
            
            
        ],

        answer: 0
    },



    {
     question:
            "A correta pressão dos pneus contribui para uma condução mais económica.",
             image: "q7.jpg",


        options: [
            "Verdadeiro",
            " Falso",
            
            
            
        ],

        answer: 0
    },



    {
     question:
            "Na ultrapassagem a uma bicicleta, deve manter uma distância mínima lateral?",
             image: "q7.jpg",


        options: [
            "Sim, de 1,5 metros.",
            "Sim, de 1 metro. ",
            "Não.",
            
            
        ],

        answer: 0
    },
    
     {
     question:
            "O que o motorista deve fazer ao sair de um caminho particular?",
             image: "p2.jpg",


        options: [
            "Ceder a passagem a todos os veículos e peões na via publica.",
            " Avançar sem ceder passagem.",
            
            
            
        ],

        answer: 0
    },




    {
     question:
            "O que deve fazer antes de iniciar uma ultrapassagem?",
             image: "q7.jpg",


        options: [
            "Verificar se há espaço suficiente e visibilidade.",
            " Aumentar a velocidade.",
            "Aproximar-se ao máximo do veículo da frente.",
            
            
        ],

        answer: 0
    },




    {
     question:
            "O que é a comunicação verbal?",
             image: "q7.jpg",


        options: [
            "Usar gestos e sinais para comunicar.",
            " Falar ou escrever para transmitir uma mensagem.",
            "Ficar em silêncio.",
            
            
        ],

        answer: 1
    },



    {
     question:
            "Como agir com um passageiro impaciente ou agressivo?",
             image: "q7.jpg",


        options: [
            "Responder com a mesma agressividade.",
            "Manter a calma, ser cordial e evitar o conflito. ",
            "Ignorar o passageiro e continuar a viagem.",
            
            
        ],

        answer: 1
    },
{
     question:
            "Quem deve avançar primeiro num cruzamento sem sinalização?",
             image: "p3.jpg",


        options: [
            "O veículo mais rápido.",
            " O veículo que circula pela esquerda.",
            "O veículo que circula pela direita",
            
            
        ],

        answer: 2
    },



    {
     question:
            "Numa ultrapassagem, o motorista deve voltar a sua via de trânsito:",
             image: "q7.jpg",


        options: [
            "Após aumentar a velocidade.",
            "Logo após concluir a manobra. ",
            "Assim que o veículo ultrapassado fique visível no retrovisor.",
            
            
        ],

        answer: 2
    },



    {
     question:
            "Quando a intensidade do trânsito aumenta, a velocidade deve:",
             image: "q7.jpg",


        options: [
            "Diminuir.",
            "Aumentar. ",
            "Ser mantida.",
            
            
        ],

        answer: 0
    },




    
    {
     question:
            "O que deve fazer perante um sinal de STOP?",
             image: "p4.jpg",


        options: [
            "Parar apenas se vier outro veículo.",
            "Parar obrigatoriamente antes de avançar. ",
            "Reduzir a velocidade.",
            
            
        ],

        answer: 1
    },



    {
     question:
            "Os serviços de TVDE podem ser pagos em dinheiro ou cartão de crédito.",
             image: "q7.jpg",


        options: [
            "Verdadeiro",
            " Falso",
            
            
            
        ],

        answer: 1
    },




    {
     question:
            "O que significa 'eco condução?",
             image: "q7.jpg",


        options: [
            "Utilizar apenas veículos elétricos.",
            " Conduzir de forma eficiente, reduzindo o consumo de combustível e poluição.",
            "Manter a velocidade máxima para chegar rapidamente ao destino.",
            
            
        ],

        answer: 1
    },




    {
     question:
            "Quem é responsável pela fiscalização do cumprimento das normas no serviço TVDE?",
             image: "q7.jpg",


        options: [
            "GNR e IMT",
            " GNR e PSP",
            "PSP, GNR e IMT",
            
            
        ],

        answer: 2
    },




    {
     question:
            "O que deve fazer ao conduzir em zonas de vento forte?",
             image: "q7.jpg",


        options: [
            "Virar o volante no sentido contrário ao do vento.",
            "Aumentar a velocidade para atravessar a zona rapidamente. ",
            "Reduzir a velocidade e manter firme o controlo do volante.",
            
            
        ],

        answer: 2
    },


     {
     question:
            "O que deve fazer perante um sinal de STOP?",
             image: "p5.jpg",


        options: [
            "Parar apenas se vier outro veículo.",
            " Parar obrigatoriamente antes de avançar.",
            "Reduzir a velocidade.",
            
            
            
        ],

        answer: 1
    },








    {
     question:
            "Quando se pode dizer que a comunicação tem sucesso?",
             image: "q7.jpg",


        options: [
            "Quando se fala muito rápido.",
            " Quando a mensagem é compreendida.",
            "Quando ninguém responde.",
            
            
        ],

        answer: 1
    },



    {
     question:
            "Quando o piso está escorregadio, o motorista deve:",
             image: "q7.jpg",


        options: [
            "Travar bruscamente.",
            "Reduzir a velocidade e evitar manobras bruscas. ",
            "Aumentar a velocidade.",
            
            
        ],

        answer: 1
    },



    {
     question:
            "O primeiro contacto com o motorista ajuda a criar uma boa impressão sobre o serviço.",
             image: "q7.jpg",


        options: [
            "Verdadeiro",
            "Falso ",
            
            
            
        ],

        answer: 0
    },



    {
     question:
            "E permitido ultrapassar em curvas com visibilidade reduzida?",
             image: "q7.jpg",


        options: [
            "Sim, é permitido.",
            " É proibido ultrapassar em curvas com visibilidade reduzida.",
            "Passar rapidamente antes que outro veículo chegue.",
            
            
        ],

        answer: 1
    },



    {
     question:
            "O que deve fazer em condições de nevoeiro?",
             image: "q7.jpg",


        options: [
            "Usar as luzes de nevoeiro e ajustar a velocidade.",
            "Aumentar a velocidade para sair da área com nevoeiro. ",
            "Manter as luzes desligadas para economizar energia.",
            
            
        ],

        answer: 0
    },



    {
     question:
            "O que deve respeitar em primeiro lugar?",
             image: "q7.jpg",


        options: [
            "Os sinais luminosos.",
            "As marcas rodoviárias. ",
            "As ordens da policia.",
            
            
        ],

        answer: 2
    },



    {
     question:
            "No primeiro contacto com uma vítima de um acidente, o que deve fazer primeiro?",
             image: "q7.jpg",


        options: [
            "Verificar se respira e se tem pulsação.",
            " Retirar a vítima do veículo imediatamente.",
            "Procurar por ferimentos visíveis.",
            
            
        ],

        answer: 0
    },



    {
     question:
            "O que deve fazer se houver um incêndio no motor do veículo?",
             image: "q7.jpg",


        options: [
            "Abrir o capot rapidamente e apagar as chamas com água.",
            "Usar o extintor e apontar à base das chamas. ",
            "Esperar que o fogo se apague.",
            
            
        ],

        answer: 1
    },



    {
     question:
            "Um motorista tem um comportamento profissional quando:",
             image: "q7.jpg",


        options: [
            "É apressado e impaciente durante a condução.",
            "Ignora os pedidos dos passageiros. ",
            "É educado, respeita os passageiros e atende às suas necessidades.",
            
            
        ],

        answer: 2
    },



    {
     question:
            "O que é obrigatório para o transporte de passageiros com mobilidade reduzida?",
             image: "q7.jpg",


        options: [
            "Um veículo com capacidade para transportar cadeiras de rodas",
            " Um veículo elétrico ou híbrid",
            "Um motorista com formação adicional",
            
            
        ],

        answer: 0
    },


    {
     question:
            "Quando deve usar o colete retrorrefletor?",
             image: "q7.jpg",


        options: [
            "Sempre que sair do veículo para sinalizar ou reparar.",
            " Somente em locais com pouca visibilidade.",
            "Apenas em estradas movimentadas.",
            
            
        ],

        answer: 0
    },



    {
     question:
            "O processo de comunicação requer, no mínimo:",
             image: "q7.jpg",


        options: [
            "Um emissor.",
            " Um recetor",
            "Um emissor e um recetor.",
            
            
            
        ],

        answer: 2
    },



    {
     question:
            "Para sinalizar corretamente o local de um acidente, o motorista deve:",
             image: "q7.jpg",


        options: [
            "Ligar as luzes de perigo, vestir o colete refletor e colocar o triângulo de pré-sinalização de perigo.",
            "Abandonar o local do acidente. ",
            
            
            
        ],

        answer: 0
    },



    {
     question:
            "O tempo máximo permitido para a condução de motoristas TVDE é de 10 horas num período de 24 horas.",
             image: "q7.jpg",


        options: [
            "Verdadeiro",
            " Falso",
            
            
            
        ],

        answer: 0
    },



    {
     question:
            "A que distância deve colocar o triângulo de pré-sinalização de perigo em caso de avaria?",
             image: "q7.jpg",


        options: [
            "Pelo menos 10 metros.",
            " Pelo menos 50 metros.",
            "Pelo menos 30 metros.",
            
            
        ],

        answer: 2
    },



    {
     question:
            "Uma condução defensiva é:",
             image: "q7.jpg",


        options: [
            "Estar atento aos outros condutores, antecipando situações de risco.",
            "Conduzir sempre a alta velocidade. ",
            
            
            
        ],

        answer: 0
    },



    {
     question:
            "Um veículo usado no serviço TVDE deve passar por uma inspeção técnica:",
             image: "q7.jpg",


        options: [
            "1 ano após a matrícula e, depois, todos os anos.",
            "2 anos após a matrícula e, depois, de dois em dois anos. ",
            "No prazo estipulado pelo IMT.",
            
            
        ],

        answer: 0
    },



    {
     question:
            "Ao conduzir à noite, o motorista deve:",
             image: "q7.jpg",


        options: [
            "Reduzir a velocidade apenas nas curvas.",
            " Manter os máximos ligados em todas as situações.",
            "Ver e ser visto, usando corretamente as luzes.",
            
            
        ],

        answer: 2
    },



    {
     question:
            "O motorista deve sinalizar a saída de uma rotunda:",
             image: "q7.jpg",


        options: [
            "Ao aproximar-se da saída.",
            " Não é necessário sinalizar.",
            "Apenas se houver trânsito intenso.",
            
            
        ],

        answer: 0
    },



    {
     question:
            "A velocidade deve ser adequada:",
             image: "q7.jpg",


        options: [
            "Apenas ao limite máximo permitido.",
            "Às condições da estrada e do trânsito. ",
            "À vontade do condutor.",
            
            
        ],

        answer: 1
    },



    {
     question:
            "Na comunicação com OS passageiros é importante:",
             image: "q7.jpg",


        options: [
            "Fazer perguntas durante toda a conversa.",
            " Ouvir para compreender.",
            "Falar rapidamente para terminar a conversa.",
            
            
        ],

        answer: 1
    },




    {
     question:
            "O que deve informar ao ligar para o 112, em caso de acidente?",
             image: "q7.jpg",


        options: [
            "Apenas o tipo de acidente.",
            "Localização exata, tipo de acidente e número de vítimas. ",
            "A cor dos veículos envolvidos no acidente.",
            
            
        ],

        answer: 1
    },



    {
     question:
            "A velocidade máxima permitida para um determinado veículo pode depender de:",
             image: "q7.jpg",


        options: [
            "As condições atmosféricas.",
            "A largura da via. ",
            "A sinalização vertical existente no local.",
            
            
        ],

        answer: 0
    },



    {
     question:
            "Qual a importância do tom de voz na comunicação?",
             image: "q7.jpg",


        options: [
            "Ajuda a transmitir a mensagem de forma clara.",
            " Dificulta a compreensão da mensagem.",
            
            
            
        ],

        answer: 0
    },



    {
     question:
            "Veículos usados no serviço TVDE podem ter matrícula estrangeira, desde que sejam autorizados pelo IMT.",
             image: "q7.jpg",


        options: [
            "Sim",
            " Não.",
            
            
            
        ],

        answer: 1
    },




     {
     question:
            "A sinalização existente obriga o motorista a seguir em frente?",
             image: "p6.jpg",


        options: [
            "Sim",
            " Não.",
            
            
            
        ],

        answer: 1
    },



    {
     question:
            "Um motorista deve comportar-se de forma?",
             image: "q7.jpg",


        options: [
            "Agressiva",
            " Passiva",
            "Assertiva",
            
            
        ],

        answer: 2
    },

    {
     question:
            "Os veículos TVDE podem circular nas vias reservadas a transportes públicos:",
             image: "q7.jpg",


        options: [
            "Sim",
            " Não.",
            
            
            
        ],

        answer: 1
    },

     {
     question:
            "Ao circular numa rotunda, o motorista deve saber que:",
             image: "q7.jpg",


        options: [
            "Todos os veículos entram ao mesmo tempo.",
            "Os veículos em serviço de urgência devem ceder a passagem aos veículos que circulam na rotunda. ",
            "Deve ceder a passagem aos veículos em serviço de urgência que entram na rotunda.",
            
            
        ],

        answer: 2
    },

    
     {
     question:
            "Em caso de acidente com o seu veículo, deve:",
             image: "q7.jpg",


        options: [
            "Sair rapidamente do veículo sem avisar outros condutores.",
            " Garantir a segurança no local, sinalizar e ligar para o 112.",
            "Resolver a situação sozinho, sem pedir ajuda.",
            
            
        ],

        answer: 1
    },

     {
     question:
            "Quando a visibilidade é reduzida, para além de utilizar as luzes, deve:",
             image: "q7.jpg",


        options: [
            "Continuar com a mesma velocidade.",
            " Parar o veículo.",
            "Reduzir a velocidade e aumentar a distância para o veículo da frente.",
            
            
        ],

        answer: 2
    },

     {
     question:
            "Conduzir com chuva terá como resultado:",
             image: "q7.jpg",


        options: [
            "Maior aderência dos pneus ao piso.",
            " A redução da visibilidade.",
            
            
            
        ],

        answer: 1
    },

     {
     question:
            "O sinal com luz amarela está intermitente, pelo que o motorista:",
             image: "p7.jpg",


        options: [
            "Deve parar.",
            " Deve acelerar.",
            "Pode passar, mas com cuidado.",
            
            
        ],

        answer: 2
    },

     {
     question:
            "No próximo entroncamento, o motorista deve ceder a passagem?",
             image: "p8.jpg",


        options: [
            "SIM",
            " NÃO",
            
            
            
        ],

        answer: 1
    },




    {
     question:
            "O sinal indica:",
             image: "p12.jpg",


        options: [
            "Passagem de peões.",
            " A existência de um túnel.",
            "Entrada num parque de estacionamento.",
            
            
            
        ],

        answer: 1
    },


     {
     question:
            "Neste local, posso transitar a ... Km/h?",
             image: "p9.jpg",


        options: [
            "Não, porque a sinalização vertical o proíbe.",
            " Sim, because dentro das localidades esta é a velocidade mínima obrigatória.",
            "Sim, porque o pavimento está em boas condições.",
            
            
        ],

        answer: 0
    },


    {
     question:
            "O que deve fazer perante este sinal?",
             image: "p10.jpg",


        options: [
            "Ceder a passagem a todos os veiculos.",
            " Avançar em primeiro lugar.",
            "Manter a velocidade.",
            
            
        ],

        answer: 0
    },


    {
     question:
            "O sinal indica:",
             image: "p11.jpg",


        options: [
            "Estacionamento autorizado.",
            " Estacionamento proibido.",
            "Apenas paragem permitida.",
            
            
        ],

        answer: 0
    },

    
    {
     question:
            "Quando um peão atravessa numa passagem para peões, o motorista deve:",
             image: "p1.jpg",


        options: [
            "Reduzir a velocidade, mas continue.",
            " Acelerar para passar antes do peão.",
            "Parar e deixar o peão atravessar.",
            
            
        ],

        answer: 2
    },

    




    


];


/* ==========================================
   PRACTICE
========================================== */

function startPractice() {

    sessionStorage.setItem(
        "quizType",
        "practice"
    );


    sessionStorage.setItem(
        "quizQuestions",
        JSON.stringify(questions)
    );


    window.location.href =
        "quiz.html";
}


/* ==========================================
   MOCK TEST
========================================== */

function startMockTest() {

    let shuffled =
        [...questions];


    shuffled.sort(
        () => Math.random() - 0.5
    );


    let mockQuestions =
        shuffled.slice(0, 30);


    sessionStorage.setItem(
        "quizType",
        "mock"
    );


    sessionStorage.setItem(
        "quizQuestions",
        JSON.stringify(mockQuestions)
    );


    window.location.href =
        "quiz.html";
}


/* ==========================================
   QUIZ VARIABLES
========================================== */

let quizQuestions = [];

let currentQuestion = 0;

let correctAnswers = 0;

let wrongAnswers = 0;

let answered = false;


/*
   Store answer status for each question

   null = not answered
   true = correct
   false = wrong
*/

let answerStatus = [];


const quizContainer =
    document.querySelector(
        ".quiz-card"
    );


/* ==========================================
   LOAD QUIZ
========================================== */

if (quizContainer) {

    const loggedIn =
        sessionStorage.getItem(
            "loggedIn"
        );


    if (loggedIn !== "true") {

        window.location.href =
            "index.html";

    }


    quizQuestions =
        JSON.parse(
            sessionStorage.getItem(
                "quizQuestions"
            )
        ) || [];


    if (
        quizQuestions.length === 0
    ) {

        window.location.href =
            "menu.html";

    } else {

        answerStatus =
            new Array(
                quizQuestions.length
            ).fill(null);


        createQuestionNavigation();

        showQuestion();

    }

}


/* ==========================================
   SHOW QUESTION
========================================== */

function showQuestion() {

    answered =
        answerStatus[currentQuestion] !== null;


    const question =
        quizQuestions[
            currentQuestion
        ];


    document.getElementById(
        "questionNumber"
    ).innerText =

        `QUESTION ${
            currentQuestion + 1
        } OF ${
            quizQuestions.length
        }`;


    document.getElementById(
        "questionText"
    ).innerText =
        question.question;
        const questionImage =
    document.getElementById("questionImage");

if (question.image) {

    questionImage.src =
        question.image;

    questionImage.style.display =
        "block";

} else {

    questionImage.style.display =
        "none";

}


    const optionsContainer =
        document.getElementById(
            "options"
        );


    optionsContainer.innerHTML = "";


    question.options.forEach(
        function(option, index) {

            const button =
                document.createElement(
                    "button"
                );


            button.className =
                "option";


            button.innerHTML = `

                <span class="option-letter">
                    ${String.fromCharCode(
                        65 + index
                    )}
                </span>

                <span class="option-text">
                    ${option}
                </span>

            `;


            button.onclick =
                function() {

                    selectAnswer(
                        index,
                        button
                    );

                };


            optionsContainer.appendChild(
                button
            );

        }
    );


    updateNavigation();


    if (answered) {

        showPreviousAnswer();

    } else {

        document.getElementById(
            "feedback"
        ).innerText = "";

        document.getElementById(
            "feedback"
        ).className =
            "feedback";

        document.getElementById(
            "nextButton"
        ).disabled = true;

    }

}


/* ==========================================
   SELECT ANSWER
========================================== */

function selectAnswer(
    selectedIndex,
    selectedButton
) {

    if (answered) {

        return;

    }


    answered = true;


    const question =
        quizQuestions[
            currentQuestion
        ];


    const allOptions =
        document.querySelectorAll(
            ".option"
        );


    const feedback =
        document.getElementById(
            "feedback"
        );


    if (
        selectedIndex ===
        question.answer
    ) {

        selectedButton.classList.add(
            "correct"
        );


        feedback.innerText =
            "✓ Correct Answer";


        feedback.className =
            "feedback correct-text";


        correctAnswers++;


        answerStatus[
            currentQuestion
        ] = true;


    } else {

        selectedButton.classList.add(
            "wrong"
        );


        allOptions[
            question.answer
        ].classList.add(
            "correct"
        );


        feedback.innerText =
            "✗ Wrong Answer";


        feedback.className =
            "feedback wrong-text";


        wrongAnswers++;


        answerStatus[
            currentQuestion
        ] = false;

    }


    document.getElementById(
        "nextButton"
    ).disabled = false;


    updateNavigation();

}


/* ==========================================
   SHOW PREVIOUS ANSWER
========================================== */

function showPreviousAnswer() {

    const question =
        quizQuestions[
            currentQuestion
        ];


    const allOptions =
        document.querySelectorAll(
            ".option"
        );


    const status =
        answerStatus[
            currentQuestion
        ];


    if (status === true) {

        allOptions[
            question.answer
        ].classList.add(
            "correct"
        );


        document.getElementById(
            "feedback"
        ).innerText =
            "✓ Correct Answer";


        document.getElementById(
            "feedback"
        ).className =
            "feedback correct-text";

    } else {

        /*
           Previous wrong answer is not stored
           separately in this simple version.
           Correct answer is shown.
        */

        allOptions[
            question.answer
        ].classList.add(
            "correct"
        );


        document.getElementById(
            "feedback"
        ).innerText =
            "✗ Wrong Answer";


        document.getElementById(
            "feedback"
        ).className =
            "feedback wrong-text";

    }


    document.getElementById(
        "nextButton"
    ).disabled = false;

}


/* ==========================================
   NEXT
========================================== */

function nextQuestion() {

    if (!answered) {

        return;

    }


    if (
        currentQuestion <
        quizQuestions.length - 1
    ) {

        currentQuestion++;

        showQuestion();

    } else {

        showResult();

    }

}


/* ==========================================
   PREVIOUS
========================================== */

function previousQuestion() {

    if (
        currentQuestion > 0
    ) {

        currentQuestion--;

        showQuestion();

    }

}


/* ==========================================
   QUESTION NAVIGATION
========================================== */

function createQuestionNavigation() {

    const nav =
        document.getElementById(
            "questionNav"
        );


    nav.innerHTML = "";


    quizQuestions.forEach(
        function(question, index) {

            const button =
                document.createElement(
                    "button"
                );


            button.className =
                "nav-number";


            button.innerText =
                index + 1;


            button.onclick =
                function() {

                    currentQuestion =
                        index;

                    showQuestion();

                };


            nav.appendChild(
                button
            );

        }
    );

}


/* ==========================================
   UPDATE NAVIGATION
========================================== */

function updateNavigation() {

    const buttons =
        document.querySelectorAll(
            ".nav-number"
        );


    buttons.forEach(
        function(button, index) {

            button.classList.remove(
                "active"
            );

            button.classList.remove(
                "correct-nav"
            );

            button.classList.remove(
                "wrong-nav"
            );


            if (
                index ===
                currentQuestion
            ) {

                button.classList.add(
                    "active"
                );

            }


            if (
                answerStatus[index] ===
                true
            ) {

                button.classList.add(
                    "correct-nav"
                );

            }


            if (
                answerStatus[index] ===
                false
            ) {

                button.classList.add(
                    "wrong-nav"
                );

            }

        }
    );

}


/* ==========================================
   RESULT
========================================== */

function showResult() {

    const total =
        quizQuestions.length;


    const percentage =
        Math.round(
            (
                correctAnswers /
                total
            ) * 100
        );


    const quizType =
        sessionStorage.getItem(
            "quizType"
        );


    document.querySelector(
        ".quiz-card"
    ).innerHTML = `

        <div class="result-page">

            <h1>
                Test Completed!
            </h1>


            <div class="result-box">

                <div class="result-item">

                    Total

                    <strong>
                        ${total}
                    </strong>

                </div>


                <div class="result-item">

                    Correct

                    <strong>
                        ${correctAnswers}
                    </strong>

                </div>


                <div class="result-item">

                    Wrong

                    <strong>
                        ${wrongAnswers}
                    </strong>

                </div>


                <div class="result-item">

                    Score

                    <strong>
                        ${percentage}%
                    </strong>

                </div>

            </div>


            <button
                class="finish-button"
                onclick="finishQuiz()">

                Finish

            </button>

        </div>

    `;

}


/* ==========================================
   HOME
========================================== */

function goHome() {

    window.location.href =
        "menu.html";

}


/* ==========================================
   LOGOUT
========================================== */

function logout() {

    sessionStorage.clear();

    window.location.href =
        "index.html";

}


/* ==========================================
   FINISH
========================================== */

function finishQuiz() {

    const quizType =
        sessionStorage.getItem(
            "quizType"
        );


    sessionStorage.removeItem(
        "quizQuestions"
    );


    sessionStorage.removeItem(
        "quizType"
    );


    if (
        quizType === "mock"
    ) {

        window.location.href =
            "index.html";

    } else {

        window.location.href =
            "menu.html";

    }

}