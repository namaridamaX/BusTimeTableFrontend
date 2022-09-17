$(document).ready(function () {
  //   $(".element").hide();
  $("#result").hide();

  $(".SearchButton").click(function () {
    // $(".element").show();
    $("#result").show();
  });
});

function js_check() {
  var StartValue = $("#Start").val();
  var GoalValue = $("#Goal").val();
  switch (StartValue) {
    case '0':
      switch (GoalValue) {
        case '1':
          var Sta = '千歳駅発';
          var Goa = "南千歳駅発";
          break;
        case '2':
          var Sta = "千歳駅発";
          var Goa = "研究実験棟発";
          break;
        case '3':
          var Sta = "千歳駅発";
          var Goa = "本部棟着";
          break;
      }
      break;

    case '1':
      switch (GoalValue) {
        case '2':
          var Sta = "南千歳駅発";
          var Goa = "研究実験棟発";
          break;
        case '3':
          var Sta = "南千歳駅発";
          var Goa = "本部棟着";
          break;
        case '0':
          var Sta = "南千歳駅着";
          var Goa = "千歳駅着";
          break;
      }
      break;

    case '2':
      switch (GoalValue) {
        case '3':
          var Sta = "研究実験棟発";
          var Goa = "本部棟着";
          break;
        case '1':
          var Sta = "研究実験棟着";
          var Goa = "南千歳駅着";
          break;
        case '0':
          var Sta = "研究実験棟着";
          var Goa = "千歳駅着";
          break;
      }
      break;

    case '3':
      switch (GoalValue) {
        case '0':
          var Sta = "本部棟発";
          var Goa = "千歳駅着";
          break;
        case '1':
          var Sta = "本部棟発";
          var Goa = "南千歳駅着";
          break;
        case '2':
          var Sta = "本部棟発";
          var Goa = "研究実験棟着";
          break;
      }
      break;
  }

  console.log(StartValue);
  console.log(GoalValue);
  console.log(Sta);
  console.log(Goa);

  $.get("http://127.0.0.1:5000", function (json_data) {
    var str = JSON.parse(json_data);
    console.log(str);
    console.log(str["千歳駅発"][0]);

    document.getElementById("msg1").innerHTML = str[Sta][0];
    document.getElementById("msg3").innerHTML = str[Goa][0];
  });
}
