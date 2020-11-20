$(document).ready(function(){
    var object = [
        {
            img : '',
            text :"",
            choix1: "",
            choix2: "",
            nextstep1:1,
            nextstep2:1,
        },
        {
            img : '1.png',
            text :"Le réveil vient de sonner, c’est une belle journée qui s’annonce. Réprimant un grognement, tu t’étires de tout ton long dans ton lit. Il est l’heure de se lever !",
            choix1: "Tu appuies sur Snooze une dizaine de fois avant de te rendormir en laissant Skype ouvert. ",
            choix2: "Tu te lève, t’habille, et file prendre un bon petit déjeuner. ",
            nextstep1:3,
            nextstep2:2,
        },
        {
            img : 'energie.png',
            text :"Tes plein d'energie",
            choix1: "",
            choix2: "",
            nextstep1:4,
            nextstep2:4,
        },
        {
            img : 'dormir.jpeg',
            text :"Tes un feiganant",
            choix1: "",
            choix2: "",
            nextstep1:4,
            nextstep2:4,
        }, 
        {
            img : 'call.png',
            text :"Tes un feignant",
            choix1: "Tu refuses le cal, tu trouveras bien une excuse.",
            choix2: "Tu acceptes le call prêt à travailler et à réussir ta vie.",
            nextstep1:4,
            nextstep2:4,
        }, 
           
    ];
    var index = 0;


    $("li").click(function(){
        $("li").removeClass("active");
        $(this).addClass("active");
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
        $("#img").attr("src","./IMG/"+object[i].img);
        $("#text").text(object[i].text);
        $(".choice-item").eq(0).text(object[i].choix1)
        $("li").removeClass("active");
        $(".choice-item").eq(0).addClass('active')
        $(".choice-item").eq(1).text(object[i].choix2)
        $("#next").text("Suivant");
    };

});
