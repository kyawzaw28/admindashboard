const sear = document.querySelector(".sear");
const sar = document.querySelector("#sar");
const pmclo = document.querySelector(".clobtn");
const hbg = document.querySelector(".hbg");
const bfcon = document.querySelector(".bfcon");
const notii = document.querySelector("#notii");
const seta = document.querySelector(".seta");
const topset = document.querySelector("#topset");
const rimo = document.querySelector(".rimo");
const adm = document.querySelector("#adm");
const comfo = document.querySelector("#comfo");
const paymentInformationClick = document.querySelector(".kwatwo");
const paymentInformationDiv = document.querySelector(".fofirTwo");
const registerInformationDiv = document.querySelector(".fofir");
const paymentInformationColor = document.querySelector(".jlkq");
const registerInformationClick = document.querySelector(".kwa");
const registerInformationColor = document.querySelector(".jlkw");
const tableExpendClick = document.querySelector(".dropdown-arrowIcon");
const tableExpendClickSecond = document.querySelector(
  ".dropdown-arrowIcon-two"
);
const tableExpendaddClass = document.querySelector(".jdiv");
const tableExpendaddClassSecond = document.querySelector(".forjs");
const sibebarClick = document.querySelector(".sidebtn");
const sidebar = document.querySelector(".sidebar");
const mainContent = document.querySelector(".rightside");
const sideText = document.querySelectorAll(".tablinkname");
const deleSubLine = document.querySelector(".remove-sub");
const deleSubLine2 = document.querySelector(".remove-sub2");
const sideSubText = document.querySelectorAll(".rmtext");
const formaSideBar = document.querySelector(".sidelink2");
const companyTagExpend = document.querySelector(".sidelinkcompany");
const showCompanySub = document.querySelector(".sidebar-hover-pointer");
const changeAdminPage = document.querySelector(".admindiv1");
const permission = document.querySelector(".admindivtwo");
const clickBasicInfo = document.querySelector(".linkbasic");
const clickPermission = document.querySelector(".linkbasic2");
const checkadmin = document.querySelector(".alladminsite");
const removeForm = document.querySelector(".linkjs");
const showImg = document.querySelector(".imgeffect");
const bodyEffect = document.querySelector(".forbodyeffect");
const loginClick = document.querySelector(".loginform-link");
const ptextRemove = document.querySelectorAll(".sideuserlist");
const dashboardHighlight = document.querySelector(".sidelink");
const userlistHighlight = document.querySelector(".userlink");
const accesslogHighlight = document.querySelector(".userlink2");
const findActive = document.querySelector(".active");
const hoverWork = document.querySelector(".checknav-width");
const protectLogin = document.querySelector(".container");
const copmanyCreateActive = document.querySelector(".addbtnco");
const mSideBar = document.querySelector(".mobile-sideBar");
const sideBtn2 = document.querySelector(".sidebtn2");

//accessLog Search Modal
if (sar) {
  sear.addEventListener("click", function () {
    sar.classList.add("modalat");
    hbg.style.zIndex = "10";
  });

  pmclo.addEventListener("click", function () {
    sar.classList.remove("modalat");
    hbg.style.zIndex = "-1";
  });

  hbg.addEventListener("click", function () {
    sar.classList.remove("modalat");
    hbg.style.zIndex = "-1";
  });
}

if (notii) {
  bfcon.addEventListener("click", function () {
    notii.classList.add("notit");
    hbg.style.zIndex = "10";
  });

  hbg.addEventListener("click", function () {
    notii.classList.remove("notit");
    hbg.style.zIndex = "-1";
  });
}

if (topset) {
  seta.addEventListener("click", function () {
    // console.log("work");
    topset.classList.add("hideset");
    hbg.style.zIndex = "10";
  });

  hbg.addEventListener("click", function () {
    topset.classList.remove("hideset");
    hbg.style.zIndex = "-1";
  });
}

if (adm) {
  rimo.addEventListener("click", function () {
    adm.classList.add("showadm");
    hbg.style.zIndex = "10";
  });

  hbg.addEventListener("click", function () {
    adm.classList.remove("showadm");
    hbg.style.zIndex = "-1";
  });
}

if (comfo) {
  sear.addEventListener("click", function () {
    // console.log("hello it's me");
    comfo.classList.add("showfo");
    hbg.style.zIndex = "10";
  });

  pmclo.addEventListener("click", function () {
    comfo.classList.remove("showfo");
    hbg.style.zIndex = "-1";
  });

  hbg.addEventListener("click", function () {
    comfo.classList.remove("showfo");
    hbg.style.zIndex = "-1";
  });
}

if (paymentInformationDiv) {
  paymentInformationClick.addEventListener("click", function () {
    registerInformationDiv.classList.remove("fosec");
    paymentInformationDiv.classList.add("fosec");
    registerInformationColor.style.background = "#ddd";
    paymentInformationColor.style.background = "#BC243C";
  });

  registerInformationClick.addEventListener("click", function () {
    paymentInformationDiv.classList.remove("fosec");
    registerInformationDiv.classList.add("fosec");
    paymentInformationColor.style.background = "#ddd";
    registerInformationColor.style.background = "#BC243C";
  });
}

if (tableExpendaddClass) {
  tableExpendClick.addEventListener("click", function () {
    // console.log("it's work");

    const check45deg = getComputedStyle(tableExpendClick);
    tableExpendClick.style.transform = "rotate(-45deg)";
    tableExpendaddClass.style.height = "20.5rem";
    tableExpendClick.style.marginLeft = "8.1px";
    if (check45deg.marginLeft === "8.1px") {
      tableExpendClick.style.marginLeft = "8px";
      tableExpendClick.style.transform = "rotate(-135deg)";
      tableExpendaddClass.style.height = "0";
    }
  });
}

if (tableExpendaddClassSecond) {
  tableExpendClickSecond.addEventListener("click", function () {
    // console.log("it's work");
    const checkwidth = getComputedStyle(tableExpendClickSecond);
    tableExpendClickSecond.style.transform = "rotate(-45deg)";
    tableExpendaddClassSecond.style.height = "20.5rem";
    tableExpendClickSecond.style.marginLeft = "8.1px";
    if (checkwidth.marginLeft === "8.1px") {
      tableExpendClickSecond.style.marginLeft = "8px";
      tableExpendClickSecond.style.transform = "rotate(-135deg)";
      tableExpendaddClassSecond.style.height = "0";
    }
  });
}

//thanks > https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_collapse_sidebar
// if (sidebar) {
//   slideClick.addEventListener("click", function () {
//     sidebar.style.width = "8rem";
//     changeContentWidth.style.width = "95%";
//     for (let i = 0; i < hideSideLink.length; i++) {
//       hideSideLink[i].style.display = "none";
//     }
//     for (let i = 0; i < removeComplexUI.length; i++) {
//       removeComplexUI[i].classList.remove("userlion");
//     }
//     for (let i = 0; i < removeComplexUI2.length; i++) {
//       removeComplexUI2[i].textContent = "";
//     }
//     cleanUI.style.top = "56px";
//   });
// }

if (sidebar) {
  const userlistAccessLog = [];
  sibebarClick.addEventListener("click", function () {
    const normalSideBar = getComputedStyle(sidebar);
    hoverWork.classList.add("companyhover");
    sidebar.style.width = "8rem";
    mainContent.style.width = "95%";
    for (let i = 0; i < sideText.length; i++) {
      sideText[i].style.display = "none";
    }
    deleSubLine.classList.remove("forline");
    deleSubLine2.classList.remove("forline2");
    for (let i = 0; i < ptextRemove.length; i++) {
      // sideSubText[i].classList.remove("sideuserlist");
      ptextRemove[i].style.display = "none";
      userlistAccessLog.push(ptextRemove[i].textContent);
      ptextRemove[i].textContent = "";
    }
    formaSideBar.classList.add("sidelinkjs");
    sidebar.style.marginLeft = "0.1px";

    if (
      normalSideBar.marginLeft === "0.1px" &&
      document.body.clientWidth > 760
    ) {
      hoverWork.classList.remove("companyhover");
      console.log(111111111, normalSideBar.marginLeft);
      sidebar.style.width = "24rem";
      mainContent.style.width = "90%";
      for (let i = 0; i < sideText.length; i++) {
        sideText[i].style.display = "";
      }
      deleSubLine.classList.add("forline");
      deleSubLine2.classList.add("forline2");
      for (let i = 0; i < ptextRemove.length; i++) {
        // sideSubText[i].classList.add("sideuserlist");
        ptextRemove[i].style.display = "block";
        ptextRemove[i].textContent = userlistAccessLog[i];
      }
      formaSideBar.classList.remove("sidelinkjs");
      sidebar.style.marginLeft = "0";
      // companyTagExpend.addEventListener("mouseenter", function () {
      //   console.log("2222222222");
      //   showCompanySub.classList.remove("point");
      // });
    }
  });
}

// if (sidebar) {
//   companyTagExpend.addEventListener("mouseout", function () {
//     showCompanySub.classList.add("point");
//   });
// }

if (checkadmin) {
  clickBasicInfo.addEventListener("click", function () {
    changeAdminPage.classList.add("admindiv2");
    permission.classList.remove("admindiv2");
    clickPermission.style.background = "#ddd";
    clickBasicInfo.style.background = "#BC243C";
  });

  clickPermission.addEventListener("click", function () {
    permission.classList.add("admindiv2");
    changeAdminPage.classList.remove("admindiv2");
    clickBasicInfo.style.background = "#ddd";
    clickPermission.style.background = "#BC243C";
  });
}

if (bodyEffect) {
  loginClick.addEventListener("click", function (e) {
    // console.log("ddks");
    e.preventDefault();
    removeForm.classList.remove("foreffecthd");
    showImg.classList.add("showimg");
    bodyEffect.classList.add("effectwhole");
    setTimeout(() => {
      window.location.href = loginClick.href;
    }, 6000);
  });
}

if (sidebar) {
  if (window.location.href === companyTagExpend.href) {
    findActive.classList.remove("active");
    companyTagExpend.classList.add("active");
  }

  if (window.location.href === userlistHighlight.href) {
    findActive.classList.remove("active");
    userlistHighlight.classList.add("active");
  }

  if (window.location.href === accesslogHighlight.href) {
    findActive.classList.remove("active");
    accesslogHighlight.classList.add("active");
  }

  if (window.location.href.includes("/companycreate.html")) {
    findActive.classList.remove("active");
    companyTagExpend.classList.add("active");
  }

  if (window.location.href.includes("/paymentlist.html")) {
    findActive.classList.remove("active");
    formaSideBar.classList.add("active");
  }

  // if (window.location.href === copmanyCreateActive.href) {
  //   console.log("work now");
  //   findActive.classList.remove("active");
  //   companyTagExpend.classList.add("active");
  // }
}

if (window.location.href.includes("/login.html")) {
  setTimeout(() => {
    removeForm.classList.add("foreffecthd");
  }, 600);
}

if (sidebar) {
  const mobileNormalSideBar = getComputedStyle(sidebar);
  console.log("a");
  // window.location.reload();
  const mobileUserlistAccessLog = ["User List", "Access Log"];
  sideBtn2.addEventListener("click", function () {
    // sidebar.style.marginLeft = "0";
    // console.log(mobileUserlistAccessLog);
    if (mobileNormalSideBar.marginLeft === "0.1px") {
      for (let i = 0; i < sideText.length; i++) {
        sideText[i].style.display = "";
      }
      deleSubLine.classList.add("forline");
      deleSubLine2.classList.add("forline2");
      for (let i = 0; i < ptextRemove.length; i++) {
        // console.log(ptextRemove[i]);
        // sideSubText[i].classList.add("sideuserlist");
        ptextRemove[i].style.display = "block";
        ptextRemove[i].textContent = mobileUserlistAccessLog[i];
      }
      formaSideBar.classList.remove("sidelinkjs");
    }

    mainContent.style.width = "100%";
    // sidebar.style.width = "24rem";
    sidebar.style.width = "28rem";
    sidebar.style.left = "0px";
    mSideBar.style.left = "0px";
    hbg.style.zIndex = "10";
  });

  hbg.addEventListener("click", function () {
    sidebar.style.left = "-55rem";
    hbg.style.zIndex = "-1";
  });
}
