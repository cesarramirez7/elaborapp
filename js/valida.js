$(function() {
    var form_contact = $("#formulario");

    form_contact.validate({
        errorElement: "span",
        errorClass: "help-block",
        //  validClass: 'stay',
        highlight: function (element, errorClass, validClass) {
            $(element).addClass(errorClass); //.removeClass(errorClass);
            $(element).closest('.form-group').addClass('has-error');
        },
        unhighlight: function (element, errorClass, validClass) {
            $(element).removeClass(errorClass); //.addClass(validClass);
            $(element).closest('.form-group').removeClass('has-error');
        },
        errorPlacement: function (error, element) {
            if (element.parent('.input-group').length) {
                error.insertAfter(element.parent());
            } else {
                error.insertAfter(element);
            }
        },
        ignore: [],
        rules: {
            nombre: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            asunto: {
                required: true,
                minlength: 5
            },
            mensaje: {
                required: true
            },
        },
        messages: {
            nombre: {
                required: "Escribe tu nombre"
            },
            email: {
                required: "Escribe el correo electrónico",
                email: "Escribe una dirección de email válida",
            },
            asunto: {
                required: "Escribe el asunto del mensaje",
            },
            mensaje: {
                required: "Escribe el mensaje"
            }
        },
        submitHandler: function (form_contact) {
            //form.submit();
            var form = $("#formulario").serialize();

            $.ajax({
                type:"POST",
                data: form,
                url:"send.php",
                success: function() {
                    $('#formulario :input').attr('disabled', 'disabled');
                    $('#formulario').fadeTo( "slow", 0.15, function() {
                        $(this).find(':input').attr('disabled', 'disabled');
                        $(this).find('label').css('cursor','default');
                        $('#success').fadeIn();
                  
                    });
                },
                error: function() {
                    $('#formulario').fadeTo( "slow", 0.15, function() {
                        $('#error').fadeIn();
                        
                    });
                }
            });
        }
    });
});