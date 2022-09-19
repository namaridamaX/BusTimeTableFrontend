$(document).ready(function () {
  $("#result1").hide();
  $("#result2").hide();
  $("#result3").hide();

  $(".SearchButton").click(function () {
    $("#result1").show();
    $("#result2").show();
    $("#result3").show();
  });
});

function TimeComparison(time_obj) {
  let time_array = [];
  let today = new Date();
  let value_today = new Date();

  for (i = 0; i < Object.keys(time_obj).length; i++) {
    s_time = time_obj[i];
    if (s_time != null) {
      let hour_mins = s_time.split(":");
      let hour = hour_mins[0];
      let mins = hour_mins[1];

      value_today.setHours(Number(hour));
      value_today.setMinutes(Number(mins));

      if (value_today >= today) {
        time_array.push(i);
        if ((time_array.length = 3)) {
          return time_array;
        }
      }
    }
  }
}

function js_check() {
  var StartValue = $("#Start").val();
  var GoalValue = $("#Goal").val();
  switch (StartValue) {
    case "0":
      switch (GoalValue) {
        case "1":
          var Sta = "千歳駅発";
          var Goa = "南千歳駅発";
          break;
        case "2":
          var Sta = "千歳駅発";
          var Goa = "研究実験棟発";
          break;
        case "3":
          var Sta = "千歳駅発";
          var Goa = "本部棟着";
          break;
      }
      break;

    case "1":
      switch (GoalValue) {
        case "2":
          var Sta = "南千歳駅発";
          var Goa = "研究実験棟発";
          break;
        case "3":
          var Sta = "南千歳駅発";
          var Goa = "本部棟着";
          break;
        case "0":
          var Sta = "南千歳駅着";
          var Goa = "千歳駅着";
          break;
      }
      break;

    case "2":
      switch (GoalValue) {
        case "3":
          var Sta = "研究実験棟発";
          var Goa = "本部棟着";
          break;
        case "1":
          var Sta = "研究実験棟着";
          var Goa = "南千歳駅着";
          break;
        case "0":
          var Sta = "研究実験棟着";
          var Goa = "千歳駅着";
          break;
      }
      break;

    case "3":
      switch (GoalValue) {
        case "0":
          var Sta = "本部棟発";
          var Goa = "千歳駅着";
          break;
        case "1":
          var Sta = "本部棟発";
          var Goa = "南千歳駅着";
          break;
        case "2":
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
    array = TimeComparison(str[Sta]);
    console.log(array[1]);
    console.log(array[2]);
    i1 = array[0];
    i2 = i1+1;
    i3 = i2+1;
    document.getElementById("msg1").innerHTML = str[Sta][i1];
    document.getElementById("msg3").innerHTML = str[Goa][i1];
    document.getElementById("msg4").innerHTML = str[Sta][i2];
    document.getElementById("msg5").innerHTML = str[Sta][i2];
    document.getElementById("msg6").innerHTML = str[Sta][i3];
    document.getElementById("msg7").innerHTML = str[Sta][i3];
  });
}
