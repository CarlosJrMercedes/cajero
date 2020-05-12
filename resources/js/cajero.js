

    $(document).on("click","#send",function(){
        var numberField = $("#numberField").val();
        var passwordField = $("#passwordField").val();
        if(numberField.trim() != "" && passwordField.trim() != ""){

            $("#firts").attr("hidden",true);
            $("#second").attr("hidden",false);

        }else{

            Swal.fire("Stop","FILL IN THE FIELDS","error");

        };
    });

    $(document).on("click","#secondSend",function(){
        var money = 100;
        var quantityField = $("#quantityField").val();
        // Swal.fire("Hola",money,"info");
        var saldo= $("#cant").val();
        if(quantityField.trim() != ""){
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
                    textCont.textContent = "CURRENT BALANCE : $ "+money;
                    }
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