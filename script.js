// $(document).ready(function () {
//   $(".element").hide();

//   $(".SearchButton").click(function () {
//     $(".element").show();
//   });
// });

function js_check() {
  var selectedvalue1 = $("#Start").val();
  var selectedvalue2 = $("#Goal").val();

  $.get("http://127.0.0.1:5000", function (json_data) {
    var str = JSON.parse(json_data);
    console.log(str);
  });

  console.log(selectedvalue1);
  console.log(selectedvalue2);

  

  switch (selectedvalue1) {
    case "1":
      document.getElementById("msg1").innerHTML = "千歳駅";
      break;
    case "2":
      document.getElementById("msg1").innerHTML = "南千歳";
      break;
    case "3":
      document.getElementById("msg1").innerHTML = "研究棟";
      break;
    case "4":
      document.getElementById("msg1").innerHTML = "大学";
      break;
  }
}
