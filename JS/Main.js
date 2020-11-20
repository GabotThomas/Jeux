$(document).ready(function(){
    var object = [
        {
            titre:'Remote game',
            img : 'logo.png',
            text :"",
            choix1: "",
            choix2: "",
            nextstep1:1,
            nextstep2:1,
            retour:0,
        },




        {//1
            titre:'Réveil',
            img : 'Bienvenue',
            img : '1.png',
            text :"Le réveil vient de sonner, c’est une belle journée qui s’annonce. Réprimant un grognement, tu t’étires de tout ton long dans ton lit. Il est l’heure de se lever !",
            choix1: "Tu appuies sur Snooze une dizaine de fois avant de te rendormir en laissant Skype ouvert. ",
            choix2: "Tu te lève, t’habille, et file prendre un bon petit déjeuner. ",
            nextstep1:3,
            nextstep2:2,
            retour:0,
        },
        {
            titre:"C'est bien",
            img : 'energie.png',
            text :"Tu es débordant d’énergie. Tes yeux brillent et tes cheveux se dressent sur ta tête. Tu es en mode Super Saiyan, rien ne peut t’arrêter, Thor peut aller se rhabiller.",
            choix1: "",
            choix2: "",
            nextstep1:4,
            nextstep2:4,
            retour:1,
        },
        {
            titre:'Fin Tragique',
            img : 'chat.png',
            text :"Voyant que tu t’es rendormi, ton chat vient s’allonger sur ton visage en ronronnant. Tu meurs, étouffé dans ton sommeil. On te l’avait bien dit de prendre un poisson rouge.",
            choix1: "",
            choix2: "",
            nextstep1:4,
            nextstep2:4,
            retour:1,
        }, 




        {   //4
            titre:'Call du matin',
            img : 'call.png',
            text :"Tu t'apprêtes à rédiger un mail client, mais ton patron t’appelle en visio pour une réu importante.",
            choix1: "Tu refuses le cal, tu trouveras bien une excuse.",
            choix2: "Tu acceptes le call prêt à travailler et à réussir ta vie.",
            nextstep1:5,
            nextstep2:6,
            retour:1,
        }, 
        {
            titre:'Fin Tragique',
            img : 'call.png',
            text :"Ton patron habite au dessus de chez toi. Furieux, il débarque dans ton appart et saccage tout. Oui, ton patron finira en prison, mais toi, tu es mort et re-mort.",
            choix1:"" ,
            choix2:"" ,
            nextstep1:7,
            nextstep2:7,
            retour:4,
        }, 
        {
        titre:"C'est bien",
        img : 'call.png',
        text :"Grâce à ton énergie, tu participes à la réunion avec entrain. Tu as fait une excellente impression, ton boss va certainement repenser à cette prime que tu lui as demandé à Noël dernier !",
        choix1:"" ,
        choix2:"" ,
        nextstep1:7,
        nextstep2:7,
        retour:4,
        }, 








        {
            //7
            titre:'Sauter une pause',
            img : 'manger.png',
            text :"Il est 13h et ton ventre se mets à grogner.",
            choix1: "Qu’importe, tu es inspiré, pas question de t’arrêter en si bon chemin. Tu décides de sauter le repas.",
            choix2: "Tu t’accordes un moment bien mérité pour regarder un (et un seul) épisode de ta série préférée en mangeant un plat de nouilles faites maison ! Yum !",
            nextstep1:9,
            nextstep2:8,
            retour:4,
        }, 
        {
            titre:"C'est bien",
            img : 'manger.png',
            text :"Tu te remplis la panse, devant “Happy tree friends”. Heureux de manger ton plat préféré, tu profite de cette pause bien méritée !",
            choix1: "",
            choix2: "",
            nextstep1:10,
            nextstep2:10,
            retour:7,
        }, 
        {
            titre:'Fin tragique',
            img : 'manger.png',
            text :"Le reste de bouffe d’hier se sent délaissé. D’un grincement, la porte du frigo s’ouvre, et un mix de pâtes au thon et de yaourts bon marché se rue sur toi pour te tuer.",
            choix1: "",
            choix2: "",
            nextstep1:10,
            nextstep2:10,
            retour:7,
        }, 



        {
            //10
            titre:'Sport ou Netflix',
            img : 'netflix.png',
            text :"Tu as fini de travailler, tu as du temps libre devant toi.",
            choix1: "Tu appelles tes potes pour faire une bonne séance de sport en visio et prendre soin de ton corps.",
            choix2: "Tu commences “The walking dead” en pensant que cela va durer 5 saisons.",
            nextstep1:11,
            nextstep2:12,
            retour:7,
        }, 
        {
            titre:"C'est bien",
            img : 'netflix.png',
            text :"Ton corps est désormais bien sculpté. Le mojo qui se dégage de toi est palpable. Ton crush like ta photo de profil !",
            choix1: "",
            choix2: "",
            nextstep1:13,
            nextstep2:13,
            retour:10,
        }, 
        {
            titre:'Fin tragique',
            img : 'fin-netflix.png',
            text :"Tu es plongé dans l’histoire. Littéralement. Ton esprit est aspiré par la télévision et… Tu deviens un zombie à ton tour. Au moins tu regardais pas TPMP (non pas que ça change quelque chose…).",
            choix1: "",
            choix2: "",
            nextstep1:13,
            nextstep2:13,
            retour:10,
        }, 
        
           
    ];
    var index = 0;
    remplace(object,0);


    $("li").click(function(){
        $("li").removeClass("active");
        $(this).addClass("active");
    });
    $("svg").click(function(){
        remplace(object,object[index].retour);
        index = object[index].retour;
    });

    $("a").click(function(){
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
        $("#titre").text(object[i].titre);
        $("#img").attr("src","./IMG/"+object[i].img);
        $("#text").text(object[i].text);
        $(".choice-item").eq(0).text(object[i].choix1)
        $("li").removeClass("active");
        $(".choice-item").eq(0).addClass('active')
        $(".choice-item").eq(1).text(object[i].choix2)
        $("#next").text("Suivant");
    };

});
