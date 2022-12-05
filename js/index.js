$(function () {
  // 打字机效果
  new Typed(".typewriter", {
    strings: ["谁无暴风劲雨时", "守得云开见月明"], //输出的文字
    typeSpeed: 200, //打字的速度
  });

  // github头像
  function githubAvatar(url) {
    $(".container").append(
      `<img src='${url}' alt='GitHub头像' class='avatar'>`
    );
  }
  axios({
    method: "GET",
    url: "https://api.github.com/users/kimtson",
  }).then((value) => {
    githubAvatar(value.data.avatar_url);
    $(".avatar").css("display", "block");
  });

  // 导航按钮事件
  $(".nav-btn").on("click", function () {
    $(".nav-bar").toggleClass("hidden");
  });
  $("main").on("click", function () {
    $(".nav-bar").removeClass("hidden");
  });

  // 微信扫码弹出和关闭
  $(".wechat-btn").on("click", function () {
    $(".wechat").css("display", "flex");
  });
  $(".close").on("click", function () {
    $(".wechat").css("display", "none");
  });

  // 玫瑰图
  var dom = document.getElementById("chart-container");
  var myChart = echarts.init(dom, null, {
    renderer: "canvas",
    useDirtyRect: false,
  });

  var option;
  option = {
    tooltip: {
      trigger: "item",
      formatter: "{b} : {c}%",
    },
    legend: {
      top: "bottom",
      data: [],
    },
    toolbox: {
      show: false,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true },
      },
    },
    color: [
      "#e76f51",
      "#4361ee",
      "#e9c46a",
      "#2a9d8f",
      "#f72585",
      "#d62828",
      "#8ecae6",
      "#023047",
    ],
    series: [
      {
        name: "Nightingale Chart",
        type: "pie",
        center: ["50%", "50%"],
        roseType: "area",
        itemStyle: {
          borderRadius: 12,
        },
        data: [
          { value: 95, name: "HTML" },
          { value: 85, name: "CSS" },
          { value: 65, name: "JavaScript" },
          { value: 30, name: "Vue2" },
          { value: 50, name: "Sass" },
          { value: 20, name: "NPM" },
          { value: 45, name: "AJAX" },
          { value: 20, name: "Git" },
        ],
      },
    ],
  };

  if (option && typeof option === "object") {
    myChart.setOption(option);
  }
  window.onresize = function () {
    myChart.resize();
  };

  // 页面滚动---导航条的变化
  $(window).on("scroll", function () {
    if ($(this).scrollTop() >= 0 && $(this).scrollTop() < 700) {
      $(".nav-bar li a")
        .eq(0)
        .addClass("active")
        .parent("li")
        .siblings("li")
        .children("a")
        .removeClass("active");
    } else if ($(this).scrollTop() >= 700 && $(this).scrollTop() < 1228) {
      $(".nav-bar li a")
        .eq(1)
        .addClass("active")
        .parent("li")
        .siblings("li")
        .children("a")
        .removeClass("active");
    } else if ($(this).scrollTop() >= 1191) {
      $(".nav-bar li a")
        .eq(2)
        .addClass("active")
        .parent("li")
        .siblings("li")
        .children("a")
        .removeClass("active");
    }
  });
});
