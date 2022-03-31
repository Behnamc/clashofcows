// get val
var val = 0, val_main = 0;

var myj = {
    cow: 5,
    pcow: 2,
    grass: 4,
    milk: 4,
    money: 10,
    farmer: 2,
    icecream: 5,
    day: 2,
    message: 'how many grass you want ?',

    sug1: 4,
    sug2: 4,
    sug3: 3,
    sug4: 6,
    sug5: 0,
    sug6: 2,

    color1: 'red',
    color2: 'orange',
    color3: 'blue',
    color4: 'purple',
    color5: 'green',
    color6: 'brown',

    contract:[
        {
            from: 'me',
            to: 'Behnam',
            send: 'milk',
            day_to_end: 3,
        },
    ],
    self_color: 'purple',
};

var myid;
function getId() {
    myid = parseInt(prompt("Please enter your id:"));
    get_inf();
}

$(document).ready(function () {
    // this is a test :
    set_things(myj);
    setInterval(get_inf, 3000);
    // main

    $("#send").mousedown(function () {
        val_main = val;
        val = 0;
        counter_val(val);
    });

    $("#up").mousedown(function () {
        val++;
        counter_val(val);
    });

    $("#up5").mousedown(function () {
        val += 5;
        counter_val(val);
    });

    $("#down").mousedown(function () {
        if (val > 0) {
            val--;
        }
        counter_val(val);
    });
});


function set_things(context) {


    // for (let i = 0; i < context["cow"]; i++) {
    //     $('#things').append(`<img src="{% static 'images/pcow.png' %}">`);
    // }
    // for (let i = 0; i < context["pcow"]; i++) {
    //     $('#things').append(`<img src="/static/images/pcow.png">`);
    // }
    // for (let i = 0; i < context["grass"]; i++) {
    //     $('#things').append(`<img src="/static/images/grass.png">`);
    // }
    // for (let i = 0; i < context["milk"]; i++) {
    //     $('#things').append(`<img src="/static/images/milk.png">`);
    // }

    document.getElementById('mymoney').innerHTML = context["money"];
    document.getElementById('farmer').innerHTML = context["farmer"];
    document.getElementById('icecream').innerHTML = context["icecream"];
    document.getElementById('day').innerHTML = context["day"];
    

    document.getElementById('message').innerHTML = context["message"];

    document.getElementById('sug1').innerHTML = context["sug1"];
    document.getElementById('sug2').innerHTML = context["sug2"];
    document.getElementById('sug3').innerHTML = context["sug3"];
    document.getElementById('sug4').innerHTML = context["sug4"];
    document.getElementById('sug5').innerHTML = context["sug5"];
    document.getElementById('sug6').innerHTML = context["sug6"];

    document.getElementById('sug1').style.color = context["color1"];
    document.getElementById('sug2').style.color = context["color2"];
    document.getElementById('sug3').style.color = context["color3"];
    document.getElementById('sug4').style.color = context["color4"];
    document.getElementById('sug5').style.color = context["color5"];
    document.getElementById('sug6').style.color = context["color6"];

    var ans = '';
    for (let i = 0; i < context['contract'].length ; i++) {
        
        ans = ans + `<div class="h1">
        from ${context['contract'][i]['from']}
        to ${context['contract'][i]['to']}
        day to end <span style="color:darkred;">${context['contract'][i]['day_to_end']}</span>
        </div>`;
        // send ${my_values(context['contract'][i]['send'])}

    }
    
    document.getElementById('contract').innerHTML = ans;

    document.getElementById('things').style.border = `1px solid ${context['self_color']}`;
    document.getElementById('contract').style.border = `1px solid ${context['self_color']}`;
    document.getElementById('values').style.border = `1px solid ${context['self_color']}`;
    document.getElementById('mother-message').style.border = `1px solid ${context['self_color']}`;
    

    
}


$("#").submit(function (e) {
    
    $.ajax({
        type: 'GET',
        url: "{% url 'post_friend' %}",
        data: serializedData,
        success: function (response) {
            
            var instance = JSON.parse(response["instance"]);

            var fields = instance[0]["fields"];var myp = document.getElementById('demo');
            myp.innerHTML = instance;
            $("#my_friends tbody").prepend(
                `<tr>
                <td>${fields["nick_name"]||""}</td>
                <td>${fields["first_name"]||""}</td>
                <td>${fields["last_name"]||""}</td>
                <td>${fields["likes"]||""}</td>
                <td>${fields["dob"]||""}</td>
                <td>${fields["lives_in"]||""}</td>
                </tr>`
            )
        },
        error: function (response) {
            // alert the error if any error occured
            alert(response["responseJSON"]["error"]);
        }
    })
})

// function my_values (value) {
//     return `<img src="/static/images/${value}.png">`;
// }

function counter_val(a) {
    if (a < 10) {
        a = '0' + a;
    }
    document.getElementById('val').innerHTML = a;
}
