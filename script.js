$(document).ready(function () {
  $("#result1").hide();
  $("#result2").hide();
  $("#result3").hide();

  // $(".SearchButton").click(function () {
  //   $("#result1").show();
  //   $("#result2").show();
  //   $("#result3").show();
  // });
});

$(document).ready(function () {
  const today = new Date();
  var element = document.querySelector('input[type="time"]');
  var hour = ("0"+today.getHours()).slice(-2);
  var minute = ("0"+today.getMinutes()).slice(-2);
  var today_time = hour + ":" + minute;
  element.value = today_time;
});

function TimeComparison(time_obj) {
  let time_array = [];
  let value_today = new Date();
  let value_con = new Date();

  var timeControl = document.querySelector('input[type="time"]');
  var value_time = timeControl.value;
  let hm = value_time.split(":");
  let h = hm[0];
  let m = hm[1];
  value_con.setHours(Number(h));
  value_con.setMinutes(Number(m));

  for (i = 0; i < Object.keys(time_obj).length; i++) {
    s_time = time_obj[i];
    if (s_time != null) {
      let hour_mins = s_time.split(":");
      let hour = hour_mins[0];
      let mins = hour_mins[1];

      value_today.setHours(Number(hour));
      value_today.setMinutes(Number(mins));

      if (value_today >= value_con) {
        time_array.push(i);
        return time_array;
      }
    }
  }
  time_array.push(100);
  return time_array;
}

function start_disable() {
  var Goal_value = $("#Goal").val();
  switch (Goal_value) {
    case "0":
      document.getElementById("Start").options[0].disabled = true;
      document.getElementById("Start").options[1].disabled = false;
      document.getElementById("Start").options[2].disabled = false;
      document.getElementById("Start").options[3].disabled = false;
      break;
    case "1":
      document.getElementById("Start").options[0].disabled = false;
      document.getElementById("Start").options[1].disabled = true;
      document.getElementById("Start").options[2].disabled = false;
      document.getElementById("Start").options[3].disabled = false;
      break;
    case "2":
      document.getElementById("Start").options[0].disabled = false;
      document.getElementById("Start").options[1].disabled = false;
      document.getElementById("Start").options[2].disabled = true;
      document.getElementById("Start").options[3].disabled = false;
      break;
    case "3":
      document.getElementById("Start").options[0].disabled = false;
      document.getElementById("Start").options[1].disabled = false;
      document.getElementById("Start").options[2].disabled = false;
      document.getElementById("Start").options[3].disabled = true;
      break;
  }
}

function goal_disable() {
  var Start_value = $("#Start").val();
  switch (Start_value) {
    case "0":
      document.getElementById("Goal").options[0].disabled = true;
      document.getElementById("Goal").options[1].disabled = false;
      document.getElementById("Goal").options[2].disabled = false;
      document.getElementById("Goal").options[3].disabled = false;
      break;
    case "1":
      document.getElementById("Goal").options[0].disabled = false;
      document.getElementById("Goal").options[1].disabled = true;
      document.getElementById("Goal").options[2].disabled = false;
      document.getElementById("Goal").options[3].disabled = false;
      break;
    case "2":
      document.getElementById("Goal").options[0].disabled = false;
      document.getElementById("Goal").options[1].disabled = false;
      document.getElementById("Goal").options[2].disabled = true;
      document.getElementById("Goal").options[3].disabled = false;
      break;
    case "3":
      document.getElementById("Goal").options[0].disabled = false;
      document.getElementById("Goal").options[1].disabled = false;
      document.getElementById("Goal").options[2].disabled = false;
      document.getElementById("Goal").options[3].disabled = true;
      break;
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

  $.get("http://127.0.0.1:5000", function (json_data) {
    var str = JSON.parse(json_data);
    array = TimeComparison(str[Sta]);
    i1 = array[0];
    i2 = i1 + 1;
    i3 = i2 + 1;
    if (str[Sta][i1] != null) {
      $("#result1").show();
      document.getElementById("msg1").innerHTML = str[Sta][i1];
      document.getElementById("msg3").innerHTML = str[Goa][i1];
    } else if (str[Sta][i1] == null) {
      $("#result1").hide();
    }
    if (str[Sta][i2] != null) {
      $("#result2").show();
      document.getElementById("msg4").innerHTML = str[Sta][i2];
      document.getElementById("msg5").innerHTML = str[Goa][i2];
    } else if (str[Sta][i2] == null) {
      $("#result2").hide();
    }
    if (str[Sta][i3] != null) {
      $("#result3").show();
      document.getElementById("msg6").innerHTML = str[Sta][i3];
      document.getElementById("msg7").innerHTML = str[Goa][i3];
    } else if (str[Sta][i3] == null) {
      $("#result3").hide();
    }
  });
}
