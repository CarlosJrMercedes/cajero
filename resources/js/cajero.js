

    $(document).on("click","#send",function(){
        const quantiyClass = document.querySelector(".quantiyClass");
        var numberField = $("#numberField").val();
        var passwordField = $("#passwordField").val();
        if(numberField.trim() != "" && passwordField.trim() != ""){

            $("#firts").attr("hidden",true);
            $("#second").attr("hidden",false);
            quantiyClass.focus();

        }else{

            Swal.fire("Stop","FILL IN THE FIELDS","error");

        };
    });

    $(document).on("click","#secondSend",function(){
        var money = parseInt($("#balance").val());
        var quantityField = $("#quantityField").val();

        var saldo= $("#cant").val();
        if(quantityField.trim() != ""){
        const quantiyClass = document.querySelector(".quantiyClass");
        const textCont = document.querySelector(".result");
            if(quantityField.trim() > 0 && quantityField.trim() <= money){
                Swal.fire({
                    title: 'ARE YOU SURE TO WITHDRAW THAT MONEY',
                    icon: 'info',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'YES, I´M SURE'
                  }).then((result) => {
                    if (result.value) {
                      Swal.fire(
                        'success!',
                        'money successfully withdrawn.',
                        'success'
                      );

                    $("#currentBalance").attr("hidden", true);
                    money = money - quantityField;
                    textCont.innerHTML = "CURRENT BALANCE : $ <b>"+money+"</b>";
                    $("#balance").val(money);
                    $("#quantityField").val("");
                    quantiyClass.focus();



                    };

                  });

            }else{
                if(quantityField.trim() > money)
                {
                    Swal.fire("INFORMATION","YOU DON'T HAVE ENOUGH MONEY","info");

                }else{
                    if(quantityField.trim() <= 0){

                        Swal.fire("WARNING","VALUE NOT VALID","error");

                    }
                }
            };

        }else{

            Swal.fire("Stop","FILL IN THE FIELDS","error");

        };


    });


    $(document).on("click","#cancel",function(){
        const textCont = document.querySelector(".result");
        var texto = "CURRENT BALANCE : <b>$100.00</b>";
        textCont.innerHTML = texto;

        $("#balance").val("100");
        $("#numberField").val("");
        $("#passwordField").val("");
        $("#firts").attr("hidden",false);
        $("#second").attr("hidden",true);


    });


