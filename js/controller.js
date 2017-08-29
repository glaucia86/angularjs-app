var melhoresAtletasApp = angular.module('melhoresAtletasApp', []);

melhoresAtletasApp.controller('AtletaController', function AtletaController($scope) {
    
    $scope.atletas = [
        {
            "nome": "Michael Phelps",
            "apelido" : "michael-phelps",
            "categoria": "Natação",
            "pais": "Estados Unidos",
            "bio": "Michael Phelps é um nadador norte-americano considerado o maior medalhista olímpico da história e recordista mundial. Também conhecido pelo apelido Homem-peixe, o atleta nasceu em Baltimore, é filho de policial e de uma diretora de escola."
        },
        {
            "nome": "Arthur Zanetti",
            "apelido" : "arthur-zanetti",
            "categoria": "Atletismo",
            "pais": "Brasil",
            "bio": "Arthur Zanetti O primeiro campeão olímpico da ginástica brasileira. Arthur Zanetti passa para a história como o primeiro atleta brasileiro a conquistar uma medalha olímpica para a ginástica artística, no dia 6 de agosto de 2012, na North Greenwich Arena, nos Jogos de Londres: ouro nas argolas, com 15.900 pontos."
        },
        {
            "nome": "Novak Djokovic",
            "apelido" : "novak-djokovic",
            "categoria": "Tênis",
            "pais": "Sérvia",
            "bio": "Novak é um dos atletas com o melhor preparo físico do mundo, em qualquer esporte. É extremamente dedicado”, afirmou o também sérvio Blaza Popovic, autor de “A Biografia de Novak Djokovic”, em entrevista ao Estado por telefone, de Belgrado."
        },
        {
            "nome": "Serena Williams",
            "apelido" : "serena-williams",
            "categoria": "Tênis",
            "pais": "Estados Unidos",
            "bio": "Serena Williams (1981) é uma tenista norte-americana. Foi campeã olímpica em Londres (2012) quando venceu a tenista russa Maria Sharapova. Serena Jameka Ross Evelyn Williams (1981) nasceu em Michigan, Estados Unidos, no dia 26 de setembro de 1981."
        },
        {
            "nome": "Usain Bolt",
            "apelido" : "usain-bolt",
            "categoria": "Atletismo",
            "pais": "Jamaica",
            "bio": "Usain Bolt (1986) é um atleta jamaicano considerado o maior velocista de todos os tempos. Foi Bicampeão Olímpico e Mundial. ... Usain St. Leo Bolt (1986), conhecido como Usain Bolt, nasceu em Trelawny, na Jamaica, no dia 21 de agosto de 1986."
        },
        {
            "nome": "Tiger Woods",
            "apelido" : "tiger-woods",
            "categoria": "Golf",
            "pais": "Estados Unidos",
            "bio": "Eldrick Tont Woods (Cypress, 30 de dezembro de 1975), mais conhecido como Tiger Woods, é um jogador profissional de golfe dos Estados Unidos. É considerado um dos melhores golfistas de todos os tempos. ... Ganhou mais vezes no PGA Tour do que qualquer outro golfista em atividade."
        },
        {
            "nome": "Simone Biles",
            "apelido" : "simone-biles",
            "categoria": "Atletismo",
            "pais": "Estados Unidos",
            "bio": "Simone Arianne Biles (Columbus, 14 de março de 1997) é uma ginasta profissional dos Estados Unidos, especialista na ginástica artística, vencedora de catorze medalhas em campeonatos mundiais, sendo dez delas de ouro. É a ginasta mais condecorada na história do seu país em mundiais."
        },
        {
            "nome": "Neymar Jr.",
            "apelido" : "neymar-jr",
            "categoria": "Futebol",
            "pais": "Brasil",
            "bio": "Neymar da Silva Santos Júnior (Mogi das Cruzes, 5 de fevereiro de 1992), mais conhecido como Neymar Jr. ou Neymar, é um futebolista brasileiro, que atua como atacante ou ponta. Atualmente defende o Paris Saint-Germain e a Seleção Brasileira."
        },
        {
            "nome": "Gustavo Kuerten",
            "apelido" : "gustavo-kuerten",
            "categoria": "Tênis",
            "pais": "Brasil",
            "bio": "Gustavo Kuerten é considerado o maior tenista da história do Brasil e um dos maiores tenistas da história do tênis mundial. É o único tenista da história a ganhar de Pete Sampras e Andre Agassi no mesmo torneio."
        },
        {
            "nome": "Cesar Cielo",
            "apelido" : "cesar-cielo",
            "categoria": "Natação",
            "pais": "Brasil",
            "bio": "César Augusto Cielo Filho, o mais recente herói do Brasil, dono doúnico ouro da história da natação brasileira em Olimpíadas, recordista olímpico dos 50m livre e bronze nos 100m livre, nasceu em 10 de janeiro de 1987 em Santa Bárbara d'Oeste, interior de São Paulo. César começou na natação aos 8 anos."
        },
        {
            "nome": "Ana Paula",
            "apelido" : "ana-paula",
            "categoria": "Vôlei de Praia",
            "pais": "Brasil",
            "bio": "Pela seleção brasileira de quadra, Ana Paula conseguiu, entre outros grandes resultados, o bicampeonato da BCV Cup (1994 e 1996) e o tri do Grand Prix (94, 96 e 98). Em Barcelona-1992, integrou a equipe quarta colocada nos Jogos Olímpicos. Quatro anos depois, estava também em Atlanta para receber a medalha de bronze."
        }
                
    ]
});