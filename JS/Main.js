$(document).ready(function(){
    var object = [
        {
            page:1,
            titre:'Remote game',
            img : 'logo.png',
            text :"",
            choix1: "",
            choix2: "",
            nextstep1:1,
            nextstep2:1,
            retour:0,
            bouton:"Jouer"
        },




        {//1
            page:2,
            titre:'Réveil',
            img : 'Bienvenue',
            img : '1.png',
            text :"Le réveil vient de sonner, c'est une belle journée qui s'annonce. Réprimant un grognement, tu t'étires de tout ton long dans ton lit. Il est l'heure de se lever !",
            choix1: "Tu appuies sur Snooze une dizaine de fois avant de te rendormir en laissant Skype ouvert. ",
            choix2: "Tu te lèves, tu t'habilles, et tu files prendre un bon petit déjeuner.",
            nextstep1:3,
            nextstep2:2,
            retour:0,
            bouton:""
        },
        {
            page:3,
            titre:"C'est bien",
            img : 'energie.png',
            text :"Tu es débordant d'énergie. Tes yeux brillent et tes cheveux se dressent sur ta tête. Tu es en mode Super Saiyan, rien ne peut t'arrêter, Thor peut aller se rhabiller.",
            choix1: "",
            choix2: "",
            nextstep1:4,
            nextstep2:4,
            retour:1,
            bouton:""
        },
        {
            page:4,
            titre:'Fin Tragique',
            img : 'chat.png',
            text :"Voyant que tu t'es rendormi, ton chat vient s'allonger sur ton visage en ronronnant. Tu meurs, étouffé dans ton sommeil. On te l'avait bien dit de prendre un poisson rouge.",
            choix1: "",
            choix2: "",
            nextstep1:1,
            nextstep2:1,
            retour:1,
            bouton:"Recommencer"
        }, 




        {   //4
            page:2,
            titre:'Call du matin',
            img : 'cbcall.png',
            text :"Tu t'apprêtes à rédiger un mail client, mais ton patron t'appelle en visio pour une réu importante.",
            choix1: "Tu refuses le call, tu trouveras bien une excuse.",
            choix2: "Tu acceptes le call prêt à travailler et à réussir ta vie.",
            nextstep1:5,
            nextstep2:6,
            retour:1,
            bouton:""
        }, 
        {
            page:3,
            titre:'Fin Tragique',
            img : 'ftcall.png',
            text :"Ton patron habite au dessus de chez toi. Furieux, il débarque dans ton appart et saccage tout. Oui, ton patron finira en prison, mais toi, tu es mort et re-mort.",
            choix1:"" ,
            choix2:"" ,
            nextstep1:7,
            nextstep2:7,
            retour:4,
            bouton:""
        }, 
        {
            page:4,
            titre:"C'est bien",
            img : 'call.png',
            text :"Grâce à ton énergie, tu participes à la réunion avec entrain. Tu as fait une excellente impression, ton boss va certainement repenser à cette prime que tu lui as demandé à Noël dernier !",
            choix1:"" ,
            choix2:"" ,
            nextstep1:4,
            nextstep2:4,
            retour:4,
            bouton:"Recommencer"
        }, 








        {
            //7
            page:2,
            titre:'Sauter une pause',
            img : 'manger.png',
            text :"Il est 13h et ton ventre se met à grogner.",
            choix1: "Qu'importe, tu es inspiré, pas question de t'arrêter en si bon chemin. Tu décides de sauter le repas.",
            choix2: "Tu t'accordes un moment bien mérité pour regarder un (et un seul) épisode de ta série préférée en mangeant un plat de nouilles faites maison ! Yum !",
            nextstep1:9,
            nextstep2:8,
            retour:4,
            bouton:""
        }, 
        {
            page:3,
            titre:"C'est bien",
            img : 'potato.png',
            text :"Tu te remplis la panse, devant 'Happy tree friends'. Heureux de manger ton plat préféré, tu profites de cette pause bien méritée !",
            choix1: "",
            choix2: "",
            nextstep1:10,
            nextstep2:10,
            retour:7,
            bouton:""
        }, 
        {
            page:4,
            titre:'Fin tragique',
            img : 'ftpause.png',
            text :"Le reste de bouffe d'hier se sent délaissé. D'un grincement, la porte du frigo s'ouvre, et un mix de pâtes au thon et de yaourts bon marché se rue sur toi pour te tuer.",
            choix1: "",
            choix2: "",
            nextstep1:7,
            nextstep2:7,
            retour:7,
            bouton:"Recommencer"
        }, 



        {
            //10
            page:2,
            titre:'Sport ou Netflix',
            img : 'netflix.png',
            text :"Tu as fini de travailler, tu as du temps libre devant toi.",
            choix1: "Tu appelles tes potes pour faire une bonne séance de sport en visio et prendre soin de ton corps.",
            choix2: "Tu commences 'The Walking Dead' en pensant que cela ne va durer que 5 saisons.",
            nextstep1:11,
            nextstep2:12,
            retour:7,
            bouton:""
        }, 
        {
            page:3,
            titre:"C'est bien",
            img : 'cbnetflix.png',
            text :"Ton corps est désormais bien sculpté. Le mojo qui se dégage de toi est palpable. Ton crush like ta photo de profil !",
            choix1: "",
            choix2: "",
            nextstep1:13,
            nextstep2:13,
            retour:10,
            bouton:""
        }, 
        {
            page:4,
            titre:'Fin tragique',
            img : 'finnetflix.png',
            text :"Tu es plongé dans l'histoire. Littéralement. Ton esprit est aspiré par la télévision et… Tu deviens un zombie à ton tour. Au moins tu regardais pas TPMP (non pas que ça change quelque chose…).",
            choix1: "",
            choix2: "",
            nextstep1:10,
            nextstep2:10,
            retour:10,
            bouton:"Recommencer"
        }, 




        {
            //13
            page:2,
            titre:'Se coucher',
            img : 'coucher.png',
            text :"Après une longue journée, il est enfin temps que tu ailles te reposer.",
            choix1: "Après un chapitre de ton roman du moment, tu vas rejoindre les bras de Morphée, tu as rendez-vous avec elle avant minuit.",
            choix2: "Tu vas juste faire un petit tour sur le compte Instagram de @infinityscroll.",
            nextstep1:14,
            nextstep2:15,
            retour:10,
            bouton:""
        }, 
        {
            page:3,
            titre:"C'est bien",
            img : 'licorne.png',
            text :"Ta journée s'est parfaitement déroulée ! Grâce à ton courage et ta persévérance, tu as réussi à : décrocher une prime, amorcer une discussion avec ton crush, avoir un corps de rêve, tout en te gardant du temps pour toi et avec tes amis ! Voilà une médaille. Tu peux l'imprimer, l'encadrer et te rappeler à quel point tu es génial chaque fois que tu poseras les yeux dessus !",
            choix1: "",
            choix2: "",
            nextstep1:16,
            nextstep2:16,
            retour:13,
            bouton:""
        }, 
        {
            page:4,
            titre:'Fin tragique',
            img : 'ftcoucher.PNG',
            text :"Tu savais que devant un écran, on cligne moins souvent des yeux ? Tes globes oculaires se dessèchent et tombent de leurs orbites. Maintenant tu sais.",
            choix1: "",
            choix2: "",
            nextstep1:13,
            nextstep2:13,
            retour:13,
            bouton:"Recommencer"
        }, 
        
        
           
    ];
    var index = 0;
    remplace(object,0);

    $("#back").click(function(){
        remplace(object,object[index].retour);
        index = object[index].retour;
    });

    $(".next,.choice-item").click(function(){
        $(".choice-item").removeClass("active");
        $(this).addClass("active");
        var init = $(".active").data("choice");
        if(init == 1){
            remplace(object,object[index].nextstep1);
            index = object[index].nextstep1;
        }
        else{
            remplace(object,object[index].nextstep2);
            index = object[index].nextstep2;
        }
    });
    function remplace(object,i){
        if(object[i].page == 1){
            $('body').attr('class','pres');
        }
        else if(object[i].page == 2){
            $('body').attr('class','choice');
        }
        else if(object[i].page == 3){
            $('body').attr('class','bon-rep rep');
        }
        else{
            $('body').attr('class','mauv-rep rep');
        }
        $("#titre").text(object[i].titre);
        $("#img").attr("src","./IMG/"+object[i].img);
        $("#text").text(object[i].text);
        $(".choice-item > p").eq(0).text(object[i].choix1)
        $("li").removeClass("active");
        $(".choice-item").eq(0).addClass('active')
        $(".choice-item > p").eq(1).text(object[i].choix2)
        $("#next").text(object[i].bouton);
    };

});
