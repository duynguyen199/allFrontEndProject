$(document).ready(()=>{
   let content=$("#myId").html();
   console.log(content);


  let contentClass= $(".myClass").html();
  console.log(contentClass)

  let contentInput=$("#myInput").val();

  console.log("my input",contentInput)

  $("#btnClick").click(()=>{
    let text=$("#myInput").val();
    console.log(text)
  })
  $("#btnShow").click(()=>{
    // $("#divHello").css({display:"block"})
    $("#divHello").show();

  })
  $("#btnHide").click(()=>{
    // $("#divHello").css({display:"none"})
    $("divHello").hide();
  })
})